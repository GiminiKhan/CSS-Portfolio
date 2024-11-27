import React from 'react';
import Layout from '@/app/components/Layout';
import ProjectCard from '../app/components/PorjectCard';
import projects from '../app/components/data/projects';
import styles from '@/app/styles/page.module.css';
import Hero from './components/hero/Hero';

const Home: React.FC = () => (
  <Layout>
    <div className={styles.homeContainer}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <Hero />
      <header className={styles.header}>
        <p className={styles.subtitle}>Explore my latest projects and works</p>
      </header>

      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
            />
          ))}
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.aboutText}>
          I'm a passionate developer with expertise in web technologies. 
          I love creating innovative solutions and learning new skills.
        </p>
      </section>

      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.contactText}>
          Interested in working together? Feel free to reach out!
        </p>
        <a href="mailto:your.email@example.com" className={styles.contactButton}>
          Contact Me
        </a>
      </section>
    </div>
  </Layout>
);

export default Home;
