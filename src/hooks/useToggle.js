import { useState } from "react";

export function useToggle() {
  const [isToggled, setIsToggled] = useState(true);

  const toggle = () => setIsToggled(!isToggled);
  return { isToggled, toggle };
}
