import {useState} from "react";
import "milligram";


function App() {

    const [email, setEmail] = useState();
    const [logged, setLogged] = useState(false)

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleClick(event) {
        setLogged(logged => !logged);
    }

    // let message;
    // if (email.length < 10) {
    //     message = <div>Ale masz krótki adres!</div>;
    // } else if (email.length < 15) {
    //     message = <div>Twój adres e-mail jest w sam raz.</div>;
    // } else {
    //     message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    // }
    //
    // return (
    //     <div>
    //         <h1>System do zapisów na zajęcia</h1>
    //         <h2>Twój e-mail to {email}.</h2>
    //         <h3>{message}</h3>
    //         <input type="text" onChange={handleChange} value={email} />
    //         <button type="button" onClick={() => alert(email)}>
    //             Wyświetl mój e-mail w alercie
    //         </button>
    //     </div>
    // );


    let display;
    if (logged === false) {
        display = <div>
            <h1>Witaj w systemie zapisow na zajecia</h1>
            <h2>Zaloguj sie mailem</h2>
            <input type="text" onChange={handleChange} />
            <button type="button" onClick={handleClick}>Wchodze</button>
        </div>
    } else {
        display = <div><h3>Witaj {email}</h3>
            <button onClick={handleClick}>Wyloguj</button></div>
    }

    return display;
}

export default App;