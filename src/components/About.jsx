export default function About() {
  return (
    <section
      id="about"
      className="section"
    >
      <h2
        className="gradient"
        style={{
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        About Me
      </h2>

      <div
        className="glass"
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "40px",
          borderRadius: "25px",
        }}
      >
        <p
          style={{
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          I'm Yasvanth R, an Artificial Intelligence
          and Machine Learning student at
          Panimalar Engineering College.

          I specialize in Generative AI, NLP,
          Retrieval-Augmented Generation (RAG),
          Machine Learning, and Full Stack
          Development.

          My goal is to build intelligent systems
          that solve real-world problems and create
          measurable impact.
        </p>
      </div>
    </section>
  );
}