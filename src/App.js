import React from "react";
import "./App.css";
import ChatForm from "./components/ChatForm";
function App() {
  return (
    <div className="Start">
      <ChatForm />
      <div className="info">
        <p className="info--p">
          | 2020 | Algebra - Seminarski rad | &#169; Ervin Bešić{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
