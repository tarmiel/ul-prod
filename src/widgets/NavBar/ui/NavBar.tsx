import React, { FC, useCallback, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './NavBar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
// =====
// import { getUserAuthData, userActions } from 'entities/User';
import { getUserAuthData } from './../../../entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { userActions } from './../../../entities/User/model/slice/userSlice';
// =====
import { useDispatch, useSelector } from 'react-redux';

interface INavBarProps {
  className?: string;
}

const NavBar: FC<INavBarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={cn(styles.NavBar, {}, [className])}>
        <Button theme="clearInverted" className={styles.links} onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={cn(styles.NavBar, {}, [className])}>
      <Button theme="clearInverted" className={styles.links} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
};

export default NavBar;
