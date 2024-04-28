import React from "react";
import { getWriterById } from "../../services/api";

const GetWriter = () => {
  const [writer, setWriter] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [id, setId] = React.useState(7);

  // const id = new URLSearchParams(window.location.search).get("id");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWriterById(id);
        if (!response.error) {
          setWriter(response.data);
        }
        setWriter(data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <h3>GetWriter</h3>
      get writer by id
      <br />
      <input
        type="text"
        id="id"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      {writer && (
        <div key={writer.id}>
          <code>
            {writer.id} # {writer.name} # {writer.email}
          </code>
        </div>
      )}
    </div>
  );
};

export default GetWriter;
