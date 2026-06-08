const projects = [
  {
    title: "AI-Powered Diet Recommendation System",
    description:
      "Built using Gemini API and Streamlit.",
    metric: "91% Accuracy",
  },

  {
    title: "Interior Design Recommendation System",
    description:
      "Uses CLIP Embeddings and ChromaDB.",
    metric: "35% Faster Retrieval",
  },

  {
    title: "Legal AI Assistant",
    description:
      "RAG-powered legal assistant.",
    metric: "1,877+ Records Tested",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
    >
      <h2
        className="gradient"
        style={{
          textAlign: "center",
          fontSize: "3rem",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
          marginTop: "40px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass"
            style={{
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                marginTop: "15px",
                color: "#cbd5e1",
              }}
            >
              {project.description}
            </p>

            <p
              style={{
                marginTop: "15px",
                color: "#06b6d4",
                fontWeight: "700",
              }}
            >
              {project.metric}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}