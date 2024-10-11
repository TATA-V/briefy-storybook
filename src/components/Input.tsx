import { ChangeEvent, useMemo } from 'react';
import styled from 'styled-components';
import { themes } from '../themes';

interface Props {
  type: string;
  mode: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  height?: string;
  mobileHeight?:string;
}

function Input({ type, mode, placeholder, onChange, value, height = '48px', mobileHeight = '38px' } : Props) {
  const color = useMemo(() => {
    switch (mode) {
      case 'blue':
        return [themes.colors.white, themes.colors.primary];
      case 'red':
        return [themes.colors.white, themes.colors.warning];
      case 'gray':
        return [themes.colors.white, themes.colors.black300];
      case 'gray2':
        return [themes.colors.black100, themes.colors.black300];
      default:
        return [themes.colors.white, themes.colors.primary];
    }
  }, [mode]);

  return (
    <StyledInput
      $color={color}
      $height={height}
      $mobileHeight={mobileHeight}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      disabled={mode === 'gray2'}
      value={value}
    />
  );
}

export default Input;

const StyledInput = styled.input<{ $color: string[]; $height: string; $mobileHeight: string; }>`
  border: 1px solid ${({ $color }) => $color[1]};
  caret-color: ${({ $color }) => $color[1]};
  background-color: ${({ $color }) => $color[0]};

  width: 100%;
  height: ${({ $height }) => $height};
  color: #1C1C1E;
  font-size: 0.874rem;
  font-weight: 400;
  border-radius: 8px;
  padding: 17px 0 17px 12px;
  outline: none;

  &::placeholder {
    color: #B3B4B9;
  }

  @media all and (max-width: 767px) {
    height: ${({ $mobileHeight }) => $mobileHeight} ;
    padding: 0 0 0 12px;
  }
`;
