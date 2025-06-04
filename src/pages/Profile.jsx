import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { email, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profile">
      <h2>Perfil de usuario</h2>
      <p>Email: {email}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
