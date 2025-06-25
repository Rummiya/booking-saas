import { Button } from '@/shared/ui/button';
import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('home');

	return (
		<div>
			<h1>{t('title')}</h1>
			<Button variant={'outline'}>Зарегистрироваться</Button>
		</div>
	);
}
