// App.jsx
import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Main from "./components/Main"; // Import the Main component
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import Horror from "./components/Horror";

function App() {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <Main /> {/* Render the Main component */}
      <h1 className="custom-heading">Popular</h1>
      <Popular /> {}
      <h1 className="custom-heading">TopRated</h1>
      <TopRated /> {}
      <h1 className="custom-heading">Upcoming</h1>
      <Upcoming /> {}
      <h1 className="custom-heading">Horror</h1>
      <Horror /> {}
      {/* Other components or content */}
    </div>
  );
}

export default App;
