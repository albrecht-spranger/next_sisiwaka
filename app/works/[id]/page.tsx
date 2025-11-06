// app/works/[id]/page.tsx
import { fetch_work_by_id } from "@/lib/works";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function WorkDetailPage({ params }: Props) {
	const { id } = await params;                // ← ここで await
	const work = await fetch_work_by_id(id);
	if (!work) return <p>作品が見つかりませんでした。</p>;
	return (
		<>
			<h1>{work.title}</h1>
			<img src={work.image_url} alt={work.title} width={320} />
			<p>作成日: {work.created_at}</p>
			<p><Link href={`/works/${work.id}/edit`}>この作品を編集</Link></p>
		</>
	);
}
