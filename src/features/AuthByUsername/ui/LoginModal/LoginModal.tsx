import React, { FC } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

interface ILoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<ILoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
