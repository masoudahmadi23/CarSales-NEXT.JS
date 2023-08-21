import Link from 'next/link';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                <Link href='/'>
                    <h2>Sale Cars</h2>
                    <p>Choose an Buy Your Car</p>
                </Link>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                Next.js Courses | SaleCars Project &copy;
            </footer>
        </>
    );
};

export default Layout;