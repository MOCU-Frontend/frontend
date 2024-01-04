import React from 'react';
import Button from '../Button';
import styles from './FullBtn.module.css';
type Color =
  | 'main-purple'
  | 'black'
  | 'white'
  | 'navy'
  | 'grey'
  | 'sub-gradation';

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

const FullBtn: React.FC<Props> = ({
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
  onClick = () => {},
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <Button
        label={label}
        size='full'
        backgroundColor={backgroundColor}
        textColor={textColor}
        borderColor={borderColor ? borderColor : undefined}
        border={border ? border : undefined}
        disabled={disabled}
        disabledBackgroundColor={disabledBackgroundColor}
        disabledTextColor={disabledTextColor}
        disabledBorderColor={disabledBorderColor}
        borderRadius={borderRadius}
        onClick={onClick}
      />
    </div>
  );
};

export default FullBtn;
