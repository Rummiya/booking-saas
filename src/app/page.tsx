import { redirect } from '@/shared/i18n/navigation';
import { Locale } from 'next-intl';

type Props = {
	params: Promise<{ locale: Locale }>;
};

export default async function RootPage({ params }: Props) {
	const { locale } = await params;

	return redirect({ href: '/', locale: locale });
}
