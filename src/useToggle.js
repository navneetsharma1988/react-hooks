import { useState } from "react";

export function useToggle(initialValue = false) {
  const [isToggled, setIsToggled] = useState(initialValue);

  const toggle = () => setIsToggled((currState) => !currState);

  return [isToggled, toggle];
}
