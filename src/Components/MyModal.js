import React from "react";
import { useGlobalContext } from "../context";

function MyModal() {
  const { selectedMeal, closeModal } = useGlobalContext();
  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;

  return (
    <aside className="base-modal">
      <div className="modal-container">
        <img src={image} alt={title} className="image-container" />
        <div className="alltext-container overflow-y-scroll">
          <h1>{title}</h1>
          <h2>Cooking Instructions</h2>
          <p>{text}</p>
          <div className="source-button">
            <a
              className="source"
              href={source}
              target="_blank"
              rel="noreferrer"
            >
              Original source
            </a>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default MyModal;
