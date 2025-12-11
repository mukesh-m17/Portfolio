import htmlLogo from "./assets/html.jpg";
import cssLogo from "./assets/css2.png";
import jsLogo from "./assets/js1.png";
import reactLogo from "./assets/react1.jpg";
import vscodeLogo from "./assets/VS code.jpg";
import canvaLogo from "./assets/canva1.jpg";
function Skills(){  
const skills = [
  { name: "HTML", img:htmlLogo  },
  { name: "CSS", img: cssLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "React", img: reactLogo },
  { name: "VS Code", img: vscodeLogo },
  { name: "Canva", img: canvaLogo }
];
    return(
     <section className="skills-container" id="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
    );
}
export default Skills