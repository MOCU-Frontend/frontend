import React from 'react';
import { colors } from '../../../styles/colors';
import Button from '../Button';
import styles from './TextBadgeBtn.module.css';

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
  /**
   * badgeText
   */
  badgeText: string;
  /**
   * badgeBackgroundColor
   */
  badgeBackgroundColor?: string;
  /**
   * badgeTextColor
   */
  badgeTextColor?: string;
}

const TextBadgeBtn: React.FC<Props> = ({
  backgroundColor = 'main-purple',
  textColor = 'white',
  label,
  borderColor,
  size = 'medium',
  border,
  disabled = false,
  disabledBackgroundColor = 'grey',
  disabledTextColor = 'white',
  disabledBorderColor = 'grey',
  borderRadius = 'medium',
  onClick = () => {},
  badgeText,
  badgeBackgroundColor = colors.pointYellow,
  badgeTextColor = colors.white,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <Button
        label={label}
        size={size}
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
      <div
        className={styles.badge}
        style={{ backgroundColor: badgeBackgroundColor, color: badgeTextColor }}
      >
        {badgeText}
      </div>
    </div>
  );
};

export default TextBadgeBtn;
