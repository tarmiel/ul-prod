import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import Input from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import Loader from 'shared/ui/Loader/Loader';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  onChangeLastName?: (value?: string) => void;
  onChangeFirstName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
  data,
  error,
  isLoading,
  readOnly,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency,
  className,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={cn(styles.ProfileCard, { [styles.loading]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(styles.ProfileCard, {}, [className, styles.error])}>
        <Text theme="error" title={t('Произошла ошибка при загрузке профиля')} align="center">
          {t('Попробуйте обновить страницу')}
        </Text>
      </div>
    );
  }

  return (
    <div className={cn(styles.ProfileCard, { [styles.editing]: !readOnly }, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          value={data?.firstname}
          placeholder={t('Ваше имя')}
          className={styles.input}
          readOnly={readOnly}
          onChange={onChangeFirstName}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={styles.input}
          readOnly={readOnly}
          onChange={onChangeLastName}
        />
        <Input
          type="number"
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={styles.input}
          onChange={onChangeAge}
          readOnly={readOnly}
        />
        <Input
          value={data?.city}
          placeholder={t('Город')}
          className={styles.input}
          onChange={onChangeCity}
          readOnly={readOnly}
        />
        <Input
          value={data?.username}
          placeholder={t('Введите имя пользователя')}
          className={styles.input}
          onChange={onChangeUsername}
          readOnly={readOnly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
          className={styles.input}
          onChange={onChangeAvatar}
          readOnly={readOnly}
        />
        <CurrencySelect
          className={styles.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readOnly}
        />
        <CountrySelect className={styles.input} value={data?.country} onChange={onChangeCountry} readonly={readOnly} />
      </div>
    </div>
  );
};
