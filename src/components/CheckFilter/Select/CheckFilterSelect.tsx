import React from 'react';
import styles from './CheckFilterSelect.module.css';
import { ReactComponent as ArrowDown } from '../../../assets/icon/arrowDown.svg';
import { colors } from '../../../styles/colors';
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
   * 필터 속 텍스트
   */
  label: string;
  /**
   * 체크 상태 여부
   */
  isChecked: boolean;
  /**
   * 배경색
   */
  backgroundColor?: Color;
  /**
   * 글자색
   */
  textColor?: Color;
  /**
   * 체크되었을때의 배경색
   */
  checkedBackgroundColor?: Color;
  /**
   * 체크되었을때의 글자색
   */
  checkedTextColor?: Color;
  /**
   * 사이즈 설정
   */
  size?: 'small' | 'medium' | 'full';
  /**
   * arrow down icon 색깔
   */
  arrowColor?: string;
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
   * 클릭 핸들러
   */
  onClick?: () => void;
}

const CheckFilterSelect: React.FC<Props> = ({
  label,
  isChecked = false,
  backgroundColor = 'bg-purple-light',
  textColor = 'navy',
  checkedBackgroundColor = 'main-purple',
  checkedTextColor = 'white',
  size = 'small',
  arrowColor = colors.subPurpleLight,
  borderRadius = 'large',
  borderColor,
  border,
  onClick = () => {},
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
      className={btnClassNames}
      onClick={onClick}
      style={{
        backgroundColor: `var(--color-${
          isChecked ? checkedBackgroundColor : backgroundColor
        })`,
        color: `var(--color-${isChecked ? checkedTextColor : textColor})`,
        border:
          borderColor && border
            ? `${border}px solid var(--color-${borderColor})`
            : 'none',
      }}
    >
      {label}
      <ArrowDown width={24} height={24} stroke={arrowColor} />
    </button>
  );
};

export default CheckFilterSelect;
