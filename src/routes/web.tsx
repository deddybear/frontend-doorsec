import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/login/login-page";
import DashboardLayouts from "../layouts/dashboard/dashboard-layouts";
import DashboardPage from "../pages/dashboard/dashboard-page";
import BuyStockPage from "../pages/buy-stock/buy-stock-page";
import ReportSellingPage from "../pages/report-selling/report-selling-page";
import ReportBuyingPage from "../pages/report-buying/report-buying-page";
// import DashboardPage from "../web/dashboard/dashboard-page";


const web = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardLayouts />}>
                <Route path='' element={<DashboardPage />}/>
                <Route path='/dashboard/stock' element={<BuyStockPage />} />
                <Route path='/dashboard/report-selling' element={<ReportSellingPage />} />
                <Route path='/dashboard/report-buying' element={<ReportBuyingPage />} />
            </Route>
        </Route>
        // <Route path="/login" element={}>
        //     <Route path="/dashboard"/>
        // </Route>
    )
);

export default web