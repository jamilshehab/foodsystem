import Modal from "react-modal";
import { RegisterModalProps } from "../../../types";
import "./Success.css";

const RegisterModal = ({
  description,
  title,
  isOpen,
  onClose,
}: RegisterModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal fade"
      overlayClassName="overlay"
    >
      <div id="success_tic" className="page-body">
        <button className="close top-1 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <div className="head">
          <h3 className="my-4 text-center">{title}</h3>
          <h4 className="text-center my-3">{description}</h4>
        </div>
        <h1 className="text-center">
          <div className="checkmark-circle my-6">
            <div className="background"></div>
            <div className="checkmark draw"></div>
          </div>
        </h1>
      </div>
    </Modal>
  );
};

export default RegisterModal;
