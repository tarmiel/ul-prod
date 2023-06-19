import React, { FC, useCallback, useEffect } from 'react';
import styles from './Modal.module.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface IModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal: FC<IModalProps> = ({ children, isOpen, onClose }) => {
  const { theme } = useTheme();
  const closeHandler = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  const contentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={cn(styles.Modal, { [styles.open]: isOpen }, [theme, 'app_modal'])}>
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.content} onClick={contentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
