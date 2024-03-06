/*import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useGlobalContext } from "../context";
function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { meals, fetchSurpriseMeal } = useGlobalContext();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        click me!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {meals.map((theMeal) => {
            const { idMeal, strMeal: title, strMealThumb: image } = theMeal;
            return (
              <div key={idMeal}>
                <img className="picture" src={image} />

                <footer className="theFooter">
                  <h5 className="theName">{title}</h5>
                  <MyModal />
                </footer>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;*/
//import React from "react";
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
        <div className="alltext-container overflow-y-scroll ...">
          <h1>{title}</h1>
          <h2>coocking struction</h2>
          <p>{text}</p>
          <div className="source-button">
            <a className="source" href={source} target="_blank">
              original source
            </a>
            <button className="close-button" onClick={closeModal}>
              close
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default MyModal;
