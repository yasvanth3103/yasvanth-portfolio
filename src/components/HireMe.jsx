export default function HireMe() {
  return (
    <section className="section">
      <div
        className="glass"
        style={{
          textAlign: "center",
          padding: "60px",
          borderRadius: "30px",
        }}
      >
        <h2
          className="gradient"
          style={{
            fontSize: "3rem",
          }}
        >
          Available For Opportunities
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#cbd5e1",
          }}
        >
          Open to AI/ML Engineer,
          Generative AI,
          Software Development
          and Full Stack roles.
        </p>

        <a
          href="mailto:yasvanth3103@email.com"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "15px 35px",
            borderRadius: "15px",
            background:
              "linear-gradient(90deg,#06b6d4,#8b5cf6)",
            textDecoration: "none",
            color: "white",
          }}
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}