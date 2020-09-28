import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello world.</h1>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am Clicked.")}} />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

const Cat = () => {
  return <div>MEOW!</div>
}

export default App;
