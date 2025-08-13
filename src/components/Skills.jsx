import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBar = entry.target;
          const skillLevel = skillBar.querySelector('.skill-level');
          const skillValue = skillBar.dataset.skill;
          skillLevel.style.width = skillValue + '%';
          observer.unobserve(skillBar);
        }
      });
    }, options);

    skillBars.forEach(skillBar => {
      observer.observe(skillBar);
    });

    return () => {
      skillBars.forEach(skillBar => {
        observer.unobserve(skillBar);
      });
    };
  }, []);

  return (
    <section className="thirdsection" id="skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        <div className="skill-bar" data-skill="90">
          <div className="skill-name">HTML</div>
          <div className="skill-level-container">
            <div className="skill-level"></div>
          </div>
        </div>
        <div className="skill-bar" data-skill="85">
          <div className="skill-name">CSS</div>
          <div className="skill-level-container">
            <div className="skill-level"></div>
          </div>
        </div>
        <div className="skill-bar" data-skill="80">
          <div className="skill-name">JavaScript</div>
          <div className="skill-level-container">
            <div className="skill-level"></div>
          </div>
        </div>
        <div className="skill-bar" data-skill="75">
          <div className="skill-name">React</div>
          <div className="skill-level-container">
            <div className="skill-level"></div>
          </div>
        </div>
        <div className="skill-bar" data-skill="70">
          <div className="skill-name">Node.js</div>
          <div className="skill-level-container">
            <div className="skill-level"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
