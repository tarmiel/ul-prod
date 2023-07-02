import { cn } from 'shared/lib/classNames/classNames';
import { ChangeEvent, FC, memo, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface ISelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const Select: FC<ISelectProps> = ({ label, options, value, onChange, readonly, className }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={styles.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  return (
    <div className={cn(styles.Wrapper, {}, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select disabled={readonly} className={styles.select} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
};

export default memo(Select);
