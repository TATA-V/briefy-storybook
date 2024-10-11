# briefy storybook

🔗 _**<a href="https://briefy-storybook.vercel.app">storybook deploy link</a>**_

## Installation
```bash
npm i -D briefy-design
```

## Usage

**Button**

```jsx
import { Button } from 'briefy-design'

function MainPage() {
  return (
    <Button
      onClick={() => alert('click!')}
      title="name"
      size="medium"
      mode="lineBlue"
    />
  )
}
```

**Input**

```jsx
import { Input } from 'briefy-design'

function MainPage() {
  return (
    <Input
        type="text"
        mode="red"
        placeholder="타이틀 입력"
        onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
      />
  )
}
```

**Interest**

```jsx
import { Interest } from 'briefy-design'

function MainPage() {
  return (
    <Interest title="비지니스" onClick={(title: string) => alert(title)} />
  )
}
```

**ArticleCard**

```jsx
import { ArticleCard } from 'briefy-design'

function MainPage() {
  return (
    <ArticleCard
        data={{
          category: ['뉴닉', '경제'],
          title: '이스라엘-팔레스타인 하마스 전쟁 (8) : 지상편과 휴전',
          src: '이미지경로',
          percent: '75%',
        }}
        mode="unread"
        onClick={() => alert('클릭!')}
      />
  )
}
```

**NewsLetterCard**

```jsx
import { NewsLetterCard } from 'briefy-design'

function MainPage() {
  return (
      <NewsLetterCard
        src="이미지경로"
        title="뉴닉"
        category="경제"
        description="시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요"
        onClick={() => alert('뉴스레터')}
      />
  )
}
```