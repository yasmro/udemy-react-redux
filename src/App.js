import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello world.</h1>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am Clicked.")}} />
    </div>
  );
}

export default App;
