import ArticleCard from '../src/components/ArticleCard';

export default {
  title: 'CardStyle/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    data: {
      category: ['뉴닉', '경제'],
      title: '이스라엘-팔레스타인 하마스 전쟁 (8) : 지상편과 휴전',
      src: 'https://ifh.cc/g/t5Z7ol.jpg',
      percent: '75%',
    },
    mode: 'unread',
    onClick: () => alert('클릭!'),
  },
  argTypes: {
    mode: {
      options: ['unread', 'reading', 'read'],
      control: { type: 'radio' },
    },
  },
};
