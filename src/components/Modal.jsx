// eslint-disable-next-line react/prop-types
const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-16 h-5/6 overflow-y-scroll rounded-lg bg-white p-6 text-black shadow-lg">
        <button
          className="absolute right-2 top-2 text-2xl text-gray-700 lg:text-4xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
