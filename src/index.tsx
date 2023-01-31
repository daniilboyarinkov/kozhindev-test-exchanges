import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from './app/store';
import { router } from './router';

import './style/index.scss';

// it is guarantied that there is always a root container in index.html
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
);
