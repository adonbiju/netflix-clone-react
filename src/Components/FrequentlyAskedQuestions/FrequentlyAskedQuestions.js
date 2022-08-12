import React, { useState } from "react";
import "./FrequentlyAskedQuestions.css";

function FrequentlyAskedQuestions({ header, body }) {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(!hide);
  };

  return (
 
      <div className="collapsible">
        <button className="accordion" onClick={handleClick}>
          {header}
         
        </button>
        <div className={`panel ${hide ? "showFaqQuestions" : ""}`}>
          <p>{body}</p>
        </div>
        
      </div>
   
  );
}

export default FrequentlyAskedQuestions;
