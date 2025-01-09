import * as stylex from '@stylexjs/stylex';
import { Button, Select, SelectItem, tokens } from '@monorepo/design-system';

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
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '24rem',
    borderRadius: tokens.borderRadius,
  },
  buttonGroup: {
    // Horizontal layout for button variants
    display: 'flex',
    gap: '0.5rem',
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