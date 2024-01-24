import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderXBtn from '../../../../components/HeaderBackBtn/HeaderXBtn/HeaderXBtn';
import styles from './OwnerInformEdit.module.css';

const OwnerInformEdit: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderXBtn
        headerTitle='가게 정보 수정'
        onClickXBtn={() => navigate(-1)}
      ></HeaderXBtn>
    </div>
  );
};

export default OwnerInformEdit;
