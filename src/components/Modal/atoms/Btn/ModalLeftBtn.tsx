import React from 'react';
import Button from '../../../Button/Button';

interface Props {
  label: string;
  onClick: () => void;
}

const ModalLeftBtn: React.FC<Props> = ({ label, onClick }: Props) => {
  return (
    <Button
      label={label}
      size='medium'
      backgroundColor='white'
      textColor='main-purple'
      borderColor='main-purple'
      borderRadius='medium'
      border={1}
      onClick={onClick}
    />
  );
};

export default ModalLeftBtn;
