import Modal from "react-modal";
import { RegisterModalProps } from "../../../types";

const RegisterModal = ({
  description,
  title,
  isOpen,
  onClose,
}: RegisterModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-gray-900 cursor-pointer"
        aria-label="Close modal"
      >
        ✕
      </button>
      <div className="page-wrapper">
        <div className="custom-modal">
          <div className="succes succes-animation icon-top">
            <i className="fa fa-check"></i>
          </div>
          <div className="succes border-bottom"></div>
          <div className="content">
            <p className="type">{title}</p>
            <p className="message-type">{description}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
