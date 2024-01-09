// MenuGridItem.tsx
import React from 'react';
import { colors } from '../../styles/colors';
import styles from './MenuGridItem.module.css';

interface MenuData {
  Title: string;
  Sub: string;
  Image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface MenuGridItemProps {
  value: MenuData;
  onClick: () => void;
}

const MenuGridItem: React.FC<MenuGridItemProps> = ({ value, onClick }) => {
  const Icon = value.Image;
  return (
    <div className={styles.menu_grid_item} onClick={onClick}>
      <div className={styles.menu_txt}>
        <div className={styles.menu_title}>{value.Title}</div>
        <div className={styles.menu_sub_title}>{value.Sub}</div>
      </div>
      <Icon
        width='32'
        height='32'
        fill={colors.subPurpleLight}
        className={styles.menu_icon}
      />
    </div>
  );
};

export default MenuGridItem;
