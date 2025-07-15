import AddUser from "./Components/AddUser";
import Banner from "./Components/Banner";
import FAQ from "./Components/FAQ";
import PointsClaim from "./Components/PointsClaim";

const Home = () => {
    return (
        <>
            <Banner />
            <PointsClaim />
            <AddUser />
            <FAQ/>
        </>
    );
};

export default Home;