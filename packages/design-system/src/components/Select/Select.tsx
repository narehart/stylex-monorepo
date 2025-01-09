import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as stylex from '@stylexjs/stylex';
import { tokens } from '../../theme/tokens.stylex';

const styles = stylex.create({
  trigger: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: tokens.borderRadius,
    borderWidth: tokens.borderWidth,
    borderStyle: 'solid',
    borderColor: tokens.colorBorder,
    padding: `${tokens.space2} ${tokens.space4}`,
    fontSize: tokens.fontSizeBase,
    lineHeight: tokens.lineHeightBase,
    backgroundColor: tokens.colorBackground,
    color: tokens.colorForeground,
    ':hover': {
      borderColor: tokens.colorBorderHover,
    },
    ':focus': {
      outline: 'none',
      borderColor: tokens.colorPrimary,
      boxShadow: `0 0 0 ${tokens.borderWidthFocus} ${tokens.colorPrimary}33`,
    },
  },
  content: {
    overflow: 'hidden',
    backgroundColor: tokens.colorBackground,
    borderRadius: tokens.borderRadius,
    boxShadow: tokens.shadowLg,
    borderWidth: tokens.borderWidth,
    borderStyle: 'solid',
    borderColor: tokens.colorBorder,
  },
  viewport: {
    padding: tokens.space1,
  },
  item: {
    fontSize: tokens.fontSizeBase,
    lineHeight: tokens.lineHeightBase,
    color: tokens.colorForeground,
    borderRadius: tokens.borderRadius,
    display: 'flex',
    alignItems: 'center',
    padding: `${tokens.space2} ${tokens.space3}`,
    userSelect: 'none',
    ':hover': {
      backgroundColor: tokens.colorBackgroundHover,
      cursor: 'pointer',
    },
    ':focus': {
      backgroundColor: tokens.colorBackgroundActive,
      outline: 'none',
    },
  },
});

export interface SelectProps extends SelectPrimitive.SelectProps {
  placeholder?: string;
  children: React.ReactNode;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ children, placeholder = 'Select an option...', ...props }, ref) => {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger ref={ref} {...stylex.props(styles.trigger)}>
          <SelectPrimitive.Value placeholder={placeholder} />
        </SelectPrimitive.Trigger>
        
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content {...stylex.props(styles.content)}>
            <SelectPrimitive.Viewport {...stylex.props(styles.viewport)}>
              {children}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

Select.displayName = 'Select';

export interface SelectItemProps extends SelectPrimitive.SelectItemProps {
  children: React.ReactNode;
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <SelectPrimitive.Item ref={ref} {...props} {...stylex.props(styles.item)}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);

SelectItem.displayName = 'SelectItem';