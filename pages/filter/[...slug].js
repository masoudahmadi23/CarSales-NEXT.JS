import { useRouter } from "next/router";
//component template
import CarsList from '../../components/templates/CarsList';
//data
import carsData from "../../data/carsData";

const FilterCars = () => {
    const router = useRouter();
    const [min, max] = router.query.slug || [];
    const filterData = carsData.filter((item) => item.price > min && item.price < max);

    if(!filterData) return <h3>Page Not Found</h3>;
    return <CarsList data={filterData} />;

};

export default FilterCars;