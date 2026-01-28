import React from 'react';
import './Skill.css';

const Skill = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>What I Do</h2>
      <p className="skills-description">
        I am a frontend developer passionate about building modern and responsive web applications.
      </p>
      
      <div className="skills-grid">
        <div className="skill-card">
          <i className="devicon-c-plain c"></i>
          <p>C Programming</p>
        </div>
        <div className="skill-card">
          <i className="devicon-html5-plain html"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card">
          <i className="devicon-css3-plain css"></i>
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <i className="devicon-javascript-plain js"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <i className="devicon-react-original react"></i>
          <p>React JS</p>
        </div>
        <div className="skill-card">
          <i className="devicon-java-plain java"></i>
          <p>Java</p>
        </div>
         <div className="skill-card">
          <i className="devicon-mysql-plain sql"></i>
          <p>SQL</p>
        </div>
        <div className="skill-card">
          <i className="devicon-git-plain git"></i>
          <p>Git</p>
        </div>

        {/* ✅ First GitHub card (keep this) */}
        <a href="https://github.com/Sahasra-MJ" target="_blank" rel="noopener noreferrer" className="skill-card">
          <i className="devicon-github-plain github"></i>
          <p>GitHub</p>
        </a>

        <div className="skill-card">
          <i className="devicon-figma-plain figma"></i>
          <p>Figma</p>
        </div>

        {/* 🚀 New clickable skill links */}
        <a href="https://www.skillrack.com/faces/resume.xhtml?id=525877&key=98edabe72a0d5eca65988b852eae3c35fe12a905" target="_blank" rel="noopener noreferrer" className="skill-card">
          <img src="/icons/Skillrack.jpg" alt="Skillrack" className="custom-icon" />
          <p>Skillrack</p>
        </a>

        {/* <a href="https://www.codechef.com/users/swarm_tale_39" target="_blank" rel="noopener noreferrer" className="skill-card">
          <img src="/icons/codechef.jpg" alt="CodeChef" className="custom-icon" />
          <p>CodeChef</p>
        </a> */}

        <a href="https://leetcode.com/u/Sahasra_Oliyarasi/" target="_blank" rel="noopener noreferrer" className="skill-card">
          <img src="/icons/download.png" alt="LeetCode" className="custom-icon" />
          <p>LeetCode</p>
        </a>

        {/* <a href="https://www.hackerrank.com/profile/sahasra_ug_23_cs" target="_blank" rel="noopener noreferrer" className="skill-card">
          <img src="/icons/hackerankk.png" alt="HackerRank" className="custom-icon" />
          <p>HackerRank</p>
        </a> */}
      </div>
    </section>
  );
};

export default Skill;
