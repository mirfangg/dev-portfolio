import { skillsData } from '@/components/data';
import { Parallax } from 'react-scroll-parallax';

function Skills() {
  return (
    <div className="skills-container">
      <Parallax speed={5}>
        <h2>Skills</h2>
      </Parallax>

      <Parallax speed={5}>
        <div className="grid-skills">
          {skillsData.map((item) => (
            <div className="skill-card" key={item.id}>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </Parallax>
    </div>
  );
}

export default Skills;
