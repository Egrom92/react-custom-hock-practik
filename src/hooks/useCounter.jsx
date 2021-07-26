import { useCallback, useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const iter = useCallback(() => setCounter((x) => x + 1), []);

  return [counter, iter];
};

export default useCounter;
