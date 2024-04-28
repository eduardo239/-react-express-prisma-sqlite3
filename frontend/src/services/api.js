export const getWriters = async () => {
  const res = await fetch("http://localhost:3000/writers");
  const data = await res.json();
  return data;
};

export const getWriterById = async (id) => {
  const res = await fetch(`http://localhost:3000/writers/${id}`);
  const data = await res.json();
  return data;
};

export const postWriter = async (data) => {
  const res = await fetch("http://localhost:3000/writers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const newData = await res.json();
  return newData;
};

export const putWriter = async (id, data) => {
  const res = await fetch(`http://localhost:3000/writers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const newData = await res.json();
  return newData;
};

export const deleteWriter = async (id) => {
  const res = await fetch(`http://localhost:3000/writers/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};
