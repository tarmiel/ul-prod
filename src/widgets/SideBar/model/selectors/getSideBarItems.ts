import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { ISideBarItem } from '../types/sideBar';

export const getSideBarItems = createSelector(getUserAuthData, (user) => {
  const sideBarItems: ISideBarItem[] = [
    {
      path: RoutePath.main,
      text: 'Главная',
      icon: MainIcon,
    },
    {
      path: RoutePath.about,
      text: 'О сайте',
      icon: AboutIcon,
    },
  ];

  if (user) {
    sideBarItems.push(
      {
        path: RoutePath.profile + user.id,
        text: 'Профиль',
        icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'Статьи',
        icon: ArticleIcon,
        authOnly: true,
      }
    );
  }

  return sideBarItems;
});
