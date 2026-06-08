export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(20px)",
        background: "rgba(15,23,42,0.7)",
        padding: "20px 10%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          color: "#06b6d4",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Yasvanth.dev
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <a href="#about" style={linkStyle}>
          About
        </a>

        <a href="#skills" style={linkStyle}>
          Skills
        </a>

        <a href="#projects" style={linkStyle}>
          Projects
        </a>

        <a href="#contact" style={linkStyle}>
          Contact
        </a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};