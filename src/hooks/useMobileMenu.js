import { useState, useCallback } from "react";

export const useMobileMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = useCallback(() => setIsActive(!isActive), [isActive]);

  return {
    isActive,
    toggleMenu,
  };
};
