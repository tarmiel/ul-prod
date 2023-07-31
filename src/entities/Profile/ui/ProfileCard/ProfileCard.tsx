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
import { HStack, VStack } from 'shared/ui/Stack';

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
      <VStack
        justify="center"
        align="center"
        max
        className={cn(styles.ProfileCard, { [styles.loading]: true }, [className])}
      >
        <Loader />
      </VStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" max className={cn(styles.ProfileCard, {}, [className, styles.error])}>
        <Text theme="error" title={t('Произошла ошибка при загрузке профиля')} align="center">
          {t('Попробуйте обновить страницу')}
        </Text>
      </HStack>
    );
  }

  return (
    <VStack gap="8" max className={cn(styles.ProfileCard, { [styles.editing]: !readOnly }, [className])}>
      {data?.avatar && (
        <HStack justify="center" max>
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        value={data?.firstname}
        placeholder={t('Ваше имя')}
        readOnly={readOnly}
        onChange={onChangeFirstName}
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        readOnly={readOnly}
        onChange={onChangeLastName}
        data-testid="ProfileCard.lastname"
      />
      <Input
        type="number"
        value={data?.age}
        placeholder={t('Ваш возраст')}
        onChange={onChangeAge}
        readOnly={readOnly}
      />
      <Input value={data?.city} placeholder={t('Город')} onChange={onChangeCity} readOnly={readOnly} />
      <Input
        value={data?.username}
        placeholder={t('Введите имя пользователя')}
        onChange={onChangeUsername}
        readOnly={readOnly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Введите ссылку на аватар')}
        onChange={onChangeAvatar}
        readOnly={readOnly}
      />
      <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readOnly} />
      <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readOnly} />
    </VStack>
  );
};
