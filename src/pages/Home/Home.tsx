import AddUser from "./Components/AddUser";
import Banner from "./Components/Banner";
import PointsClaim from "./Components/PointsClaim";

const Home = () => {
    return (
        <>
            <Banner />
            <PointsClaim />
            <AddUser />
        </>
    );
};

export default Home;