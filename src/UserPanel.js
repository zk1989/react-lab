export function UserPanel(props) {
    return (<div><h3>Witaj {props.username}</h3>
        <button onClick={() => props.onLogout()}>Wyloguj</button></div>)
}