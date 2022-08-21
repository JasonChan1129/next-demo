import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';

export default function RateSSR({ data }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('run useEffect');
		setInterval(() => {
			setCount(prevCount => prevCount + 1);
		}, 2000);

		return clearInterval();
	}, []);

	return (
		<div className={styles.container}>
			<h1>Server side render</h1>
			<h1>{`Current rate of bitcon is $${data.bpi.USD.rate}${data.bpi.USD.code}`}</h1>
			<p>{`last updated at ${data.time.updateduk}`}</p>
			<p>{`Count: ${count}`}</p>
			<Link href="/">home</Link>
		</div>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
	const data = await res.json();
	const cookies = getCookie('yummy', context);
	console.log(cookies);
	return {
		props: { data },
	};
}
