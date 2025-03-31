import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Modal.scss";
export const Modal = ({
  setOpenModal
}) => {
  const navigate = useNavigate();

  // Ferme la modale avec "Échap"
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "Escape") {
        setOpenModal(false);
      }
    };
    document.body.style.overflow = "hidden"; // Bloque le scroll arrière-plan
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto"; // Restaure le scroll
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpenModal]);
  return (
    /*#__PURE__*/
    // Ferme la modale si on clique en dehors
    React.createElement("div", {
      className: "modal-overlay",
      onClick: () => setOpenModal(false)
    }, /*#__PURE__*/React.createElement("div", {
      id: "confirmation",
      className: "modal"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "modal__title"
    }, "Employee Created!"), /*#__PURE__*/React.createElement("div", {
      className: "modal__buttons"
    }, /*#__PURE__*/React.createElement("button", {
      className: "modal__buttons__closeBtn button",
      onClick: () => setOpenModal(false)
    }, "OK"), /*#__PURE__*/React.createElement("button", {
      className: "modal__buttons__navigateBtn button",
      onClick: () => navigate('/')
    }, "View List"))))
  );
};