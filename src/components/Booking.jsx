import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    inputFName: "",
    inputLName: "",
    inputSeat: "",
    inputDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormFilled = Object.values(formData).every((value) => value !== "");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setFormData({
        inputFName: "",
        inputLName: "",
        inputSeat: "",
        inputDate: "",
      });
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const successClose = () => {
    setIsSuccess(false);
  };
  const errorClose = () => {
    setIsError(false);
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-4 px-2 py-4"
      onSubmit={handleSubmit}
    >
      {!isFormFilled && (
        <p className="px-4 py-2 text-xl">Fill the form first</p>
      )}
      <div className="inline-grid grid-cols-subgrid gap-4 pb-4 lg:grid-cols-2 ">
        <label>First Name</label>
        <input
          type="text"
          name="inputFName"
          value={formData.inputFName}
          onChange={handleChange}
          className="ml-2 p-2 text-black"
        />
        <label>Last Name</label>
        <input
          type="text"
          name="inputLName"
          value={formData.inputLName}
          onChange={handleChange}
          className="ml-2 p-2 text-black"
        />
        <label>Seat</label>
        <input
          type="number"
          min={1}
          max={8}
          name="inputSeat"
          value={formData.inputSeat}
          onChange={handleChange}
          className="ml-2 p-2 text-black"
        />
        <label>Date</label>
        <input
          type="date"
          name="inputDate"
          value={formData.inputDate}
          onChange={handleChange}
          className="ml-2 p-2 text-black"
        />
      </div>

      {isFormFilled && (
        <p className="px-4 py-2 text-xl">
          <b>
            {formData.inputFName} {formData.inputLName}
          </b>{" "}
          will reserve {formData.inputSeat == 1 ? "a" : `${formData.inputSeat}`}{" "}
          seat at <span className="font-kanji">鮨森</span> on{" "}
          {formData.inputDate}
        </p>
      )}
      {isLoading && (
        <p className="mt-2 flex items-center gap-2 align-top text-blue-400">
          <svg
            aria-hidden="true"
            className="h-4 w-4 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          Loading...
        </p>
      )}
      {isSuccess && (
        <p
          onClick={successClose}
          className="mt-2 rounded-md bg-green-500 px-4 py-2 font-semibold  text-white"
        >
          Success
        </p>
      )}
      {isError && (
        <p
          onClick={errorClose}
          className="mt-2 rounded-md bg-red-500 px-4 py-2 font-semibold  text-white"
        >
          Failed
        </p>
      )}
      <button
        type="submit"
        disabled={!isFormFilled || isLoading}
        className={`${isFormFilled ? "cursor-pointer" : "cursor-not-allowed"} rounded-sm bg-white px-6  py-2 font-serif font-semibold text-black hover:bg-gray-50 active:bg-gray-100`}
      >
        Reserve
      </button>
    </form>
  );
}
