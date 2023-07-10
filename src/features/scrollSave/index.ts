export type { ScrollSaveSchema } from './model/types/scrollSaveSchema';

export { getSavedScrollByPath } from './model/selectors/saveScroll';
export { scrollSaveActions, scrollSaveReducer } from './model/slice/scrollSaveSlice';
