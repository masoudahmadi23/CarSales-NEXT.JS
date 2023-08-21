import Link from 'next/link';
//css
import styles from './Categories.module.css';
//icon
import Sedan from '../icons/Sedan';
import Suv from '../icons/Suv';
import Sport from '../icons/Sport';
import Hatchback from '../icons/Hatchback';



function Categories() {
    return (
        <div className={styles.container}>
            <Link href='/categories/sedan'>
                <div>
                    <p>Sedan</p>
                    <Sedan />
                </div>     
            </Link>
            <Link href='/categories/suv'>
            <div>
                <p>Suv</p>
                <Suv />
            </div>
            </Link>
            <Link href='/categories/hatchback'>
                <div>
                    <p>Hatchback</p>
                    <Hatchback />
                </div>
            </Link>
            <Link href='/categories/sport'>
                <div>
                    <p>Sport</p>
                    <Sport />
                </div>
            </Link>
        </div>
    );
}

export default Categories;