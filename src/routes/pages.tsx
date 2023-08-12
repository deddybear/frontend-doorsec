import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/login/login-page";
import DashboardLayouts from "../layouts/dashboard/dashboard-layouts";
// import DashboardPage from "../pages/dashboard/dashboard-page";


const pages = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardLayouts />}>
                {/*dibawah ini masih error outlet*/}
                {/*<Route path='/' element={<DashboardPage />}/>*/}
            </Route>
        </Route>
        // <Route path="/login" element={}>
        //     <Route path="/dashboard"/>
        // </Route>
    )
);

export default pages