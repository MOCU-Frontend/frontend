import React, { useState } from 'react';
import OwnerInformSecTitleText from '../../../../atoms/Texts/SecTitle/OwnerInformSecTitleText';
import OwnerInformEditMoreBtn from '../../Btns/More/OwnerInformEditMoreBtn';
import OwnerInformEditInform from '../../Inform/OwnerInformEditInform';
import OwnerInformEditMenu from '../../Menu/OwnerInformEditMenu';
import OwnerInformEditMenuTextField from '../../TextField/Menu/OwnerInformEditMenuTextField';
import styles from './OwnerInformEditMenuContent.module.css';
type Menu = {
  name: string;
  price: number;
};
interface Props {
  menuArr: Menu[];
}

const OwnerInformEditMenuContent: React.FC<Props> = ({ menuArr }: Props) => {
  const [isShowTextField, setIsshowTextField] = useState(false);
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
            onClickXBtn={() => {}}
          />
        ))}
        <OwnerInformEditMoreBtn bodyText='메뉴 추가하기' onClick={() => {}} />
      </div>
      {isShowTextField && (
        <OwnerInformEditMenuTextField
          name=''
          price=''
          handleChangeName={(e: React.ChangeEvent<HTMLInputElement>) => {}}
          handleChangePrice={(e: React.ChangeEvent<HTMLInputElement>) => {}}
          onClickCheckBtn={() => setIsshowTextField(false)}
          onClickXBtn={() => setIsshowTextField(false)}
        />
      )}
    </div>
  );
};

export default OwnerInformEditMenuContent;
