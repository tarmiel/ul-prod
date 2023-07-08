import React, { FC, memo } from 'react';
import styles from './Icon.module.scss';
import { cn } from 'shared/lib/classNames/classNames';

interface IIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const Icon: FC<IIconProps> = ({ Svg, className, ...otrProps }) => {
  return <Svg className={cn(styles.Icon, {}, [className])} {...otrProps} />;
};

export default memo(Icon);
