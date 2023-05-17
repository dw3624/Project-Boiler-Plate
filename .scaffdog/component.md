---
name: 'component'
root: '.'
output: 'src/components'
ignore: []
questions:
  directory:
    message: 'Please select the component type.'
    choices:
      - atoms
      - blocks
      - templates

  name: 'Please enter a component name.'
---

# `{{ inputs.directory }}/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import React from 'react';

const {{ inputs.name | pascal }} = (): JSX.Element => {
  return (
    <div>
    </div>
  );
};

export default {{ inputs.name | pascal }};

```

# `{{ inputs.directory }}/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.css`

```css

```

# `{{ inputs.directory }}/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.ts`

```typescript
import { Meta, StoryObj } from '@storybook/react';
import {{ inputs.name | pascal }} from './{{ inputs.name | pascal }}';

const meta: Meta<typeof {{ inputs.name | pascal }}> = {
  title: 'Components/{{ inputs.directory }}/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
};

export default meta;
type Story = StoryObj<typeof {{ inputs.name | pascal }}>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Button',
  },
};

```
