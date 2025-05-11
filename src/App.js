import {useState} from "react";
import "milligram";
import {LoginForm} from "./LoginForm";
import {UserPanel} from "./UserPanel";


function App() {
    const [logged, setLogged] = useState(null)
    function handleClick(email) {
        setLogged(email);
    }

    let display;
    if (!logged) {
        display = <LoginForm onLogin={handleClick} />
    } else {
        display = <UserPanel username={logged} onLogout={() => handleClick(null)} />
    }

    return display;
}

export default App;