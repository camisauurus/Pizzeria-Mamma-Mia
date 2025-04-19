function Navbar({ total, token }) {
  return (
    <nav>
      <button>🍕 Home</button>
      <button>🛒 Total: {(total)}</button>

      {token ? (
        <>
          <button>🔓 Profile</button>
          <button>🔒 Logout</button>
        </>
      ) : (
        <>
          <button>🔐 Login</button>
          <button>🔐 Register</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
