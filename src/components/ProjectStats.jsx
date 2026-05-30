import styles from "./ProjectStats.module.css";

function ProjectStats({ totalProjects, filteredProjects }) {
  return (
      // Container displaying project statistics
    <div className={styles.stats}>
       {/* Total number of all projects in the system */}
      <h2>Total Projects: {totalProjects}</h2>
       {/* Number of projects currently shown after filtering */}
      <p>Showing: {filteredProjects}</p>
    </div>
  );
}

export default ProjectStats;