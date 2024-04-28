import React from "react";
import { getWriters } from "../../services/api";

const GetWriters = () => {
  const [writers, setWriters] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWriters();
        if (!response.error) {
          setWriters(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>GetWriters</h3>
      get all writers
      {writers.map((writer) => (
        <div key={writer.id}>
          <code>
            {writer.id} # {writer.name} # {writer.email}
          </code>
        </div>
      ))}
    </div>
  );
};

export default GetWriters;
