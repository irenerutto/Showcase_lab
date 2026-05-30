import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, category, image }) {
  return (
       // Individual project card container
    <div className={styles.card}>
        {/* Project image */}
      <img className={styles.image} src={image} alt={title} />
   {/* Content section for project details */}
      <div className={styles.content}>
         {/* Project title */}
        <h3 className={styles.title}>{title}</h3>
           {/* Short project description */}
        <p className={styles.description}>{description}</p>
           {/* Project category label */}
        <span className={styles.category}>{category}</span>
      </div>
    </div>
  );
}

export default ProjectCard;