import { useState, useMemo } from 'react';
import styled from 'styled-components';
import BusinessIcon from '../assets/icons/BusinessIcon';
import TechniqueIcon from '../assets/icons/TechniqueIcon';
import HealthIcon from '../assets/icons/HealthIcon';
import EntertainmentIcon from '../assets/icons/EntertainmentIcon';
import SportsIcon from '../assets/icons/SportsIcon';
import EnvironmentIcon from '../assets/icons/EnvironmentIcon';
import ScienceIcon from '../assets/icons/ScienceIcon';
import TravelIcon from '../assets/icons/TravelIcon';
import MediaIcon from '../assets/icons/MediaIcon';
import FoodIcon from '../assets/icons/FoodIcon';

interface Props {
  title: string;
  onClick: (title: string) => void;
  selected?: boolean;
}

function Interest({ title, onClick, selected = false } : Props) {
  const [clicked, setClicked] = useState<boolean>(selected);

  const icon = useMemo(() => {
    switch (title) {
      case '비지니스':
        return <BusinessIcon />;
      case '기술':
        return <TechniqueIcon />;
      case '건강':
        return <HealthIcon />;
      case '엔터테이먼트':
        return <EntertainmentIcon />;
      case '스포츠':
        return <SportsIcon />;
      case '환경':
        return <EnvironmentIcon />;
      case '과학':
        return <ScienceIcon />;
      case '여행':
        return <TravelIcon />;
      case '미디어':
        return <MediaIcon />;
      case '푸드':
        return <FoodIcon />;
      default:
        return <BusinessIcon />;
    }
  }, [title]);

  const handleClick = () => {
    setClicked(!clicked);
    onClick(title);
  };

  return (
    <StyledLi $clicked={clicked} onClick={handleClick}>
      <div className="interest-icon">
        {icon}
      </div>
      <span className="interest-title">
        {title}
      </span>
    </StyledLi>
  );
}

export default Interest;

const StyledLi = styled.li<{ $clicked: boolean; }>`
  background-color: ${({ $clicked }) => ($clicked ? 'var(--primary)' : 'var(--black-100)')};
  
  &:hover {
    opacity: 0.8;
  }
  width: 120px;
  height: 120px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .interest-icon {
    color: ${({ $clicked }) => ($clicked ? 'white' : 'var(--black-300)')};
    width: 40px;
    height: 40px;
  }

  .interest-title {
    color: ${({ $clicked }) => ($clicked ? 'white' : 'var(--black-500)')};
    font-size: 0.875rem;
    font-weight: normal;
    padding-top: 12px;
  }

  @media all and (max-width: 640px) {
    width: 80px;
    height: 80px;

    .interest-icon {
      width: 24px;
    height: 24px;
    }

    .interest-title {
      font-size: 0.75rem;
      padding-top: 4px;
    }
  }
`;
