import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import App from './App';
import { ErrorPage, IndexPage } from './routes';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<ErrorPage />}>
            <Route
                path="/"
                element={<IndexPage />}
                errorElement={<ErrorPage />}
            />
            {/* other routes here... */}
        </Route>,
    ),
);
