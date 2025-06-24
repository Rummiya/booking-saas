export default async function BusinessPage({
	params,
}: {
	params: { slug: string };
}) {
	return (
		<div className='container'>
			{/* Страница какого-либо бизнеса */}
			<h1>{params.slug}</h1>
		</div>
	);
}
