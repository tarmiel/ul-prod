import { FC, Suspense } from 'react';
import Loader from 'shared/ui/Loader/Loader';
import Modal from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface ILoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<ILoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};

export default LoginModal;
