import React, { FC } from 'react';
import styles from './NotFoundPage.module.scss';
import Page from 'shared/ui/Page/Page';

const NotFoundPage: FC = ({}) => {
  return <Page className={styles.NotFoundPage}>Page Not Found</Page>;
};

export default NotFoundPage;
