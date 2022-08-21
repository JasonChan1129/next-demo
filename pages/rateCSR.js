import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RateCSR() {
	const [rate, setRate] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
			const data = await res.json();
			setRate(data);
			setIsLoading(false);
			return data;
		}
		fetchData();
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!rate) return <p>No data...</p>;

	return (
		<div className={styles.container}>
			<h1>Client side rendering</h1>
			<h1>{`Current rate of bitcon is $${rate.bpi.USD.rate}${rate.bpi.USD.code}`}</h1>
			<p>{`last updated at ${rate.time.updateduk}`}</p>
			<Link href="/">home</Link>
		</div>
	);
}
