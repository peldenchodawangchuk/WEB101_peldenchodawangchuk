# Spotify Clone (React + Tailwind CSS)

## Project Overview
This application is a **Spotify-themed user interface** created using **React.js and Tailwind CSS**.
The purpose of this exercise is to develop an interface for a web application, implementing a **component-based approach**, with emphasis on **UI/UX and responsiveness**.

---
## Objectives
For comprehending and utilizing **React component structure**
For creating an aesthetically pleasing and contemporary **user interface**
For making the **layout responsive** to various screen sizes
For building **reusable components**
For enhancing **user experience (UX)** via layout and interaction design

---
## Technologies Used
* React.js (Vite)
* Tailwind CSS
* JavaScript (ES6)
* HTML

---
## Component Structure
The application is divided into reusable components:

```
src/
    components/
        Sidebar.jsx
        Navbar.jsx
        MusicCard.jsx
        Player.jsx
    data/
        playlists.js
        App.jsx
        index.css
        main.jsx
```

### Component Description
**Sidebar**
Contains navigation links such as Home, Search, and Library.
**Navbar**
Includes a search bar and user profile icon.

**MusicCard**
Reusable component used to display playlists with image, title, and description.

**Player**
Displays music controls such as play, pause, and progress bar.

---
### UI Design
The user interface design was based on Spotify:
Dark mode for aesthetic purposes
Green color for accent highlights
Playlist presentation using cards
Readable font and spaces

---
### User Experience (UX) Design Factors
Ergonomic navigation through side menu bar
Dynamic hover effects for playlist cards
Hierarchy between the elements (title, section, content)
Responsive design across various devices
Space and Alignment consistency

---
## Responsive Web Design
The app is completely responsive to screen sizes:
Sidebar is hidden on small-sized screens
The grid format is flexible based on device size
Resizing of elements for mobile, tablet, and desktop views

---
## Handling of Data
Playlist data is saved in an external file:
data/playlists.js

This allows:
easy updates
reusable components
clean code structure

---
## How to Run the Project
1. Clone the repository:
```
git clone "your repository link
---
2. Navigate to the project folder:
```
cd spotify-ui
```
3. Install dependencies:

```
npm install
```
4. Run the development server:
```
npm run dev
```
5. Open in browser:
```
http://localhost:5173
```
---
## Features
Sidebar navigation
Search bar UI
Playlist card grid
Hover animations
Music player UI
Responsive design
---
## Learning Outcomes
Through this project, I learned:
How to structure a React application using components
How to use Tailwind CSS for fast UI development
How to design responsive layouts
How to improve user experience through design
How to organize code and separate data from UI
---

## Code Documentation
The code is well documented using inline comments to explain:
- Component structure
- Props usage
- Data flow
- UI sections
Each component is designed with a single responsibility:
- Sidebar → navigation
- Navbar → search and profile
- MusicCard → reusable playlist display
- Player → music controls

```
## Application Features
The application offers the following features:
- Navigation Sidebar Menu display
- Display of Search Bar UI element
- Display of playlists using MusicCard components
- Dynamic Data fetching from a different data file
- Hover Effects to facilitate User Interaction
- Music Player UI component
```

```
##Repository Link
## https://github.com/peldenchodawangchuk/WEB101_peldenchodawangchuk/tree/main/Practicals/PA1/spotify
 
