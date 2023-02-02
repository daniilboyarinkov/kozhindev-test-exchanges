import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import App from './App';
import { ErrorPage, IndexPage } from './routes';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/kozhindev-test-exchanges/"
            element={<App />}
            errorElement={<ErrorPage />}
        >
            <Route
                path="/kozhindev-test-exchanges/"
                element={<IndexPage />}
                errorElement={<ErrorPage />}
            />
            {/* other routes here... */}
        </Route>,
    ),
);
