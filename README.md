# Project Showcase App

## Overview

The **Project Showcase App** is a React Single Page Application (SPA) designed to display, manage, and interact with a collection of personal or development projects. The application allows users to view projects, search through them dynamically, and add new projects using a controlled form.

This project demonstrates core React concepts such as component-based architecture, state management using hooks, controlled forms, props drilling, list rendering, and real-time filtering.

---

## Features

### 🗂 Project Display

* Displays a list of projects using reusable components.
* Each project is presented as a card containing:

  * Image
  * Title
  * Description
  * Category

### 🔍 Search Functionality

* Real-time search filtering by project title.
* Case-insensitive search.
* Updates results instantly as the user types.

### ➕ Add New Projects

* Users can add new projects using a controlled form.
* Form fields include:

  * Title
  * Description
  * Category
  * Image URL
* Newly added projects appear instantly at the top of the list.

### 📊 Project Statistics

* Displays total number of projects.
* Shows number of currently filtered projects.
* Updates dynamically based on search input.

---

## Component Structure

The application follows a modular component-based structure:

### `App.jsx`

* Main application container.
* Manages all state:

  * Project list
  * Search term (the current text entered by the user for filtering projects)
  * Form data
* Handles:

  * Adding projects
  * Filtering projects
  * Passing props to child components

### `Header`

* Displays application title.

### `SearchBar`

* Controlled input for filtering projects.
* Updates search state in real time.

### `ProjectForm`

* Controlled form for adding new projects.
* Handles input changes and form submission.

### `ProjectStats`

* Displays total projects and filtered results.

### `ProjectList`

* Maps through project data and renders `ProjectCard`.

### `ProjectCard`

* Displays individual project details:

  * Image
  * Title
  * Description
  * Category

---

## Data Structure

Each project object follows this structure:

```js
{
  id: number,
  title: string,
  description: string,
  category: string,
  image: string
}
```

---

## State Management

The application uses React `useState` for managing:

### 1. Projects State

Stores all project data and updates when new projects are added.

### 2. Search State

Stores the current search input used to filter projects.

### 3. Form State

Stores controlled input values for creating new projects.

---

## Key Functionality

### Filtering Logic

Projects are filtered using:

* Title matching
* Case-insensitive comparison

### Adding Projects

New projects:

* Receive a unique ID using `Date.now()`
* Are added to the beginning of the project list

---

## Technologies Used

* React
* JavaScript (ES6+)
* Vite
* CSS Modules
* React Hooks (`useState`)
* Git & GitHub

---
## Future Improvements

Possible enhancements:

* Delete and edit project functionality
* Category filtering system
* Local storage persistence
* Backend integration (API + database)
* Image upload instead of URL input
* Improved responsive design
* Form validation

---

## Author

Irene Rutto
