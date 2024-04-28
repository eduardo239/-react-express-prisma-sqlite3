import React from "react";
import { getWriterById, putWriter } from "../../services/api";

const UpdateWriter = () => {
  const [writer, setWriter] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState(null);

  // const id = new URLSearchParams(window.location.search).get("id");
  const id = 5;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWriterById(id);
        if (!response.error) {
          console.log(response);
          setWriter(response.data);
          setEmail(response.data.email);
          setName(response.data.name);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await putWriter(id, { name, email });
      if (!response.error) {
        try {
          const response = await getWriterById(id);
          if (!response.error) {
            console.log(response);
            setWriter(response.data);
            setEmail(response.data.email);
            setName(response.data.name);
          }
        } catch (err) {
          setError(err.message);
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h3>UpdateWriter</h3>
      update writer
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default UpdateWriter;
