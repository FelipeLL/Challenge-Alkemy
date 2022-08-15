import { useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "./components/Modal";

const App = () => {
  const [online, setOnline] = useState(false);
  return (
    <div>
      <h2>app</h2>
      <Modal />
      <Outlet />
    </div>
  );
};

export default App;
