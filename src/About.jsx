import mukesh from './assets/Mukesh.jpg';
function About(){
    return(
        <section className='about-section' id='about'>
            <h1>About Me</h1>
        <div className='about-image'>
          <img src={mukesh}/>
        </div>
        <h2>Welcome to My Portfolio</h2>
          <p>
            Hello! I’m <strong>Mukesh M</strong>, a passionate aspiring web developer who
            loves turning creative ideas into functional and beautiful websites.
            My focus is on building responsive, user-friendly interfaces using
            modern technologies like <strong>React</strong> and <strong>JavaScript</strong>.
          </p>
          <p>
            Apart from coding, I’m also interested in <strong>video editing</strong> and
            digital storytelling — combining creativity with technology to make
            content more impactful and engaging.
          </p>
          <p>
            My goal is to grow as a full-stack developer and contribute to projects
            that make a positive difference in the digital world.
          </p>    
        </section>  
    );
}
export default About;