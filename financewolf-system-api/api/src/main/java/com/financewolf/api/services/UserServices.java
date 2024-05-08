package com.financewolf.api.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.financewolf.api.models.UserCredentials;
import com.financewolf.api.models.UserPassword;
import com.financewolf.api.repositories.UserRepository;
import com.financewolf.api.services.PasswordServices;

import jakarta.transaction.Transactional;

@Service
public class UserServices {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordServices passwordService;

    public UserCredentials findById(Long id) {
        Optional<UserCredentials> userFound = this.userRepository.findById(id);

        return userFound.orElseThrow(() -> new RuntimeException(String.format(
            "O usuário de ID %s não foi encontrado.", id)));
    }

    public UserCredentials findByEmail(String email) {
        Optional<UserCredentials> userFound = this.userRepository.findByEmail(email);

        System.out.println("PIMBAS: " + email);

        return userFound.orElseThrow(() -> new RuntimeException(String.format("O usuário com o email %s não foi encontrado.", email)));
    }

    @Transactional
    public UserCredentials createUser(UserCredentials userReceivedData) {
        userReceivedData.setId(null); // Vai impedir que, de alguma forma, o ID seja inserido préviamente na criação do user

        // Aqui a gente cria a tabela de senha primeiro e armazenamos o modelo nessa variável. A partir disso, a gente pega esse modelo e seta o idPassword lá no modelo de usuário pra criar o relacionamento!
        UserPassword passId = this.passwordService.createPassword(userReceivedData.getPassword());
        userReceivedData.setIdPassword(passId); 


        this.userRepository.save(userReceivedData);
        return userReceivedData;
    }
}