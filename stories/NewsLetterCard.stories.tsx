import NewsLetterCard from '../src/components/NewsLetterCard'

export default {
  title: 'CardStyle/NewsLetterCard',
  component: NewsLetterCard,
  tags: ['autodocs'],
}

export const Primary = {
  args: {
    title: '뉴닉',
    category: '경제',
    description: '시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요',
    onClick: () => alert('클릭!'),
  },
}
