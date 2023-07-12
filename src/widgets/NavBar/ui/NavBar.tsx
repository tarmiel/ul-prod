import React, { FC, memo, useCallback, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './NavBar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

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
      <header className={cn(styles.NavBar, {}, [className])}>
        <Text title={t('Some App')} theme="inverted" />
        <AppLink to={RoutePath.article_create} theme="secondary" className={styles.createBtn}>
          {t('Создать статью')}
        </AppLink>
        <Button theme="clearInverted" className={styles.links} onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={cn(styles.NavBar, {}, [className])}>
      <Button theme="clearInverted" className={styles.links} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
};

export default memo(NavBar);
