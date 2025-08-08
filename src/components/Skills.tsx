import { skillsData } from '@/components/data';

function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        {skillsData.map((item) => (
          <div className="skill-card" key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
