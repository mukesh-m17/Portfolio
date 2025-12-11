
function Home() {
  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2>Hi I'm</h2>
      <h1 className="animated-name">
  {"MUKESH M".split("").map((char, index) => (
    <span key={index}>{char === " " ? "\u00A0" : char}</span>
  ))}
</h1>

        <h3>Aspiring Web Developer | React | JavaScript | Editor</h3>

        <div id="Buttonhome">
          <button onClick={() => scrollToSection("about")}>About Me</button>
          <button onClick={() => scrollToSection("qualification")}>Qualifications</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
