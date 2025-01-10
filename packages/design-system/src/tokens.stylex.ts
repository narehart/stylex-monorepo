
// It's advised to keep the tokens at the top-level of the src directory as Stylex requires direct imports of variables from the .stylex.js files that define them.
import * as stylex from '@stylexjs/stylex';

export const tokens = stylex.defineVars({
    // Colors
    colorBackground: '#ffffff',
    colorBorder: '#e4e4e7',
    colorForeground: '#18181b',
    colorForegroundMuted: '#71717a',
    colorPrimary: '#3b82f6',
    colorPrimaryHover: '#2563eb',
    colorPrimaryForeground: '#ffffff',
    
    // Border tokens
    borderRadius: '0.375rem',
    borderRadiusLg: '0.5rem',
    borderWidth: '1px',
    borderWidthFocus: '2px',
    borderStyle: 'solid',
    
    // Typography
    fontFamily: 'Inter var, sans-serif',
    fontSizeXs: '0.75rem',
    fontSizeSm: '0.875rem',
    fontSizeBase: '1rem',
    fontSizeLg: '1.125rem',
    fontSizeXl: '1.25rem',
    
    // Font weights
    fontWeightNormal: '400',
    fontWeightMedium: '500',
    fontWeightSemibold: '600',
    fontWeightBold: '700',
    
    // Transitions
    transitionDuration: '150ms',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Line heights
    lineHeightTight: '1.25',
    lineHeightBase: '1.5',
    lineHeightRelaxed: '1.75',
    
    // Spacing
    space1: '0.25rem',
    space2: '0.5rem',
    space3: '0.75rem',
    space4: '1rem',
    space5: '1.25rem',
    space6: '1.5rem',
    
    // Shadows
    shadowSm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    shadowBase: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    
    // Additional color tokens for states and interactions
    colorBackgroundHover: 'rgb(0, 0, 0, 0.05)',
    colorBackgroundActive: 'rgb(0, 0, 0, 0.1)',
    colorBorderHover: '#d1d5db',
    colorPrimary33: 'rgb(59, 130, 246, 0.33)' // Used for focus shadow
});