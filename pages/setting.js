import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div className={styles.container}>
			<h1>This is the setting page</h1>
			<Link href="/">back</Link>
		</div>
	);
}
