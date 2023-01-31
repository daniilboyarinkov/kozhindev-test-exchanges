import { Outlet } from 'react-router-dom';

import { Header } from './shared';

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
