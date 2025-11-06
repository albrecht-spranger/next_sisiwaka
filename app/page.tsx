import Link from "next/link";
import { fetch_latest_works } from "@/lib/works";

export default async function Page() {
	const latest_works = await fetch_latest_works(5);
	return (
		<>
			<h1>新着作品</h1>
			<ul>
				{latest_works.map(w => (
					<li key={w.id}>
						<Link href={`/works/${w.id}`}>{w.title}</Link>（{w.created_at}）
					</li>
				))}
			</ul>
			<p><Link href="/works">一覧を見る</Link></p>
		</>
	);
}
