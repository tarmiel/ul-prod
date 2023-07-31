import { addCommentFormActions, addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFromSlice';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { HStack } from 'shared/ui/Stack';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import styles from './AddCommentForm.module.scss';

export interface IAddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const initialReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<IAddCommentFormProps> = ({ onSendComment, className }) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <HStack justify="between" align="center" max className={cn(styles.AddCommentForm, {}, [className])}>
        <Input
          className={styles.input}
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button theme="outline" onClick={onSendHandler}>
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
