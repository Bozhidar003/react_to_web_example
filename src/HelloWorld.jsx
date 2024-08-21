import React, { useState } from 'react';

const styles = `
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #1a1a1a;
    color: #ffffff;
  }
  .hello-world-container {
    font-family: Arial, sans-serif;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 5px;
    background-color: #2a2a2a;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    text-align: center;
    max-width: 300px;
    width: 100%;
  }
  .hello-world-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  .hello-world-button:hover {
    background-color: #45a049;
  }
  .click-info {
    font-size: 14px;
    color: #bbb;
    margin-top: 10px;
  }
  h2 {
    color: #4CAF50;
  }
`;

const HelloWorld = ({ label = "Hello", name = "World", value = "{}" }) => {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(null);

  let parsedValue = {};
  try {
    parsedValue = JSON.parse(value);
  } catch (error) {
    console.error("Failed to parse value prop:", error);
  }

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    setLastClickTime(new Date());
  };

  const formatTime = (date) => {
    return date ? date.toTimeString().split(' ')[0] : '';
  };

  return (
    <React.Fragment>
      <style>{styles}</style>
      <div className="hello-world-container">
        <h2>{label} {name}!</h2>
        <button className="hello-world-button" onClick={handleClick}>
          Click Me
        </button>
        <p className="click-info">
          {clickCount > 0 
            ? `Clicked ${clickCount} times. Last one at ${formatTime(lastClickTime)}`
            : "Not clicked yet"}
        </p>
        {parsedValue && parsedValue.message && (
          <p>Additional info: {parsedValue.message}</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default HelloWorld;