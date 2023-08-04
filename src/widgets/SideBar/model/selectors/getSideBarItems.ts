import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router';

import { ISideBarItem } from '../types/sideBar';

export const getSideBarItems = createSelector(getUserAuthData, (user) => {
  const sideBarItems: ISideBarItem[] = [
    {
      path: getRouteMain(),
      text: 'Главная',
      icon: MainIcon,
    },
    {
      path: getRouteAbout(),
      text: 'О сайте',
      icon: AboutIcon,
    },
  ];

  if (user) {
    sideBarItems.push(
      {
        path: getRouteProfile(user.id),
        text: 'Профиль',
        icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'Статьи',
        icon: ArticleIcon,
        authOnly: true,
      }
    );
  }

  return sideBarItems;
});
