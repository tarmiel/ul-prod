import { memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import Card from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';

import { Notification } from '../../model/types/notification';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <Card theme="outlined" className={cn(cls.NotificationItem, {}, [className])}>
      <Text title={item.title}>{item.description}</Text>
    </Card>
  );

  if (item.href) {
    return (
      <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
};
