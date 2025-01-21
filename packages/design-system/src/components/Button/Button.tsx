import * as React from 'react';
import * as stylex from '@stylexjs/stylex';
import * as Slot from '@radix-ui/react-slot';
import { tokens } from '../../tokens.stylex';

type ButtonVariant = 'solid' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const styles = stylex.create({
  base: {
    alignItems: 'center',
    borderRadius: tokens.borderRadius,
    cursor: {
      default: 'pointer',
      ':disabled': 'not-allowed',
    },
    display: 'inline-flex',
    fontSize: tokens.fontSizeBase,
    fontWeight: tokens.fontWeightMedium,
    gap: tokens.space2,
    justifyContent: 'center',
    opacity: {
      default: null,
      ':disabled': 0.5,
    },
    transition: `all ${tokens.transitionDuration} ${tokens.transitionTimingFunction}`,
  },
  // Variants
  solid: {
    backgroundColor: {
      default: tokens.colorPrimary,
      ':hover': tokens.colorPrimaryHover,
    },
    color: tokens.colorPrimaryForeground,
  },
  outline: {
    backgroundColor: {
      default: 'transparent',
      ':hover': tokens.colorBackgroundHover,
    },
    borderColor: {
      default: tokens.colorBorder,
      ':hover': tokens.colorBorderHover,
    },
    borderStyle: 'solid',
    borderWidth: tokens.borderWidth,
    color: tokens.colorForeground,
  },
  ghost: {
    backgroundColor: {
      default: 'transparent',
      ':hover': tokens.colorBackgroundHover,
    },
    color: tokens.colorForeground,
  },
  // Sizes
  sm: {
    fontSize: tokens.fontSizeSm,
    height: '2rem',
    padding: `0 ${tokens.space3}`,
  },
  md: {
    height: '2.5rem',
    padding: `0 ${tokens.space4}`,
  },
  lg: {
    fontSize: tokens.fontSizeLg,
    height: '3rem',
    padding: `0 ${tokens.space6}`,
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
