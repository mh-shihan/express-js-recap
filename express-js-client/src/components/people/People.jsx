const People = ({ people, handleDelete }) => {
  return (
    <div className="border-2 border-green-500 p-4 text-center rounded-lg">
      <p>Name: {people.name}</p>
      <p>Email: {people.email}</p>
      <p>Age: {people.age}</p>
      <button
        onClick={() => handleDelete(people._id)}
        className="btn btn-error mt-2 text-white"
      >
        X
      </button>
    </div>
  );
};

export default People;
