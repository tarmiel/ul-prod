import { Suspense, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '@/entities/User';
import { getUserInited } from '@/entities/User';
import { cn } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';

import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback={<div>app loading...</div>}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
