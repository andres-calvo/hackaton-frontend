import { ModalProps } from '@/components/types';


const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        {children}
        <button 
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={closeModal}
        >✕</button>
      </div>
    </div>
  );
};

export default Modal;