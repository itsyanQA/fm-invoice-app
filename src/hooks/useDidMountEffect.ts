import { useEffect, useState } from "react";

export const useDidMountEffect = (fn: () => unknown, dep: unknown[]) => {
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(() => {
    if (didMount) {
      fn();
    } else {
      setDidMount(true);
    }
  }, dep);
};
