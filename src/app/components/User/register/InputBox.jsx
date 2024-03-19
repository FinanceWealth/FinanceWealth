"use client";

import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import ShowPass from '../login/ShowPass';
import '../../../styles/registerPage.scss';

const InputBox = (showPassTran, passwordTran, emailTran, keepLoginTran, passwordConfirm) => {
    return(
    <>
        <div id="inputBox" className="flex flex-col">
                <div className="inputContainer">
                    <input type="email" id="email" name="email" className="input-email" placeholder={emailTran} />
                </div>
                <div className="inputContainer">
                    <ShowPass quote={showPassTranslation} placeholder={passwordTranslation} />
                </div>
                <div className="inputContainer">
                    <ShowPass quote={passwordConfirm} placeholder={passwordConfirm} />
                </div>
        </div>
            <div className="checkboxContainer">
                <input type="checkbox" name="keepLogin" id="keepLogin" onClick={() => {console.log(keepLoginTran)}} />
                <label for="keepLogin">{keepLoginTran}</label>
            </div>
    </>
    );
};

export default InputBox;