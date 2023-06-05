import { NavBar } from 'widgets/NavBar';
import { AppRouter } from './providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { SideBar } from 'widgets/SideBar';
import { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback={<div>app loading...</div>}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
