import Button from '../src/components/Button'

export default {
  title: 'BasicStyle/Button',
  component: Button,
  tags: ['autodocs'],
}

export const Primary = {
  args: {
    title: 'button',
    size: 'big',
    mode: 'lineBlue',
    onClick: () => alert('클릭!'),
  },
  argTypes: {
    mode: {
      options: ['lineBlue', 'lineBlack', 'blue', 'black', 'disabled'],
      control: { type: 'radio' },
    },
    size: {
      options: ['big', 'middle', 'small', 'extraSmall'],
      control: { type: 'radio' },
    },
  },
}
