import React from 'react';
import styles from './CheckFilterWithXBtn.module.css';
import { ReactComponent as UndoCenterRegular } from '../../../assets/icon/undoCenterRegular.svg';
import { colors } from '../../../styles/colors';
type Color =
  | 'main-purple'
  | 'black'
  | 'white'
  | 'navy'
  | 'grey'
  | 'sub-gradation'
  | 'bg-purple-light'
  | 'sub-purple-light';

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
   * arrow down icon 색깔
   */
  arrowColor?: string;
  /**
   * Border 색깔, 값 존재하지않을시 border none 처리됨
   */
  borderColor?: Color;
  /**
   * Border 두께, px기준이며 color와 함께 존재하지 않을시 border none처리됨
   */
  border?: number;

  /**
   * 컨텐트 클릭 핸들러
   */
  onClickContent: () => void;

  /**
   *  x 버튼 클릭 핸들러
   */
  onClickXBtn: () => void;
}

const CheckFilterWithXBtn: React.FC<Props> = ({
  label,
  isChecked = false,
  backgroundColor = 'bg-purple-light',
  textColor = 'navy',
  checkedBackgroundColor = 'main-purple',
  checkedTextColor = 'white',
  arrowColor = colors.subPurpleLight,
  borderColor,
  border,
  onClickContent = () => {},
  onClickXBtn = () => {},
}: Props) => {
  return (
    <div
      className={styles.wholeWrapper}
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
      <button className={styles.btn} onClick={onClickContent}>
        {label}
      </button>
      <div className={styles.iconWrapper} onClick={onClickXBtn}>
        <UndoCenterRegular width={16} height={16} stroke={arrowColor} />
      </div>
    </div>
  );
};

export default CheckFilterWithXBtn;
