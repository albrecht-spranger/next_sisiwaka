import Link from 'next/link';
import Image from 'next/image';
import styles from './site_header.module.css';

export default function SiteHeader() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.header_left_block}>
                <Image src="/images/sisiwaka_touen_logo.jpg" alt="ロゴ" width={40} height={40} className={styles.sisiwaka_touen_icon} />
                <h1 className={styles.site_title}>シシワカ陶苑</h1>
            </Link>
            <div className={styles.header_right_block}>
                <a href="https://minne.com/@sisiwaka10en" target="_blank" rel="noreferrer" className={styles.minne_icon}>
                    <Image src="/images/minne_logo_vertical.png" alt="minne" width={80} height={30} />
                </a>
                <a href="https://www.instagram.com/albrecht1999/" target="_blank" rel="noreferrer" className={styles.instagram_icon}>
                    <Image src="/images/Instagram_Glyph_Gradient.png" alt="Instagram" width={30} height={30} />
                </a>
            </div>
        </header>
    );
}
