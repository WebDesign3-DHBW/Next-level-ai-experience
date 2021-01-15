import { useRef } from "react";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import { MdInfoOutline } from "react-icons/md";

const Button = ({ openModal }) => {
  const btnRef = useRef(null);
  function handleClick() {
    // do some complicated stuff
    openModal(btnRef);
  }

  return (
    <button className="modalButton" ref={btnRef} onClick={handleClick}>
      <MdInfoOutline />
    </button>
  );
};

export const Infomodal = () => {
  const { modalProps, open } = useModal({ background: "#ddd" });
  return (
    <>
      <Button openModal={open} />
      <Modal {...modalProps}>Hello</Modal>
    </>
  );
};
