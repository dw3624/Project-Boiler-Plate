---
name: 'component'
root: 'src/components'
output: '.'
ignore: []
questions:
  name: 'Please enter a component name.'
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import React from 'react';

import styles from './{{ inputs.name | pascal }}.module.css'

const {{ inputs.name | pascal }} = () => {
  return (
    <div>
    </div>
  );
};

export default {{ inputs.name | pascal }};

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.css`

```css

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.ts`

```typescript
import { Meta, StoryObj } from '@storybook/react';
import {{ inputs.name | pascal }} from './{{ inputs.name | pascal }}';

const meta: Meta<typeof {{ inputs.name | pascal }}> = {
  title: 'Components/{{ inputs.name | pascal }}',
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
