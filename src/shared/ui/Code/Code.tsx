import { FC, memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { cn } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from './Code.module.scss';

interface ICodeProps {
  className?: string;
  text: string;
}

const Code: FC<ICodeProps> = ({ text, className }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cn(styles.Code, {}, [className])}>
      <Button onClick={onCopy} className={styles.copyBtn} theme="clear">
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};

export default memo(Code);
