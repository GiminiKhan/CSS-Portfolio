import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  link,
  github
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.links}>
            <Link href={link} className={styles.linkButton} target="_blank">
              <span>View Live</span>
            </Link>
            {github && (
              <Link href={github} className={styles.linkButton} target="_blank">
                <span>View Code</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.techStack}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
