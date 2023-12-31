import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string;
  category: string;
  description: string;
  onClick: () => void;
}
function NewsLetterCard({
  title, category, description, onClick,
} : Props) {
  return (
    <NewsLetterCardBlock>
      <ImageContainer onClick={onClick}>
        <img src="https://ifh.cc/g/t5Z7ol.jpg" alt="news-img" loading="lazy" />
      </ImageContainer>
      <Content onClick={onClick}>
        <h3 className="title">{title}</h3>
        <p className="category">{category}</p>
        <p className="description">{description}</p>
      </Content>
    </NewsLetterCardBlock>
  )
}

export default NewsLetterCard

const NewsLetterCardBlock = styled.div`
  width: 384px;
  height: 156px;
  border-radius: 20px;
  border: 1px solid var(--black-300);
  padding: 16px;
  display: flex;
  align-items: center;
`
const ImageContainer = styled.div`
  width: 124px;
  height: 124px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 124px;
    height: 124px;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`
const Content = styled.div`
  width: 216px;
  padding-left: 12px;
  cursor: pointer;
  .title {
    color: var(--black-900);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.375rem;
  }
  .category {
    color: var(--black-700);
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.25rem;
    margin: 2px 0 10px 0;
  }
  .description {
    color: var(--black-500);
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.25rem;

    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    height: 2.5rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`
