//components templates
import CarsPage from "../../components/templates/CarsPage";
//components module
import Categories from "../../components/module/Categories";
import SearchBar from "../../components/module/SearchBar";
//data
import carsData from '../../data/carsData'

const index = () => {
    return (
        <div>
            <SearchBar />
            <Categories />
            <CarsPage data={carsData} />
        </div>
    );
};

export default index;