import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Revalidate({ data }) {
	return (
		<div className={styles.container}>
			<h1>Static Generate with revalidate</h1>
			<h1>{`Current rate of bitcon is $${data.bpi.USD.rate}${data.bpi.USD.code}`}</h1>
			<p>{`last updated at ${data.time.updateduk}`}</p>
			<Link href="/">home</Link>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
	const data = await res.json();

	return {
		props: { data },
		revalidate: 60,
	};
}
