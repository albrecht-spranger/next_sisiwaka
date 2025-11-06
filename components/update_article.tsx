'use client';

import { useState } from 'react';

export default function UpdateArticle({ text }: { text: string }) {
  const [is_expanded, set_is_expanded] = useState(false);

  return (
    <p
      className={is_expanded ? '' : 'line-clamp-2'} // Tailwindのline-clampプラグインを使うと綺麗
      aria-expanded={is_expanded}
    >
      {text}
      <button
        type="button"
        className="ml-2 text-sm underline opacity-70"
        onClick={() => set_is_expanded(v => !v)}
      >
        {is_expanded ? '閉じる' : 'もっと見る'}
      </button>
    </p>
  );
}
