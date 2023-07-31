import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher: FC<ILangSwitcherProps> = ({ className, short, ...otrProps }) => {
  const { t, i18n } = useTranslation();

  const onToggle = async () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

  return (
    <Button theme="clearInverted" onClick={onToggle} className={cn(styles.LangSwitcher, {}, [className])} {...otrProps}>
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};

export default LangSwitcher;
