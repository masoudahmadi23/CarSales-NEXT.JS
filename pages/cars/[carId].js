import { useRouter } from 'next/router';
//component templates
import CarDetails from '../../components/templates/CarDetails';
//data
import carsData from '../../data/carsData';

const CarDetail = () => {
    const router = useRouter();
    const { carId } = router.query;
    const carDetails = carsData[carId - 1];
    return (
        <div>
            <CarDetails {... carDetails} />
        </div>
    );
};

export default CarDetail;