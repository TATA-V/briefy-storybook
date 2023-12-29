import Input from '../src/Input'

export default {
  title: 'BasicStyle/Input',
  component: Input,
  tags: ['autodocs'],
}

export const Primary = {
  args: {
    type: 'text',
    mode: 'blue',
    placeholder: '타이틀',
    // eslint-disable-next-line no-console
    onChange: (e) => console.log(e.target.value),
  },
  argTypes: {
    mode: {
      options: ['blue', 'red', 'gray', 'gray2'],
      control: { type: 'radio' },
    },
  },
}
