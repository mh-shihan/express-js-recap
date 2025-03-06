import { useEffect } from "react";
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

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Express Recap</h1>
      <InputForm handleInputFormSubmit={handleInputFormSubmit}></InputForm>
      <div></div>
    </>
  );
}

export default App;
