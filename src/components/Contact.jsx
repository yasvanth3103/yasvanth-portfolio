import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
    >
      <h2
        className="gradient"
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "40px",
        }}
      >
        Contact Me
      </h2>

      <div
        className="glass"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "25px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            marginBottom: "20px",
          }}
        >
          Let's Connect 🚀
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "25px",
          }}
        >
          I'm actively looking for AI/ML Engineer,
          Generative AI, and Software Development
          opportunities.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:yasvanth3103@email.com"
            style={{
              color: "#06b6d4",
              textDecoration: "none",
            }}
          >
            <FaEnvelope size={30} />
          </a>

          <a
            href="https://github.com/yasvanth3103"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
            }}
          >
            <FaGithub size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/yasvanthr/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#0ea5e9",
            }}
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        <div
          style={{
            marginTop: "30px",
            color: "#cbd5e1",
          }}
        >
          <p>📍 Chennai, Tamil Nadu</p>
          <p>📧 yasvanth3103@email.com</p>
        </div>
      </div>
    </section>
  );
}