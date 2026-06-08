import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaGithub />, name: "GitHub" },
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
        Technical Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
          marginTop: "50px",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="glass"
            style={{
              padding: "30px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "15px",
                color: "#06b6d4",
              }}
            >
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}