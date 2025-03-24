import React from "react";
export interface ModalProps {
  title: string;
  description: string;
  image: string;
}
("");
const CustomModal = ({ title, description, image }: ModalProps) => {
  return (
    <div className="Modal">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} />
    </div>
  );
};

export default CustomModal;
