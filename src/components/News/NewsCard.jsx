import React from "react";
import "./News.css";

function NewsCard({ author, title, description, link }) {
  return (
      <div className="container">
        <div className="square">
          <div className="text-1">
            <h3>{author}</h3>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="link">
              <button><a href={link} target="_blank">
                CLICK HERE</a>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
  );
}

export default NewsCard;
