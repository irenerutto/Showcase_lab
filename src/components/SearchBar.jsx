import styles from "./SearchBar.module.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
      // Search container for filtering projects
    <div className={styles.searchBar}>
         {/* Controlled search input used to filter projects */}
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;