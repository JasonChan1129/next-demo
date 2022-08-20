import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>This is the index page</h1>
			<p>
				<Link href="/setting">Go to setting</Link>
			</p>
			<p>
				<Link href="/rateSSR">Server side rendering</Link>
			</p>
			<p>
				<Link href="/rateSG">Static generate</Link>
			</p>
			<p>
				<Link href="/rateCSR">Client side rendering</Link>
			</p>
		</div>
	);
}
