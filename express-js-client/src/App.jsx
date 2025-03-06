import InputForm from "./components/input-form/InputForm";

function App() {
  const handleInputFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const userInfo = { name, email };
    console.log("Input form submitted", userInfo);
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Express Recap</h1>
      <InputForm handleInputFormSubmit={handleInputFormSubmit}></InputForm>
    </>
  );
}

export default App;
