import React from 'react';
import SlideMenu from '../Menu/SlideMenu';
import styles from './SlideMenuTab.module.css';

type MenuData = {
  title: string;
  isChecked: boolean;
};

interface Props {
  menuDataArr: MenuData[];
}

const SlideMenuTab: React.FC<Props> = ({ menuDataArr }: Props) => {
  const handleClickMenu = () => {};
  return (
    <div className={styles.wrapper}>
      {menuDataArr.map((data) => (
        <SlideMenu
          text={data.title}
          isChecked={data.isChecked}
          onClickMenu={handleClickMenu}
        />
      ))}
    </div>
  );
};

export default SlideMenuTab;
