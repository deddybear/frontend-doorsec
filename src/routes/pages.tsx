import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../App";

const pages = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}/>
        // <Route path="/login" element={}>
        //     <Route path="/dashboard"/>
        // </Route>
    )
);

export default pages