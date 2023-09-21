import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import localforage from "localforage";


const Home = () => {
    const navigation =useNavigation();
    const location =useLocation();
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading"?
                <p>Loading...</p>:
                <Outlet></Outlet>
            }
          
            <Footer></Footer>
        </div>
    );
};

export default Home;