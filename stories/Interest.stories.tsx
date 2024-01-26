import Interest from '../src/components/Interest';

export default {
  title: 'BasicStyle/Interest',
  component: Interest,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    title: '비지니스',
    // eslint-disable-next-line no-console
    onClick: (title: string) => console.log(title),
  },
  argTypes: {
    title: {
      options: ['비지니스', '기술', '건강', '엔터테이먼트', '스포츠', '환경', '과학', '여행', '미디어', '푸드'],
      control: { type: 'radio' },
    },
  },
};
