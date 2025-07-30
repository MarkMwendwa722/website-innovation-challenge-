import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type FontSizeLevel = 'small' | 'normal' | 'large' | 'extra-large';

interface AccessibilityContextType {
  fontSize: FontSizeLevel;
  setFontSize: (size: FontSizeLevel) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  animationsEnabled: boolean;
  toggleAnimations: () => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  resetAllSettings: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

const fontSizeMap = {
  'small': 0.875,
  'normal': 1,
  'large': 1.125,
  'extra-large': 1.25
};

const fontSizeLevels: FontSizeLevel[] = ['small', 'normal', 'large', 'extra-large'];

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [fontSize, setFontSizeState] = useState<FontSizeLevel>('normal');
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(true);
  const [highContrast, setHighContrast] = useState<boolean>(false);

  // Load saved preferences
  useEffect(() => {
    const savedFontSize = localStorage.getItem('kca-font-size') as FontSizeLevel;
    if (savedFontSize && fontSizeLevels.includes(savedFontSize)) {
      setFontSizeState(savedFontSize);
    }

    const savedAnimations = localStorage.getItem('kca-animations-enabled');
    if (savedAnimations !== null) {
      setAnimationsEnabled(JSON.parse(savedAnimations));
    }

    const savedHighContrast = localStorage.getItem('kca-high-contrast');
    if (savedHighContrast !== null) {
      setHighContrast(JSON.parse(savedHighContrast));
    }
  }, []);

  // Apply font size to document root
  useEffect(() => {
    const scale = fontSizeMap[fontSize];
    document.documentElement.style.setProperty('--font-scale', scale.toString());
    localStorage.setItem('kca-font-size', fontSize);
  }, [fontSize]);

  // Apply animations setting
  useEffect(() => {
    const animationValue = animationsEnabled ? 'running' : 'paused';
    document.documentElement.style.setProperty('--animation-play-state', animationValue);
    
    // Also control CSS animations
    if (!animationsEnabled) {
      document.documentElement.style.setProperty('--animation-duration', '0s');
      document.documentElement.style.setProperty('--transition-duration', '0s');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
      document.documentElement.style.removeProperty('--transition-duration');
    }
    
    localStorage.setItem('kca-animations-enabled', JSON.stringify(animationsEnabled));
  }, [animationsEnabled]);

  // Apply high contrast
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('kca-high-contrast', JSON.stringify(highContrast));
  }, [highContrast]);

  const setFontSize = (size: FontSizeLevel) => {
    setFontSizeState(size);
  };

  const increaseFontSize = () => {
    const currentIndex = fontSizeLevels.indexOf(fontSize);
    if (currentIndex < fontSizeLevels.length - 1) {
      setFontSizeState(fontSizeLevels[currentIndex + 1]);
    }
  };

  const decreaseFontSize = () => {
    const currentIndex = fontSizeLevels.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSizeState(fontSizeLevels[currentIndex - 1]);
    }
  };

  const resetFontSize = () => {
    setFontSizeState('normal');
  };

  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled);
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const resetAllSettings = () => {
    setFontSizeState('normal');
    setAnimationsEnabled(true);
    setHighContrast(false);
    localStorage.removeItem('kca-font-size');
    localStorage.removeItem('kca-animations-enabled');
    localStorage.removeItem('kca-high-contrast');
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        animationsEnabled,
        toggleAnimations,
        highContrast,
        toggleHighContrast,
        resetAllSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
