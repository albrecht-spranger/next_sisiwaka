export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body>
				<header style={{ padding: 16 }}>
					<a href="/">Top</a> | <a href="/works">Works</a>
				</header>
				<main style={{ padding: 16 }}>{children}</main>
			</body>
		</html>
	);
}
