import React from "react";
import { postWriter } from "../../services/api";

const PostWriter = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postWriter({ name, email });
      if (!response.error) {
        setName("");
        setEmail("");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h3>PostWriter</h3>
      Add new writer
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

export default PostWriter;
