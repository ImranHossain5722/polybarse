import { useEffect, useState } from "react";

export default function useFreezescroll() {
  const [freezescroll, setFreezescroll] = useState(false);
  useEffect(() => {
    if (freezescroll) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [freezescroll]);

  return [setFreezescroll];
}
