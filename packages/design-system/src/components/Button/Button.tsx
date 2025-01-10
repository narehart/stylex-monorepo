import * as React from 'react';
import * as stylex from '@stylexjs/stylex';
import * as Slot from '@radix-ui/react-slot';
import { tokens } from '../../tokens.stylex';

type ButtonVariant = 'solid' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const styles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: tokens.borderRadius,
    fontSize: tokens.fontSizeBase,
    fontWeight: tokens.fontWeightMedium,
    transition: `all ${tokens.transitionDuration} ${tokens.transitionTimingFunction}`,
    cursor: 'pointer',
    gap: tokens.space2,
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  // Variants
  solid: {
    backgroundColor: tokens.colorPrimary,
    color: tokens.colorPrimaryForeground,
    ':hover': {
      backgroundColor: tokens.colorPrimaryHover,
    },
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: tokens.borderWidth,
    borderStyle: 'solid',
    borderColor: tokens.colorBorder,
    color: tokens.colorForeground,
    ':hover': {
      borderColor: tokens.colorBorderHover,
      backgroundColor: tokens.colorBackgroundHover,
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: tokens.colorForeground,
    ':hover': {
      backgroundColor: tokens.colorBackgroundHover,
    },
  },
  // Sizes
  sm: {
    height: '2rem',
    padding: `0 ${tokens.space3}`,
    fontSize: tokens.fontSizeSm,
  },
  md: {
    height: '2.5rem',
    padding: `0 ${tokens.space4}`,
  },
  lg: {
    height: '3rem',
    padding: `0 ${tokens.space6}`,
    fontSize: tokens.fontSizeLg,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'solid', size = 'md', asChild, children, className, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot.Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={className}
        {...props}
        {...stylex.props(
          styles.base,
          variant && styles[variant],
          size && styles[size]
        )}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
