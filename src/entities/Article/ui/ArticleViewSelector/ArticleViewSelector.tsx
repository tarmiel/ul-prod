import React, { FC, memo } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { cn } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import Icon from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/types/article';
import styles from './ArticleViewSelector.module.scss';

interface IArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

interface ViewType {
  view: ArticleView;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const viewTypes: ViewType[] = [
  {
    view: 'small',
    icon: TiledIcon,
  },
  {
    view: 'big',
    icon: ListIcon,
  },
];

const ArticleViewSelector: FC<IArticleViewSelectorProps> = ({ view, onViewClick, className }) => {
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={cn(styles.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button key={viewType.view} onClick={onClick(viewType.view)}>
          <Icon Svg={viewType.icon} className={viewType.view !== view ? styles.notSelected : ''} />
        </Button>
      ))}
    </div>
  );
};

export default memo(ArticleViewSelector);
