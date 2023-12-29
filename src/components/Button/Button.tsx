import React from 'react';
import styles from './Button.module.css';
import '../../styles/colorVars.css';
interface Props {
  /**
   * 주요 색상
   */
  primary?: boolean;
  /**
   * 배경색
   */
  backgroundColor?: 'mainPurple' | 'black';
  /**
   * 사이즈 설정
   */
  size?: 'medium' | 'full';
  /**
   * 버튼 속 텍스트
   */
  label: string;
  /**
   * 클릭 핸들러
   */
  onClick?: () => void;
}

/**
 * 버튼
 */
const Button: React.FC<Props> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
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
    default:
      throw new Error('not valid btn size!');
  }
  return (
    <button
      style={{ backgroundColor: 'var(--color-main-purple)' }}
      className={btnClassNames}
    >
      {label}
    </button>
  );
};

export default Button;
