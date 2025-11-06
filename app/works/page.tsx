import Link from "next/link";
import { sample_works } from "@/lib/works";

export default async function WorksPage() {
	const works = sample_works;
	return (
		<>
			<h1>作品一覧</h1>
			<ul>
				{works.map(w => (
					<li key={w.id}>
						<Link href={`/works/${w.id}`}>{w.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
