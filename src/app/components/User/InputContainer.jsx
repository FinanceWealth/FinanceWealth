const InputContainer = ({type, options, selectDefault, id, name, label, placeholder, required, className}) => {
    return(
        <div className="inputContainer">
            {label ? <label htmlFor={name}>{label}</label> : null}
            {type == 'select' 
            
            ? 
            <select id={id} name={name} className={className}>
                <option selected="selected" disabled>{selectDefault}</option>
                {options.map((data) => {return <option key={Math.random()} value={data.value}>{data.option}</option>})}
            </select> 
            
            : 

            <input type={type} className={className} id={id} name={name} placeholder={placeholder} required={required ? "true" : "false"} />}
        </div>
    );
};

export default InputContainer;