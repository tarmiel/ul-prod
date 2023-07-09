import React, { FC, MutableRefObject, useRef } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './Page.module.scss';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface IPageProps {
  className?: string;
  onScrollEnd?: () => void;
}

const Page: FC<IPageProps> = ({ children, onScrollEnd, className }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={cn(styles.Page, {}, [className])}>
      {children}
      <div ref={triggerRef}></div>
    </section>
  );
};

export default Page;
