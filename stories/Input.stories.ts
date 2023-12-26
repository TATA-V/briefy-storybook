import Input from '../src/Input'

export default {
  title: 'BaseStyle/Input',
  component: Input,
  tags: ['autodocs'],
}

export const Primary = {
  args: {
    type: 'text',
    colorType: 'blue',
    placeholder: '타이틀',
    onChange: (e) => console.log(e.target.value),
  },
  argTypes: {
    colorType: {
      options: ['blue', 'red', 'gray', 'gray2'],
      control: { type: 'radio' },
    },
  },
}
