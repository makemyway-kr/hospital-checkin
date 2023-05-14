import { Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
const Router = () => {
    return (
        <Routes>
            <Route path='/' Component={FrontPage}></Route>
        </Routes>
    )
};

export default Router;