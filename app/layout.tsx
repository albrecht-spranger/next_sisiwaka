// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import {
	Hina_Mincho,
	M_PLUS_2,
	Zen_Antique,
	Dela_Gothic_One,
} from 'next/font/google';

// 変数名はスネークケースで
const font_hina_mincho = Hina_Mincho({
	weight: '400',
	subsets: ['japanese'],
	display: 'swap',
	variable: '--font-hina-mincho',
});

const font_m_plus_2 = M_PLUS_2({
	weight: ['400', '700'], // 必要分だけ
	subsets: ['japanese'],
	display: 'swap',
	variable: '--font-m-plus-2',
});

const font_zen_antique = Zen_Antique({
	weight: '400',
	subsets: ['japanese'],
	display: 'swap',
	variable: '--font-zen-antique',
});

const font_dela_gothic_one = Dela_Gothic_One({
	weight: '400',
	subsets: ['japanese'],
	display: 'swap',
	variable: '--font-dela-gothic-one',
});

export const metadata: Metadata = {
	title: 'シシワカ陶苑',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="ja"
			className={[
				font_hina_mincho.variable,
				font_m_plus_2.variable,
				font_zen_antique.variable,
				font_dela_gothic_one.variable,
			].join(' ')}
		>
			<body className="font-base">{children}</body>
		</html>
	);
}
