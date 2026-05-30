import styles from "./SearchBar.module.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
      // Search container for filtering projects
    <div className={styles.searchBar}>
       {/* 
        Controlled input:
        - value is linked to searchTerm state from parent (App.jsx)
        - onChange updates searchTerm in real time
        - used for dynamic filtering of project list
      */}
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