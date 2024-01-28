import { useState } from "react";
import { useToggle } from "./useToggle";

function App() {
  const nameInput = useInputValue();
  const [isDarkMode, toggle] = useToggle();
  // const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: isDarkMode ? "#000" : "#fff",
          color: isDarkMode ? "#fff" : "#000",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <label htmlFor="">
          Name:
          <input
            type="text"
            {...nameInput}
          />
        </label>
        <br />
        <br />
        <button onClick={toggle}>Change Mode</button>
      </div>
    </>
  );
}


function useInputValue(initailValue = "") {
  const [value, setValue] = useState(initailValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
}



export default App;
