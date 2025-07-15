import AddUser from "./Components/AddUser";
import Banner from "./Components/Banner";
import FAQ from "./Components/FAQ";
import Features from "./Components/Features";
import PointsClaim from "./Components/PointsClaim";

const Home = () => {
    return (
        <>
            <Banner />
            <Features/>
            <PointsClaim />
            <AddUser />
            <FAQ/>
        </>
    );
};

export default Home;