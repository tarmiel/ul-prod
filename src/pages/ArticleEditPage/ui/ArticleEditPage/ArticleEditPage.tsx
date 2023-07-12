import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';
import Page from 'widgets/Page/Page';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={cn(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? t('Редактирование статьи с ID = ') + id : t('Создание новой статьи')}
    </Page>
  );
};

export default memo(ArticleEditPage);
