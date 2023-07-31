import React, { FC, memo, useCallback, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './NavBar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface INavBarProps {
  className?: string;
}

const NavBar: FC<INavBarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
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

  const isAdminPanel = isAdmin || isManager;

  if (authData) {
    return (
      <header className={cn(styles.NavBar, {}, [className])}>
        <Text title={t('Some App')} theme="inverted" />
        <AppLink to={RoutePath.article_create} theme="secondary" className={styles.createBtn}>
          {t('Создать статью')}
        </AppLink>
        <Dropdown
          direction="bottom left"
          className={styles.dropdown}
          items={[
            ...(isAdminPanel
              ? [
                {
                  content: t('Админка'),
                  href: RoutePath.admin_panel,
                },
              ]
              : []),
            {
              content: t('Профиль'),
              href: RoutePath.profile + authData.id,
            },
            {
              content: t('Выйти'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
      </header>
    );
  }

  return (
    <header className={cn(styles.NavBar, {}, [className])}>
      <Text title={t('Some App')} theme="inverted" />
      <Button theme="clearInverted" className={styles.links} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
};

export default memo(NavBar);
