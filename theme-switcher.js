/**
 * Restful Sounds Theme Switcher Module
 * A lightweight system to manage theme preferences with local storage persistence
 * 
 * Usage:
 * - ThemeSwitcher.init() - Initialize with default theme
 * - ThemeSwitcher.setTheme('dark') - Switch to dark theme
 * - ThemeSwitcher.setTheme('light') - Switch to light theme
 * - ThemeSwitcher.setTheme('auto') - Use system preference
 * - ThemeSwitcher.getTheme() - Get current theme
 */

const ThemeSwitcher = (function() {
  // Available themes
  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    AUTO: 'auto'
  };
  
  // Local storage key
  const STORAGE_KEY = 'restful-sounds-theme';
  
  // DOM manipulations to apply theme
  function applyTheme(themeName) {
    // Remove all theme classes first
    document.documentElement.classList.remove(
      'theme-light', 
      'theme-dark', 
      'theme-auto'
    );
    
    // Apply the new theme class
    document.documentElement.classList.add(`theme-${themeName}`);
    
    // Store in localStorage for persistence
    localStorage.setItem(STORAGE_KEY, themeName);
    
    return themeName;
  }
  
  // Detect system preference for auto theme
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEMES.DARK
      : THEMES.LIGHT;
  }
  
  return {
    // Public API
    init: function() {
      // Get stored theme or default to auto
      const storedTheme = localStorage.getItem(STORAGE_KEY) || THEMES.AUTO;
      this.setTheme(storedTheme);
      
      // Listen for system preference changes (for auto theme)
      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
          if (this.getTheme() === THEMES.AUTO) {
            this.setTheme(THEMES.AUTO);
          }
        });
    },
    
    setTheme: function(themeName) {
      // Validate theme name
      if (!Object.values(THEMES).includes(themeName)) {
        console.error(`Invalid theme: ${themeName}`);
        return;
      }
      
      return applyTheme(themeName);
    },
    
    getTheme: function() {
      return localStorage.getItem(STORAGE_KEY) || THEMES.AUTO;
    },
    
    // Export themes enum
    THEMES
  };
})();

// Auto-initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  ThemeSwitcher.init();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeSwitcher;
}
