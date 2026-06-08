import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

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
        padding: "0 20px",
      }}
    >
      {/* Purple Glow */}
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

      {/* Cyan Glow */}
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
          maxWidth: "900px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem,8vw,6rem)",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Yasvanth R
        </h1>

        <div
          style={{
            marginBottom: "25px",
          }}
        >
          <TypeAnimation
            sequence={[
              "AI/ML Engineer",
              2000,
              "Generative AI Developer",
              2000,
              "Full Stack Developer",
              2000,
              "Machine Learning Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
              fontSize: "clamp(1.5rem,4vw,2.2rem)",
              fontWeight: "600",
              background:
                "linear-gradient(90deg,#06b6d4,#8b5cf6,#ec4899)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          />
        </div>

        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            color: "#cbd5e1",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Passionate AI/ML Engineer building intelligent
          applications using Machine Learning, NLP,
          Retrieval-Augmented Generation (RAG),
          Generative AI, React, and Full Stack Development.
          Focused on solving real-world problems through
          innovative AI solutions.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "35px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/resume.pdf"
            download
            style={{
              padding: "14px 30px",
              borderRadius: "14px",
              background:
                "linear-gradient(90deg,#06b6d4,#8b5cf6)",
              color: "white",
              textDecoration: "none",
              fontWeight: "600",
              boxShadow:
                "0 0 25px rgba(139,92,246,0.4)",
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

        <div
          style={{
            marginTop: "40px",
            color: "#94a3b8",
            fontSize: "0.95rem",
          }}
        >
          📍 Chennai, Tamil Nadu • Open to AI/ML &
          Software Development Opportunities
        </div>
      </motion.div>
    </section>
  );
}