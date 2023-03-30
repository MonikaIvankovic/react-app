const Modal = () => {
  return (
    <div className="modal">
      <h1>Title</h1>
      <h4>Message</h4>
      <div className="modal__item">
        <button className="modal__btn">OK</button>

        <button className="modal__btn">Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
