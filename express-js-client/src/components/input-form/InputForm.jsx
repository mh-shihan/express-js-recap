const InputForm = ({ handleInputFormSubmit }) => {
  return (
    <div className="flex justify-center mt-24">
      <form
        onSubmit={handleInputFormSubmit}
        className="flex flex-col gap-4 w-1/4 border-2 border-fuchsia-700 p-10 rounded-lg bg-slate-400"
      >
        <input
          className="rounded-md"
          type="text"
          name="name"
          placeholder="name"
          id=""
        />
        <input
          className=" rounded-md"
          type="email"
          name="email"
          placeholder="email"
          id=""
        />
        <input
          className=" rounded-md"
          type="number"
          name="age"
          placeholder="age"
          id=""
        />
        <input
          className="border border-black rounded-md font-medium cursor-pointer bg-emerald-400"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default InputForm;
