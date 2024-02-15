import React, { useState } from 'react';
import { OwnerStoreMenuData } from '../../../../../../../store/Type/Owner/owner';
import OwnerInformSecTitleText from '../../../../atoms/Texts/SecTitle/OwnerInformSecTitleText';
import OwnerInformEditMoreBtn from '../../Btns/More/OwnerInformEditMoreBtn';
import OwnerInformEditInform from '../../Inform/OwnerInformEditInform';
import OwnerInformEditMenu from '../../Menu/OwnerInformEditMenu';
import OwnerInformEditMenuTextField from '../../TextField/Menu/OwnerInformEditMenuTextField';
import styles from './OwnerInformEditMenuContent.module.css';

interface Props {
  menuArr: OwnerStoreMenuData[];
  handleAddMenu: (newMenu: OwnerStoreMenuData) => void;
  handleDeleteMenu: (index: number) => void;
}

const OwnerInformEditMenuContent: React.FC<Props> = ({
  menuArr,
  handleAddMenu,
  handleDeleteMenu,
}: Props) => {
  const [isShowTextField, setIsshowTextField] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text='메뉴' />
      <OwnerInformEditInform text='메뉴 카드를 눌러서 수정할 수 있어요.' />
      <div className={styles.menusWrapper}>
        {menuArr.map((data, index) => (
          <OwnerInformEditMenu
            key={data.name + index}
            name={data.name}
            price={data.price}
            onClickMenuXBtn={() => {}}
            onClickXBtn={() => handleDeleteMenu(index)}
          />
        ))}
        <OwnerInformEditMoreBtn
          bodyText='메뉴 추가하기'
          onClick={() => setIsshowTextField(true)}
        />
      </div>
      {isShowTextField && (
        <OwnerInformEditMenuTextField
          name={name}
          price={price}
          handleChangeName={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          handleChangePrice={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrice(parseInt(e.target.value))
          }
          onClickCheckBtn={() => {
            if (name && price) {
              handleAddMenu({ name, price, imageUrl: '' });
              setIsshowTextField(false);
            }
          }}
          onClickXBtn={() => setIsshowTextField(false)}
        />
      )}
    </div>
  );
};

export default OwnerInformEditMenuContent;
