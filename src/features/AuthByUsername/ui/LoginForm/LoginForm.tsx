import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export interface ILoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const LoginForm: FC<ILoginFormProps> = ({ onSuccess, className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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

  const onLogin = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={cn(styles.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} className={styles.title} />
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
    </DynamicModuleLoader>
  );
};

export default LoginForm;
