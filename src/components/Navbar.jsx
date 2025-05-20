import { Link } from "react-router-dom";

function Navbar({ total, token }) {
  return (
    <nav>
      <Link to={"/"}>
        <button>🍕 Home</button>
      </Link>
      <Link to={"/cart"}>
      <button>🛒 Total: {(total)}</button>
      </Link>
      {token ? (
        <>
          <Link to={"/profile"}>
          <button>🔓 Profile</button>
          </Link>
          <Link to={"/register"}>
          <button>✍️ Register</button>
          </Link>
          <Link to={"/login"}>
          <button>🔐 Log In</button>
          </Link>
          <Link to={"*"}>
          <button>🤔 Not Found</button>
          </Link>
          {/* <button>🔒 Logout</button> */}
        </>
      ) : (
        <>
          <Link to={"/login"}>
          <button>🔐 Login</button>
          </Link>
          <Link to={"/register"}>
          <button>🔐 Register</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
