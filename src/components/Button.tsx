import { ReactNode, useMemo, useState } from 'react';
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
  const color = useMemo(() => {
    switch (mode) {
      case 'lineBlue':
        return [themes.colors.white, themes.colors.primary, themes.colors.primary];
      case 'lineBlack':
        return [themes.colors.white, themes.colors.black900, themes.colors.black900];
      case 'blue':
        return [themes.colors.primary, themes.colors.white, themes.colors.primary];
      case 'black':
        return [themes.colors.black900, themes.colors.white, themes.colors.black900];
      case 'disabled':
        return [themes.colors.black100, themes.colors.black300, themes.colors.black300];
      default:
        return [themes.colors.white, themes.colors.primary, themes.colors.primary];
    }
  }, [mode]);

  const width = useMemo(() => {
    switch (size) {
      case 'big':
        return '358px';
      case 'middle':
        return '280px';
      case 'small':
        return '160px';
      case 'extraSmall':
        return '131px';
      default:
        return '358px';
    }
  }, [size]);

  return (
    <>
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
