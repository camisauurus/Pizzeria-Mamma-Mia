import { useState } from "react"

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email || !password || !confirmPassword) {
            setMessage('Todos los campos son obligatorios')
            return
        }
        if (password.length < 6) {
            setMessage("La contraseña debe tener al menos 6 caracteres")
            return
        }
        if (password !== confirmPassword) {
            setMessage("Las contraseñas no coinciden")
            return
        }
        setMessage('');
        alert('Datos enviados correctamente');
    }

    return (
        <div className="register">
            <h1>Registrate</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit">Enviar</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    )
}

export default Register