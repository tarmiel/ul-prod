import React, { FC } from 'react';
import styles from './PageLoader.module.scss';
import Loader from 'shared/ui/Loader/Loader';

const PageLoader: FC = ({}) => {
  return (
    <div className={styles.PageLoader}>
      <Loader />
    </div>
  );
};

export default PageLoader;
