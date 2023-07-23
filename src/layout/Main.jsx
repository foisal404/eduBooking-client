import Footer from "../shared/Footer";
import NavHead from "../shared/NavHead";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <NavHead/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;