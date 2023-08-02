import React, { FC, memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './Icon.module.scss';

interface IIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

const Icon: FC<IIconProps> = ({ Svg, className, inverted, ...otrProps }) => {
  return <Svg className={cn(styles.Icon, { [styles.inverted]: inverted }, [className])} {...otrProps} />;
};

export default memo(Icon);
