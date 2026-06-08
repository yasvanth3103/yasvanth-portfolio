export default function Certifications() {
  const certs = [
    "Generative Models for Developers - Infosys",
    "Introduction to OpenAI GPT Models - Infosys",
    "Data Science for Beginners - NASSCOM",
  ];

  return (
    <section className="section">
      <h2
        className="gradient"
        style={{
          textAlign: "center",
          fontSize: "3rem",
        }}
      >
        Certifications
      </h2>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {certs.map((cert) => (
          <div
            key={cert}
            className="glass"
            style={{
              padding: "25px",
              borderRadius: "20px",
            }}
          >
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}