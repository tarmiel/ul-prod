import SideBar from './SideBar';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('SideBar', () => {
  test('render SideBar', () => {
    renderWithTranslation(<SideBar />);
    expect(screen.queryByTestId('sidebar'));
  });

  test('test collapse', () => {
    renderWithTranslation(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    screen.debug();
  });
});
