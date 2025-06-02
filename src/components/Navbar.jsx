import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
  return (
    <nav>
      <Link to={"/"}>
        <button>🍕 Home</button>
      </Link>
      <Link to={"/cart"}>
        <button>🛒 Total: ${total.toLocaleString("es-CL")}</button>
      </Link>
      {token ? (
        <>
          <Link to={"/profile"}>
            <button>🔓 Profile</button>
          </Link>
          <button onClick={logout}>🔒 Logout</button> {/* ✅ logout funcional */}
        </>
      ) : (
        <>
          <Link to={"/login"}>
            <button>🔐 Login</button>
          </Link>
          <Link to={"/register"}>
            <button>✍️ Register</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
