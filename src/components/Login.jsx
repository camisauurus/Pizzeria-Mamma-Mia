import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(false)

    const enviar = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setMessage("Todos los campos son obligatorios")
            return
        }
        if (password.length < 6) {
            setMessage("La contraseña debe tener al menos 6 caracteres")
            return
        }
        setMessage("Datos enviados correctamente");
    }

    return (
        <div className="login">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={enviar}>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Enviar</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
}

export default Login;