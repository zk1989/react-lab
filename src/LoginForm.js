import {useState} from "react";


export function LoginForm(props) {
    const [email, setEmail] = useState();

    function handleChange(event) {
        setEmail(event.target.value);
    }


    return (<div>
        <h1>Witaj w systemie zapisow na zajecia</h1>
        <h2>Zaloguj sie mailem</h2>
        <input type="text" onChange={handleChange} />
        <button type="button" onClick={() => props.onLogin(email)}>Wchodze</button>
    </div>)
}