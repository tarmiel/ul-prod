import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getSavedScrollByPath, scrollSaveActions } from '@/features/scrollSave';
import { cn } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { TestProps } from '@/shared/types/tests';

import styles from './Page.module.scss';

interface IPageProps extends TestProps {
  className?: string;
  onScrollEnd?: () => void;
  children?: ReactNode;
}

const Page: FC<IPageProps> = ({ children, onScrollEnd, className, ...props }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getSavedScrollByPath(state, pathname));

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }));
  }, 500);

  return (
    <main
      data-testid={props['data-testid'] ?? 'Page'}
      ref={wrapperRef}
      className={cn(styles.Page, {}, [className])}
      onScroll={onScrollHandler}
    >
      {children}
      {onScrollEnd ? <div className={styles.trigger} ref={triggerRef}></div> : null}
    </main>
  );
};

export default Page;
