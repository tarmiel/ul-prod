import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';
import { Text } from 'shared/ui/Text/Text';

const LoginForm: FC = ({}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={styles.LoginForm}>
      <Text title={t('Форма авторизации')} />
      {error && <Text theme="error">{error}</Text>}
      <Input
        autofocus
        type="text"
        className={styles.input}
        placeholder={t('Введите username')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="password"
        className={styles.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button theme={'outline'} className={styles.loginBtn} onClick={onLogin} disabled={isLoading}>
        {t('Войти')}
      </Button>
    </div>
  );
};

export default LoginForm;
