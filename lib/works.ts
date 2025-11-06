// lib/works.ts
export type Work = {
	id: string;
	title: string;
	image_url: string;
	created_at: string;
};

export const sample_works: Work[] = [
	{ id: "1", title: "粉引きマグ", image_url: "/mug.jpg", created_at: "2025-01-01" },
	{ id: "2", title: "花器 柿釉", image_url: "/vase.jpg", created_at: "2025-01-10" }
];

export async function fetch_latest_works(limit_count: number = 5) {
	return sample_works.slice(0, limit_count);
}

export async function fetch_work_by_id(work_id: string) {
	return sample_works.find(w => w.id === work_id) ?? null;
}
