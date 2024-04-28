import React from "react";
import { deleteWriter } from "../../services/api";

const DeleteWriter = () => {
  const [error, setError] = React.useState(null);
  const [id, setId] = React.useState(7);

  // const id = new URLSearchParams(window.location.search).get("id");

  const handleDelete = async () => {
    try {
      const response = await deleteWriter(id);
      if (!response.error) {
        setError(null);
        console.log("Writer deleted successfully");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h3>DeleteWriter</h3>
      <br />
      <input
        type="text"
        id="id"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br />

      <button onClick={handleDelete}>Delete writer {id}</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DeleteWriter;
