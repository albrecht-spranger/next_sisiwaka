"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function WorkEditPage() {
  const { id } = useParams<{ id: string }>(); // ← ここで取得
  const [title_value, set_title_value] = useState("");

  const on_submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`保存（仮）: ${title_value}`);
  };

  return (
    <>
      <h1>作品編集: {id}</h1>
      <form onSubmit={on_submit}>
        <label>タイトル</label><br />
        <input value={title_value} onChange={e => set_title_value(e.target.value)} />
        <br />
        <button type="submit">保存（デモ）</button>
      </form>
    </>
  );
}
