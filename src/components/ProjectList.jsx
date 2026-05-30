import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.css";

function ProjectList({ projects }) {
  return (
    // Container that holds all project cards
    <div className={styles.projectList}>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}// Unique key for React list rendering
          title={project.title}
          description={project.description}
          category={project.category}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default ProjectList;