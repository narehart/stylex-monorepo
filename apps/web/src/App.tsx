import * as stylex from '@stylexjs/stylex';
import { Button, Select, SelectItem } from '@monorepo/design-system';
import { tokens } from '@monorepo/design-system/tokens.stylex';

/**
 * Example Application
 *
 * Demonstrates:
 * 1. Consuming design system components
 * 2. Component composition patterns
 * 3. Layout and spacing using design tokens
 * 4. Style overrides and customization
 */
const styles = stylex.create({
  container: {
    // Using spacing tokens for consistent layout
    borderRadius: tokens.space4,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.space4,
    maxWidth: '24rem',
    padding: tokens.space8,
  },
  buttonGroup: {
    // Horizontal layout for button variants
    display: 'flex',
    gap: tokens.space2,
  },
});

export default function App() {
  return (
    <div {...stylex.props(styles.container)}>
      {/* Demonstrating component variants */}
      <div {...stylex.props(styles.buttonGroup)}>
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* Demonstrating composition with Radix */}
      <Select>
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
        <SelectItem value="3">Option 3</SelectItem>
      </Select>
    </div>
  );
}
