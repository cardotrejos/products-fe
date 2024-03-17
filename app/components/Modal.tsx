import Form from "./Form";

const Modal = ({openModal, handleModal}: {
  openModal: boolean;
  handleModal: () => void
}) => {
  return (
    <dialog open={openModal}>
      <div className="fixed top-0 left-0 w-full h-full bg-slate-600 bg-opacity-90 flex justify-center items-center">
        <div className="w-1/2 bg-slate-800 shadow-lg py-2 rounded-md">
          <h2 className="text-md font-medium text-white border-b border-gray-300 py-3 px-4 mb-4">
            This is my modal.
          </h2>
          <div className="px-4 pb-4">
            <Form />
          </div>
          <div className="border-t border-gray-300 flex justify-between items-center px-4 pt-2">
            <button
              type="button"
              className="h-8 px-2 text-sm rounded-md bg-gray-700 text-white"
              onClick={handleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
