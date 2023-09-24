// App.jsx
import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import Main from './components/Main'; // Import the Main component

function App() {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <Main /> {/* Render the Main component */}
      {/* Other components or content */}
    </div>
  );
}

export default App;
