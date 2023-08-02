import React, { FC, ReactNode } from 'react';

import { useTheme } from '@/app/providers/ThemeProvider';
import { cn } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import { Portal } from '../Portal/Portal';

import styles from './Modal.module.scss';

interface IModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const ANIMATION_DELAY = 300;

const Modal: FC<IModalProps> = ({ children, isOpen, onClose }) => {
  const { theme } = useTheme();
  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });

  const contentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isMounted) return null;

  return (
    <Portal>
      <div className={cn(styles.Modal, { [styles.open]: isOpen, [styles.isClosing]: isClosing }, [theme, 'app_modal'])}>
        <div className={styles.overlay} onClick={close}>
          <div className={styles.content} onClick={contentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
