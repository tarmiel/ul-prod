const interfaceConst = 'interface';

module.exports = (componentName) => `import React, { FC } from 'react'
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './${componentName}.module.scss';

${interfaceConst} I${componentName}Props {
  className?: string;
}

export const ${componentName}: FC<I${componentName}Props> = ({className}) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.${componentName}, {}, [className])}></div>
  );
};`;
