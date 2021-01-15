import React from 'react';
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';

function Infomodal() {
  const { modalProps, getTriggerProps } = useModal();

  return (
    <div>
      <button {...getTriggerProps()}>Show modal</button>
      <Modal {...modalProps}>Hello World</Modal>
    </div>
  );
}

export default Infomodal;