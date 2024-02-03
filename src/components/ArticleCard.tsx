import styled from 'styled-components';

interface Props {
  data: {
    category: string[];
    title: string;
    src: string;
    percent?: string;
  };
  mode: string;
  onClick: () => void;
}

function ArticleCard(props : Props) {
  const { data, mode, onClick } = props;
  const {
    category, title, src, percent,
  } = data;

  return (
    <StyledLi $mode={mode}>
      <ImageContainer onClick={onClick} $percent={percent} $mode={mode}>
        <div className="image-box">
          <img className="image" src={src} alt="article-img" loading="lazy" />
        </div>
        {mode === 'reading' && (
          <div className="progress-box">
            <div className="progress-bar" />
          </div>
        )}
      </ImageContainer>
      <div className="content-box">
        <p className="category">{category[0]}<span className="text-line">|</span>{category[1]}</p>
        <h3 onClick={onClick} className="title">
          {title}
        </h3>
        <p className="date">11월 4일</p>
      </div>
      {mode === 'read' && <ReadBg />}
    </StyledLi>
  );
}

export default ArticleCard;

const StyledLi = styled.li<{ $mode: string }>`
  width: 100%;
  height: 393px;
  padding: 17px 17px 16px 17px;
  border: 1px solid var(--black-300);
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .category {
    color: var(--black-500);
    font-size: 0.875rem;
    font-weight: 300;
    padding: 12px 0 2px 0;
    line-height: 1.25rem;
  }
  .text-line {
    color: var(--black-300);
    padding: 0 8px;
  }

  .title {
    width: 100%;
    color: ${({ $mode }) => ($mode === 'read' ? 'var(--black-500)' : 'var(--black-900)')};
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.375rem;
    cursor: pointer;
    
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    height: 2.75rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .date {
    color: var(--black-500);
    font-size: 0.875rem;
    font-weight: 300;
    padding-top: 14px;
  }

  .content-box {
    width: 100%;
    padding: 0px 6px 0 6px;
  }

  @media all and (max-width: 767px) {
    height: 312px;
    padding: 12px;
    border-radius: 12px;
    .category {
      padding-top: 10px;
    }
    .date {
      padding-top: 8px;
    }
    .content-box {
      padding: 0px 4px 0 4px;
    }
  }
`;

const ImageContainer = styled.div<{ $percent?: string, $mode: string }>`
  position: relative;
  width: 100%;
  height: 248px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  .image-box {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    opacity: ${({ $mode }) => ($mode === 'read' ? '75%' : '100%')};
    &:hover {
      transform: scale(1.1);
    }
  }
  
  .progress-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 8px;
    background-color: rgba(228, 229, 234, .6);
  }
  .progress-bar {
    width: ${({ $percent }) => $percent || '0'};
    height: 8px;
    background-color: var(--primary)
  }

  @media all and (max-width: 767px) {
    height: 184px;
    border-radius: 10px;
  }
`;

const ReadBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 19px;
  background-color: rgba(0, 0, 0, 0.08);
`;
