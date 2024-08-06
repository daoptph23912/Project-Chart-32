import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ChatRoutes from "./routes/chartRoutes";
function App() {
  return (
    <React.StrictMode>
      <Router>
        <ChatRoutes />
      </Router>
    </React.StrictMode>
  );
}

export default App;
