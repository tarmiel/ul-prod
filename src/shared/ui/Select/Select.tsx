import { cn } from 'shared/lib/classNames/classNames';
import { ChangeEvent, FC, memo, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption<T> {
  value: T;
  content: string;
}

interface ISelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

const Select = <T extends string>({ label, options, value, onChange, readonly, className }: ISelectProps<T>) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
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

export default Select;
