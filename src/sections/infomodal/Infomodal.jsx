import { useRef } from "react";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";

const Button = ({ openModal }) => {
  const btnRef = useRef(null);
  function handleClick() {
    // do some complicated stuff
    openModal(btnRef);
  }

  return (
    <button className="modalButtom" ref={btnRef} onClick={handleClick}>
      Show modal
    </button>
  );
};

export const Infomodal = () => {
  const { modalProps, open } = useModal();
  return (
    <>
      <Button openModal={open} />
      <Modal {...modalProps}>Hello World</Modal>
    </>
  );
};
