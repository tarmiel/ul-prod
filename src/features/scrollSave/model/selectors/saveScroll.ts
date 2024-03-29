import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

export const getSavedScroll = (state: StateSchema) => state.scrollSave.scroll;

export const getSavedScrollByPath = createSelector(
  getSavedScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
