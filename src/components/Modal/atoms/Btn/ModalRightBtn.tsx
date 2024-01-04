import React from 'react';
import Button from '../../../Button/Button';

interface Props {
  label: string;
  onClick: () => void;
}

const ModalRightBtn: React.FC<Props> = ({ label, onClick }: Props) => {
  return (
    <Button
      label={label}
      size='medium'
      backgroundColor='main-purple'
      textColor='white'
      borderRadius='medium'
      onClick={onClick}
    />
  );
};

export default ModalRightBtn;
