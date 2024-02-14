import type { Meta, StoryObj } from '@storybook/react'
import { Home } from 'lucide-react'

import { Button, ButtonSize, ButtonType } from '@/components/Button'

import { decorators } from './../../../.storybook/decorators'

const componentDescription = `
The Button component provides an intuitive interface for users to interact with,
allowing them to execute various actions with a simple click or tap. With its
versatility in types and sizes, the Button component seamlessly integrates into
diverse design schemes, catering to different visual and functional requirements.
`

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  decorators,
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary',
    type: ButtonType.primary,
    size: ButtonSize.large,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    type: ButtonType.secondary,
    size: ButtonSize.medium,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    type: ButtonType.disabled,
    size: ButtonSize.small,
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    type: ButtonType.outline,
    size: ButtonSize.medium,
  },
}

export const WithIcon: Story = {
  args: {
    children: 'With Icon',
    icon: <Home />,
    type: ButtonType.primary,
    size: ButtonSize.large,
  },
}
