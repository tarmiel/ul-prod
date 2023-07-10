import React, { FC, MutableRefObject, UIEvent, useRef } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './Page.module.scss';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSavedScrollByPath, scrollSaveActions } from 'features/scrollSave';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface IPageProps {
  className?: string;
  onScrollEnd?: () => void;
}

const Page: FC<IPageProps> = ({ children, onScrollEnd, className }) => {
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
    console.log(scroll, e.currentTarget.scrollTop);
    dispatch(scrollSaveActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }));
  }, 500);

  return (
    <section ref={wrapperRef} className={cn(styles.Page, {}, [className])} onScroll={onScrollHandler}>
      {children}
      <div ref={triggerRef}></div>
    </section>
  );
};

export default Page;
