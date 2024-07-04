import { useState, createContext } from "react";
import Component2 from "./Component2";

// globally create context object in parent component file and export it
export const MyContext = createContext();

const Component1 = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="border border-2 border-success p-2 m-2 rounded">
      Component1
      <input
        placeholder="Enter your mesage here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <MyContext.Provider value={message}>
        <Component2 />
      </MyContext.Provider>
    </div>
  );
};

export default Component1;
