import { useRouter } from 'next/router';
//components module
import Card from '../module/Card';
//css
import styles from './CarsList.module.css';
//icon
import Back from '../icons/Back';

const CarsList = ({data}) => {
    const router = useRouter();
    const backHandler = () => {
        router.back();
    }
    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={backHandler}>
                <Back />
                <p>Back</p>
            </div>
            <div className={styles.cards}>
                {
                    data.map((item) => (<Card key={item.id} { ... item} />))
                }
            </div>
        </div>
    );
};

export default CarsList;