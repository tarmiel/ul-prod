import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export interface ISideBarItem {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SideBarItemsList: ISideBarItem[] = [
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
  {
    path: RoutePath.profile,
    text: 'Профиль',
    icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'Статьи',
    icon: ArticleIcon,
    authOnly: true,
  },
];
