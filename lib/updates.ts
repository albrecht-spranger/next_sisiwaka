// 変数名はスネークケースにする
import { supabase_client } from '@/lib/supabase_client';

export type UpdateItem = {
  id: number;
  created_at: string;  // timestamp
  article: string;
  valid: boolean;
};

export async function fetch_latest_updates(limit_count: number): Promise<UpdateItem[]> {
  const { data, error } = await supabase_client
    .from('updates')
    .select('id, created_at, article, valid')
    .eq('valid', true)
    .order('created_at', { ascending: false })
    .limit(limit_count);

  if (error) {
    // PHP版のフォールバックと同様の挙動
    return [{
      id: -1,
      created_at: new Date().toISOString(),
      article: '更新情報の取得に失敗しました。',
      valid: true,
    }];
  }
  return data ?? [];
}
