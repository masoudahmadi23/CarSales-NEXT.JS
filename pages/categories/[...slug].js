import { useRouter } from 'next/router';
//components templates
import CarsList from '../../components/templates/CarsList';
//data
import carsData from '../../data/carsData';


const CarsCategori = () => {
    const router = useRouter();
    const category = router.query.slug || [];
    const fliterCategori = carsData.filter((car) => car.category == category );
    return (
        <div>
            <CarsList data={fliterCategori} />
        </div>
    );
};

export default CarsCategori;