import React from 'react';
import MyBadgeText from '../Text/Badge/MyBadgeText';
import MyQuickMenuTitleText from '../Text/QuickMenuTitle/MyQuickMenuTitleText';
import styles from './MyQuickMenu.module.css';

interface Props {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  titleText: string;
  num: number;
  onClick: () => void;
}

const MyQuickMenu: React.FC<Props> = ({ Icon, titleText, num, onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <Icon width={24} height={24} />
      <MyQuickMenuTitleText text={titleText} />
      {num > 0 && (
        <div className={styles.badge}>
          <MyBadgeText text={`${num}`} />
        </div>
      )}
    </div>
  );
};

export default MyQuickMenu;
