import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<ILangSwitcherProps> = ({ className, ...otrProps }) => {
  const { t, i18n } = useTranslation();

  const onToggle = async () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

  return (
    <Button onClick={onToggle} className={cn(styles.LangSwitcher, {}, [className])}>
      {t('Язык')}
    </Button>
  );
};

export default LangSwitcher;
