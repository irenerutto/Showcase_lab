import styles from "./ProjectForm.module.css";

function ProjectForm({ formData, handleChange, handleSubmit }) {
  return (
    // Form handles submission of new project data
    <form onSubmit={handleSubmit} className={styles.form}>
       
         {/* Controlled input for project title */}
      <input
        name="title"
        placeholder="Project title"
        value={formData.title}
        onChange={handleChange}
        className={styles.input}
      />
 {/* Controlled input for project description */}
      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className={styles.input}
      />
{/* Controlled input for project category */}
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className={styles.input}
      />
  {/* Controlled input for project image URL */}
      <input
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        className={styles.input}
      />
 {/* Submit button triggers form submission handler */}
      <button type="submit" className={styles.button}>
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;