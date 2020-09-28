import React from 'react';

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "Yu",
      age: 23
    },
    {
      name: "Shuya"
    },
  ]
  return (
    <div>
      <h1>Hello world.</h1>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am Clicked.")}} />
      {
        profiles.map((profile, idx) => {
          return <User key={idx} name={profile.name} age={profile.age} />;
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hello, I'm {props.name}, and {props.age} years old.</div>
}

User.defaultProps = {
  age: 0
}

export default App;
