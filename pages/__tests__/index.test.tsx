import { render } from '@testing-library/react';
import { FetchState } from '../../lib/types';
import * as customHooks from '../../lib/custom-hooks';
import Home from '../index.page';

jest.useFakeTimers();

describe('<Home />', () => {
  const renderComponent = () => render(<Home />);

  it('should render without errors', () => {
    jest
      .spyOn(customHooks, 'useGetEntries')
      .mockReturnValue([FetchState.SUCCESS, [], true, jest.fn()]);

    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });
});
