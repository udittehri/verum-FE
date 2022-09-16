import React from "react";
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";
import Home from './Pages/Home'
import BlockChainTokens from "./Pages/BlockChainTokens";

const App = () => {
    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/:blockchainId", element: <BlockChainTokens /> },
    ]);
    return routes;
};

const NavRoutes = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default NavRoutes;