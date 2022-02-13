import React, { useState, useEffect } from "react";
import colors from "./Data/colors";
import { languages, happyThings} from "./Data/happyThings.js";

const App = () => {
  const [color, setColor] = useState("");
  const [language, setLanguage] = useState("ukrainian");

  const randomItem = (list) => {
    return Math.floor(
      Math.random() * (Math.floor(list.length - 1) - Math.ceil(0) + 1) + Math.ceil(0)
    );
  };

  const select = () => {
    let x = randomItem(colors);
    setColor(colors[x]);
  };


  useEffect(() => {
    select();
  }, []);

  useEffect(() => {
    console.log(languages[language])
    document.body.style.background = "#" + colors[color];
  });

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#" + color,
      }}
    >
      
      <p>GM in <select onChange={e => setLanguage(e.target.value)}>
        {Object.keys(languages).map((info)=>(
        <option on value={info}>{info}</option>
        ))
        }
      </select> 
          {languages[language][2]} = {languages[language][1]} ({languages[language][0]})</p>

      
    </div>
  );
};

export default App;
