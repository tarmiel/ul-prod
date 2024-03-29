import React, { FC } from 'react';

import Page from '@/widgets/Page/Page';

import styles from './NotFoundPage.module.scss';

const NotFoundPage: FC = ({}) => {
  return (
    <Page data-testid={'NotFoundPage'} className={styles.NotFoundPage}>
      Page Not Found
    </Page>
  );
};

export default NotFoundPage;
