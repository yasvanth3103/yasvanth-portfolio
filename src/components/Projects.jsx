const projects = [
  {
    title: "AI-Powered Diet Recommendation System",
    description:
      "An intelligent diet recommendation system built using Gemini API and Streamlit. Generates personalized diet plans based on user requirements and health goals.",
    metric: "91% Accuracy",
    github:
      "https://github.com/yasvanth3103/AI_DIET_CHART",
  },

  {
    title: "Interior Design Recommendation System",
    description:
      "AI-powered interior design recommendation platform using CLIP Embeddings and ChromaDB for semantic image retrieval and personalized suggestions.",
    metric: "35% Faster Retrieval",
    github:
      "https://github.com/yasvanth3103/Interior_design_AI",
  },

  {
    title: "Legal AI Assistant",
    description:
      "RAG-powered legal assistant capable of retrieving and answering legal queries from large legal datasets with high accuracy.",
    metric: "1,877+ Records Tested",
    github:
      "https://github.com/yasvanth3103/Legal-AI-Assistant",
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
          marginBottom: "50px",
        }}
      >
        Featured Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass"
            style={{
              padding: "30px",
              borderRadius: "25px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "15px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                }}
              >
                {project.description}
              </p>

              <p
                style={{
                  marginTop: "20px",
                  color: "#06b6d4",
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
              >
                🚀 {project.metric}
              </p>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "25px",
                textAlign: "center",
                padding: "12px 20px",
                borderRadius: "12px",
                background:
                  "linear-gradient(90deg,#06b6d4,#8b5cf6)",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              View GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}