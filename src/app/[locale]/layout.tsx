import { Geist, Geist_Mono } from 'next/font/google';

import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { routing } from '@/shared/libs/i18n/routing';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { StoreProvider } from '@/shared/providers/store-provider';
import '@/shared/styles/globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

type Props = {
	children: ReactNode;
	params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
	const { locale } = await params;

	return {
		title: locale === 'ru' ? 'Букинг саас' : 'Booking SaaS',
	};
}
export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<main className='bg-accent-foreground min-h-screen'>
					<StoreProvider>
						<NextIntlClientProvider>{children}</NextIntlClientProvider>
					</StoreProvider>
				</main>
			</body>
		</html>
	);
}
