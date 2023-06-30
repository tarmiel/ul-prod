import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

export interface ISideBarItem {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItemsList: ISideBarItem[] = [
  {
    path: RoutePath.main,
    text: 'Main',
    icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: 'About',
    icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Profile',
    icon: ProfileIcon,
  },
];
