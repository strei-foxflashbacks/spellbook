/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from 'src/types/ModalProps';

function Modal({ open, children, onClose }: ModalProps) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div>
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal">{children}</div>
    </div>,
    document.getElementById('portal') as Element
  );
}
export default Modal;
