import { useCallback, useEffect, useRef, useState } from "react";

export const useClickOutside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, []);

  const toggleOpen = useCallback((e) => {
    e?.preventDefault();
    setIsOpen((p) => !p);
  }, []);

  return { ref, isOpen, setIsOpen, toggleOpen };
};
