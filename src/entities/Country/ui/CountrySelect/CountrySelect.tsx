import { FC, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';

import { Country } from '../../model/types/country';


interface ICountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];

const CountrySelect: FC<ICountrySelectProps> = ({ value, onChange, readonly }) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <ListBox
      onChange={onChangeHandler}
      value={value}
      defaultValue={t('Укажите страну')}
      label={t('Укажите страну')}
      items={options}
      readonly={readonly}
      direction="top right"
    />
  );
};

export default memo(CountrySelect);
