import React from 'react';
import styles from './Button.module.css';
import '../../styles/colorVars.css';

type Color =
  | 'main-purple'
  | 'black'
  | 'white'
  | 'navy'
  | 'grey'
  | 'sub-gradation'
  | 'bg-purple-light'
  | 'sub-purple-light'
  | 'grey-light-00'
  | 'grey-light-02'
  | 'grey-dark-01';
interface Props {
  /**
   * 배경색
   */
  backgroundColor?: Color;
  /**
   * 글자색
   */
  textColor?: Color;
  /**
   * 사이즈 설정
   */
  size?: 'small' | 'medium' | 'full';
  /**
   * Border Radius 사이즈 설정
   */
  borderRadius?: 'medium' | 'large';
  /**
   * Border 색깔, 값 존재하지않을시 border none 처리됨
   */
  borderColor?: Color;
  /**
   * Border 두께, px기준이며 color와 함께 존재하지 않을시 border none처리됨
   */
  border?: number;
  /**
   * 버튼 속 텍스트
   */
  label: string;
  /**
   * 클릭 가능한지 상태
   */
  disabled?: boolean;
  /**
   * 클릭 불가능시 배경 색깔
   */
  disabledBackgroundColor?: Color;
  /**
   * 클릭 불가능시 글자 색깔
   */
  disabledTextColor?: Color;
  /**
   * 클릭 불가능시 border 색깔
   */
  disabledBorderColor?: Color;
  /**
   * 클릭 핸들러
   */
  onClick?: () => void;
}

/**
 * 버튼
 */
const Button: React.FC<Props> = ({
  size = 'medium',
  backgroundColor = 'main-purple',
  textColor = 'white',
  label,
  borderColor,
  border,
  disabled = false,
  disabledBackgroundColor = 'grey',
  disabledTextColor = 'white',
  disabledBorderColor = 'grey',
  borderRadius = 'medium',
  onClick,
}: Props) => {
  let btnClassNames = `${styles.btn}`;
  switch (size) {
    case 'full':
      btnClassNames += ` ${styles.btnFull}`;
      break;
    case 'medium':
      btnClassNames += ` ${styles.btnMedium}`;
      break;
    case 'small':
      btnClassNames += ` ${styles.btnSmall}`;
      break;
    default:
      throw new Error('not valid btn size!');
  }
  switch (borderRadius) {
    case 'medium':
      btnClassNames += ` ${styles.roundedMedium}`;
      break;
    case 'large':
      btnClassNames += ` ${styles.roundedLarge}`;
      break;
    default:
      throw new Error('not valid borderRadius size!');
  }

  return (
    <button
      style={{
        background: `var(--color-${
          disabled ? disabledBackgroundColor : backgroundColor
        })`,
        color: `var(--color-${disabled ? disabledTextColor : textColor})`,
        border:
          borderColor && border
            ? `${border}px solid var(--color-${
                disabled ? disabledBorderColor : borderColor
              })`
            : 'none',
      }}
      className={btnClassNames}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
