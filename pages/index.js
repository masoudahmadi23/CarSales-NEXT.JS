//components templates
import CarsPage from "../components/templates/CarsPage";
//components module
import Categories from "../components/module/Categories";
import SearchBar from "../components/module/SearchBar";
import AllButton from "../components/module/AllButton";
//data
import carsData from '../data/carsData'


function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
        <SearchBar />
        <Categories />
        <AllButton />
        <CarsPage data={cars} />
    </div>
  )
};

export default Home;