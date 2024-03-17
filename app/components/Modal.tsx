import Form from "./Form";

const Modal = ({openModal, handleModal}: {
  openModal: boolean;
  handleModal: () => void
}) => {
  return (
    <dialog open={openModal}>
      <div className="fixed top-0 left-0 w-full h-full bg-slate-600 bg-opacity-90 flex justify-center items-center">
        <div className="w-1/2 bg-slate-800 shadow-lg py-2 rounded-md">
          <h1 className="text-2xl font-semibold text-gray-200 mb-6 border-b border-gray-300 px-4 py-2">
            Add new product
          </h1>
          <div className="px-4 pb-4">
            <Form />
          </div>
          <div className="border-t border-gray-300 flex justify-between items-center px-4 pt-2">
            <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
