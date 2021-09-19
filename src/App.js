import "./App.css";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

function App() {
  //react-modal
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:w-fit-content md:mx-auto">
      <button
        className="block bg-blue-500 w-100% hover:bg-buttonHover text-white font-bold py-2 px-4 my-4 rounded"
        onClick={toggleModal}
      >
        Open Login
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-fit-content"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="w-100% md:w-fit-content block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="test"
            {...register("example")}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="w-100% md:w-fit-content block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("exampleRequired", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <button
            className="block bg-blue-500 w-100% hover:bg-buttonHover text-white font-bold py-2 px-4 my-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
