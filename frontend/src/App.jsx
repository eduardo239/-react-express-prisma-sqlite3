import { useState } from "react";
import GetWriters from "./components/writer/GetWriters";
import GetWriter from "./components/writer/GetWriter";
import PostWriter from "./components/writer/PostWriter";
import UpdateWriter from "./components/writer/UpdateWriter";
import DeleteWriter from "./components/writer/DeleteWriter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Book</h1>

      <GetWriters />
      <GetWriter />
      <PostWriter />
      <UpdateWriter />
      <DeleteWriter />
    </main>
  );
}

export default App;
