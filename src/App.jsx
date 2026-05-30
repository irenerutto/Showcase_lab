import projectsData from './data/projects'
import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProjectForm from './components/ProjectForm'
import ProjectStats from './components/ProjectStats'
import ProjectList from './components/ProjectList'
import './App.css'

function App() {
    // Main state: stores all project data
  const [projects, setProjects] = useState(projectsData);
 // State for search input (used to filter projects dynamically)
  const [searchTerm, setSearchTerm] = useState("");
  // State for controlled form inputs (new project data)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: ""
  });

  // // Filters projects based on search input (case-insensitive)
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      ...formData
    };

    setProjects((prev) => [newProject, ...prev]);

    setFormData({
      title: "",
      description: "",
      category: "",
      image: ""
    });
  };
  
  return (
  <>
    {/* HEADER section of the application */}
    <Header />

    {/* MAIN CONTAINER  holding all UI sections */}
    <div className="app-container">

      {/*  Project creation form   */}
      <div className="form-frame">
        <ProjectForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>

      {/*Search bar for filtering projects */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/*  Project display section  */}
      <div className="projects-frame">
       
        {/* Displays total and filtered project counts */}

      <ProjectStats
  totalProjects={projects.length}
  filteredProjects={filteredProjects.length}
/>
{/* List of filtered projects */}
        <ProjectList projects={filteredProjects} />

      </div>

    </div>
  </>
);

}

export default App;