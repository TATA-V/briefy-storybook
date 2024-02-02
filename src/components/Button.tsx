import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { themes } from '../themes';

interface Props {
  title: string;
  size: string;
  mode: string;
  onClick: () => void;
  // eslint-disable-next-line react/require-default-props
  fontSize?: string;
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
  // eslint-disable-next-line react/require-default-props
  mobileHeight?: string;
  // eslint-disable-next-line react/require-default-props
  hasBorder?: boolean;
}

function Button({
  title, size, mode, onClick, fontSize = '0.875rem', mobileHeight = '32px', hasBorder = true, children,
} : Props) {
  const [color, setColor] = useState<string[]>([]);
  const [width, setWidth] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    switch (mode) {
      case 'lineBlue':
        setColor([themes.colors.white, themes.colors.primary, themes.colors.primary]);
        break;
      case 'lineBlack':
        setColor([themes.colors.white, themes.colors.black900, themes.colors.black900]);
        break;
      case 'lineGray':
        setColor([themes.colors.white, themes.colors.black500, themes.colors.black500]);
        break;
      case 'blue':
        setColor([themes.colors.primary, themes.colors.white, themes.colors.primary]);
        break;
      case 'black':
        setColor([themes.colors.black900, themes.colors.white, themes.colors.black900]);
        break;
      case 'disabled':
        setColor([themes.colors.black100, themes.colors.black300, themes.colors.black300]);
        break;
      default:
        setColor([themes.colors.white, themes.colors.primary, themes.colors.primary]);
    }
    setIsVisible(true);
  }, [mode]);

  useEffect(() => {
    switch (size) {
      case 'big':
        setWidth('358px');
        return;
      case 'middle':
        setWidth('280px');
        return;
      case 'small':
        setWidth('160px');
        return;
      case 'extraSmall':
        setWidth('131px');
        return;
      default:
        setWidth('358px');
    }
  }, [size]);

  return (
    <>
      {isVisible && (
        <StyledButton
          disabled={mode === 'disabled'}
          $width={width}
          $color={color}
          $fontSize={fontSize}
          $mobileHeight={mobileHeight}
          $hasBorder={hasBorder}
          onClick={onClick}
        >
          {title}
          {children}
        </StyledButton>
      )}
    </>
  );
}

export default Button;

interface IStyledButton {
  $color: string[];
  $width: string;
  $fontSize: string;
  $mobileHeight: string;
  $hasBorder: boolean
}

const StyledButton = styled.button<IStyledButton>`
  background-color: ${({ $color }) => $color[0]};
  color: ${({ $color }) => $color[1]};
  border: ${({ $hasBorder, $color }) => ($hasBorder ? `1px solid ${$color[2]}` : null)};

  &:hover {
    opacity: 0.8;
  }
  width: ${({ $width }) => $width};
  height: 48px;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 767px) {
    width: 100%; 
    height: ${({ $mobileHeight }) => $mobileHeight};
    font-size: 0.875rem;
  }
`;
