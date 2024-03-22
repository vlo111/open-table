import { CSSProperties } from 'styled-components';

export interface CustomError {
  errors: {
    message: string;
  };
}
export interface IButton {
  text?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
  type: 'link' | 'text' | 'primary' | 'default' | 'dashed' | undefined;
  shape?: 'default' | 'circle' | 'round' | undefined;
  className?: string;
  icon?: JSX.Element;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  style?: CSSProperties;
  loading?: boolean;
}
