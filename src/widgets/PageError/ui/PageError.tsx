import { useTranslation } from 'react-i18next';

import { cn } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={cn(cls.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage} theme="outline">
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
