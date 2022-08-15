import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [online, setOnline] = useState(false);
  return (
    <div>
      <h2>app</h2>
      <Outlet />
    </div>
  );
};

export default App;
