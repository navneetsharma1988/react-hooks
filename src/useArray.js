import { useState } from "react";

export function useArray() {
  const [array, setArray] = useState([]);

  const set = () => {};
  const push = () => {};
  const replace = () => {};
  const filter = () => {};
  const remove = () => {};
  const clear = () => {};
  const reset = () => {};

  return { array, set, push, replace, filter, remove, clear, reset };
}
