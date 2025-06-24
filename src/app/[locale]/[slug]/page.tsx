export default async function BusinessPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	return (
		<div className='container'>
			{/* Страница какого-либо бизнеса */}
			<h1>{slug}</h1>
		</div>
	);
}
