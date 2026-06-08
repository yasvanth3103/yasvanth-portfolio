import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#8b5cf6",
          filter: "blur(150px)",
          opacity: 0.3,
          top: "-100px",
          left: "-100px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#06b6d4",
          filter: "blur(150px)",
          opacity: 0.3,
          bottom: "-100px",
          right: "-100px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "5rem",
            fontWeight: "700",
          }}
        >
          Yasvanth R
        </h1>

        <h2
          style={{
            fontSize: "2rem",
            background:
              "linear-gradient(90deg,#06b6d4,#8b5cf6,#ec4899)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          AI Engineer • Generative AI Developer
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            color: "#cbd5e1",
          }}
        >
          Building intelligent AI solutions using
          Machine Learning, NLP, RAG, Gemini API,
          React and Full Stack Development.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <a
            href="/resume.pdf"
            download
            style={{
              padding: "12px 24px",
              borderRadius: "12px",
              background:
                "linear-gradient(90deg,#06b6d4,#8b5cf6)",
              color: "white",
              textDecoration: "none",
            }}
          >
            Download Resume
          </a>

          <a
            href="https://github.com/yasvanth3103"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
              fontSize: "2rem",
            }}
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/yasvanthr/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#0ea5e9",
              fontSize: "2rem",
            }}
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}