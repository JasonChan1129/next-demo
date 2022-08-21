import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function Post({ post }) {
	return (
		<div className={styles.container}>
			<h1>{post}</h1>
			<Link href="/">home</Link>
		</div>
	);
}

export async function getStaticProps({ params }) {
	const post = `This is post with id-${params.pid + 1}`;
	return {
		props: { post },
	};
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { pid: '1' } }],
		fallback: 'blocking',
	};
}
