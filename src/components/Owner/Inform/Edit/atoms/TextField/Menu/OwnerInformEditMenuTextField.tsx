import React from 'react';
import ModalBasic from '../../../../../../Modal/atoms/Basic/ModalBasic';
import TextFieldTopBar from '../../../../../../TextField/atoms/TopBar/TextFieldTopBar';
import OwnerInformEditMenuMoreImgBtn from '../../Btns/MenuMoreImg/OwnerInformEditMenuMoreImgBtn';
import OwnerInformEditMenuImgWithXBadge from '../../Img/MenuWithXBadge/OwnerInformEditMenuImgWithXBadge';
import styles from './OwnerInformEditMenuTextField.module.css';
// TODO: 나중에 클릭했을때 모달창으로 textfield 뜨는거 구현하고 x버튼이랑 체크 버튼 누를때 어떻게 되는지
// 물어보고 적용하기
interface Props {
  onClickCheckBtn: () => void;
  onClickXBtn: () => void;
  name: string;
  price: number;
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OwnerInformEditMenuTextField: React.FC<Props> = ({
  onClickCheckBtn,
  onClickXBtn,
  name,
  price,
  handleChangeName,
  handleChangePrice,
}: Props) => {
  return (
    <ModalBasic>
      <TextFieldTopBar
        onClickCheckBtn={onClickCheckBtn}
        onClickXBtn={onClickXBtn}
      />
      <div className={styles.wrapper}>
        <input
          type='text'
          className={styles.input}
          value={name}
          onChange={handleChangeName}
          placeholder='메뉴명을 입력하세요.'
        />
        <input
          type='number'
          className={styles.input}
          value={price}
          onChange={handleChangePrice}
          placeholder='가격을 입력하세요.'
        />
        <div className={styles.imgsWrapper}>
          <OwnerInformEditMenuMoreImgBtn onClick={() => {}} />
          <OwnerInformEditMenuImgWithXBadge onClickXBtn={() => {}} />
        </div>
      </div>
    </ModalBasic>
  );
};

export default OwnerInformEditMenuTextField;
