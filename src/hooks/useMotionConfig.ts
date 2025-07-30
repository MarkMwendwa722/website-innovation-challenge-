import { useAccessibility } from '../contexts/AccessibilityContext';

export const useMotionConfig = () => {
  const { animationsEnabled } = useAccessibility();

  return {
    initial: animationsEnabled ? undefined : false,
    animate: animationsEnabled ? undefined : false,
    exit: animationsEnabled ? undefined : false,
    transition: animationsEnabled ? undefined : { duration: 0 },
    whileHover: animationsEnabled ? undefined : {},
    whileTap: animationsEnabled ? undefined : {},
    whileInView: animationsEnabled ? undefined : false,
  };
};
