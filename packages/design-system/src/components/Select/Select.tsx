import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as stylex from '@stylexjs/stylex';
import { tokens } from '../../tokens.stylex';

const styles = stylex.create({
  trigger: {
    alignItems: 'center',
    backgroundColor: tokens.colorBackground,
    borderColor: {
      default: tokens.colorBorder,
      ':hover': tokens.colorBorderHover,
      ':focus': tokens.colorPrimary,
    },
    borderRadius: tokens.borderRadius,
    borderStyle: 'solid',
    borderWidth: tokens.borderWidth,
    boxShadow: {
      ':focus': `0 0 0 ${tokens.borderWidthFocus} ${tokens.colorPrimary}33`,
    },
    color: tokens.colorForeground,
    display: 'inline-flex',
    fontSize: tokens.fontSizeBase,
    justifyContent: 'space-between',
    lineHeight: tokens.lineHeightBase,
    outline: {
      ':focus': 'none',
    },
    padding: `${tokens.space2} ${tokens.space4}`,
    width: '100%',
  },
  content: {
    backgroundColor: tokens.colorBackground,
    borderColor: tokens.colorBorder,
    borderRadius: tokens.borderRadius,
    borderStyle: 'solid',
    borderWidth: tokens.borderWidth,
    boxShadow: tokens.shadowLg,
    overflow: 'hidden',
  },
  viewport: {
    padding: tokens.space1,
  },
  item: {
    alignItems: 'center',
    backgroundColor: {
      ':hover': tokens.colorBackgroundHover,
      ':focus': tokens.colorBackgroundActive,
    },
    borderRadius: tokens.borderRadius,
    color: tokens.colorForeground,
    cursor: {
      ':hover': 'pointer',
    },
    display: 'flex',
    fontSize: tokens.fontSizeBase,
    lineHeight: tokens.lineHeightBase,
    outline: {
      ':focus': 'none',
    },
    padding: `${tokens.space2} ${tokens.space3}`,
    userSelect: 'none',
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
