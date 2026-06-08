const skills = [
  "Python",
  "Java",
  "SQL",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Machine Learning",
  "NLP",
  "Generative AI",
  "RAG",
  "ChromaDB",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      
      <h2
        className="gradient"
        style={{
          textAlign: "center",
          fontSize: "3rem",
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className="glass"
            style={{
              padding: "25px",
              borderRadius: "20px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}