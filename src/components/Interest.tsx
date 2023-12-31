import React, {
  useEffect, useState, ReactNode,
} from 'react'
import styled from 'styled-components'
import BusinessIcon from '../assets/icons/BusinessIcon'
import TechniqueIcon from '../assets/icons/TechniqueIcon'
import HealthIcon from '../assets/icons/HealthIcon'
import EntertainmentIcon from '../assets/icons/EntertainmentIcon'
import SportsIcon from '../assets/icons/SportsIcon'
import EnvironmentIcon from '../assets/icons/EnvironmentIcon'
import ScienceIcon from '../assets/icons/ScienceIcon'
import TravelIcon from '../assets/icons/TravelIcon'
import MediaIcon from '../assets/icons/MediaIcon'
import FoodIcon from '../assets/icons/FoodIcon'

interface Props {
  title: string;
  onClick: (title: string) => void;
}

function Interest({ title, onClick } : Props) {
  const [icon, setIcon] = useState<ReactNode>()
  const [clicked, setClicked] = useState<boolean>(false)

  useEffect(() => {
    switch (title) {
      case '비지니스':
        setIcon(<BusinessIcon />)
        return
      case '기술':
        setIcon(<TechniqueIcon />)
        return
      case '건강':
        setIcon(<HealthIcon />)
        return
      case '엔터테이먼트':
        setIcon(<EntertainmentIcon />)
        return
      case '스포츠':
        setIcon(<SportsIcon />)
        return
      case '환경':
        setIcon(<EnvironmentIcon />)
        return
      case '과학':
        setIcon(<ScienceIcon />)
        return
      case '여행':
        setIcon(<TravelIcon />)
        return
      case '미디어':
        setIcon(<MediaIcon />)
        return
      case '푸드':
        setIcon(<FoodIcon />)
        return
      default:
        setIcon(<BusinessIcon />)
    }
  }, [title])

  const handleClick = () => {
    setClicked(!clicked)
    onClick(title)
  }

  return (
    <StyledLi $clicked={clicked} onClick={handleClick}>
      <div className="interest-icon">
        {icon}
      </div>
      <span className="interest-title">
        {title}
      </span>
    </StyledLi>
  )
}

export default Interest

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
`
