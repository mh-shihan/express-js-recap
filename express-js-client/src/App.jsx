import { useEffect, useState } from "react";
import InputForm from "./components/input-form/InputForm";
import People from "./components/people/People";

function App() {
  const [peoples, setPeoples] = useState([]);
  const handleInputFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;

    const userInfo = { name, email, age };
    console.log("Input form submitted", userInfo);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      const response = await fetch("http://localhost:5000/peoples");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setPeoples(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Express Recap</h1>
      <InputForm handleInputFormSubmit={handleInputFormSubmit}></InputForm>
      <p className="mt-20 mb-6 text-3xl font-bold text-center ">
        Total People : {peoples.length}
      </p>
      <div className="grid grid-cols-5 gap-2 mx-20  mb-20">
        {peoples.map((people) => (
          <People key={people.id} people={people}></People>
        ))}
      </div>
      <div></div>
    </>
  );
}

export default App;
