import React from 'react';
import OwnerInformMenuSubText from '../../Texts/MenuSub/OwnerInformMenuSubText';
import OwnerInformMenuTitleText from '../../Texts/MenuTitle/OwnerInformMenuTitleText';
import OwnerInformSecTitleText from '../../Texts/SecTitle/OwnerInformSecTitleText';
import styles from './OwnerInformMenuSecContent.module.css';
type MenuItem = {
  name: string;
  price: number;
};
interface Props {
  title: string;
  menuItemArr: MenuItem[];
}

const OwnerInformMenuSecContent: React.FC<Props> = ({
  title,
  menuItemArr,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text={title} />
      <div className={styles.bodyWholeWrapper}>
        {menuItemArr.map((data, index) => (
          <div className={styles.bodyWrapper} key={data.name + index}>
            <OwnerInformMenuTitleText text={data.name} />
            <OwnerInformMenuSubText text={`${data.price}원`} />
            <div className={styles.menuDummyImg}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerInformMenuSecContent;
