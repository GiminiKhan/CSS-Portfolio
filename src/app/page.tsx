import React from 'react';
import Layout from '@/app/components/Layout';
import ProjectCard from '../app/components/PorjectCard';
import projects from '../app/components/data/projects';
import styles from '@/app/styles/page.module.css';
import Hero from './components/hero/Hero';
import Contact from './components/contact/Contact';
import About from './components/about/About';


const Home: React.FC = () => (
  <Layout>
    <div className={styles.homeContainer}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <Hero />
      <header className={styles.header}>
        <p  id = "projects" className={styles.subtitle}>Explore my latest projects and works</p>
      </header>

      <section className={styles.ProjectsSection}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.ProjectsGrid}>
          {projects.map((Project) => (
            <ProjectCard
              key={Project.id}
              title={Project.title}
              description={Project.description}
              link={Project.link}
              image={Project.image}
              technologies={Project.technologies}
              github={Project.github}
            />
          ))}
        </div>
      </section>
<div>
      <section id ="about" className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.aboutText}>
          I am a passionate developer with expertise in web technologies. 
          I love creating innovative solutions and learning new skills.
        </p>
    
      </section>
      <About />

</div>


      <section id = "contact" className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.contactText}>
          Interested in working together? Feel free to reach out!
        </p>
        <a href="mailto:your.email@example.com" className={styles.contactButton}>
          Contact Me
        </a>
      </section>
      <Contact/>
    </div>
  </Layout>
);

export default Home;
