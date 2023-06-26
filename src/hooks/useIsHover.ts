import { useState } from 'react';

export default function useIsHover() {
  const [isHover, setIsHover] = useState(false);
  const onMouseLeave = () => setIsHover(false);
  const onMouseEnter = () => setIsHover(true);

  return { isHover, onMouseEnter, onMouseLeave };
}
