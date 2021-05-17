import Head from 'next/head';

const Event = ({ event }) => {
	return (
		<div>
			<Head>
				<title>{event.name}</title>
			</Head>
			<h1>{event.name}</h1>
		</div>
	);
};

export default Event;

export const getStaticPaths = async () => {
	const res = await fetch(`${process.env.API_ENDPOINT}/events/all`);
	const data = await res.json();

	const paths = data.map((event) => {
		return {
			params: { id: event._id.toString() }
		};
	});
	return {
		paths: paths,
		fallback: false
	};
};

export async function getStaticProps(context) {
	const id = context.params.id;

	// Fetch individual event
	const res = await fetch(`${process.env.API_ENDPOINT}/events/${id}`);
	const data = await res.json();

	//Return the Event as props
	return {
		props: {
			event: data
		}
	};
}
