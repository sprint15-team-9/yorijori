import { useState } from 'react';

export default function useIsHover() {
  const [isHover, setIsHover] = useState(false);
  const onMouseLeave = () => setIsHover(false);
  const onMouseEnter = () => setIsHover(true);
  const toggleMouse = () => setIsHover((prev) => !prev);
  return { isHover, onMouseEnter, onMouseLeave, toggleMouse };
}
