export const revalidate = 60; // 1分ISR（PHP版の最新5件に近い体験）

import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { fetch_latest_updates } from '@/lib/updates';
import UpdateArticle from '@/components/update_article';

export const metadata: Metadata = {
  title: 'シシワカ陶苑',
};

function format_date_ymd(date_str: string) {
  const d = new Date(date_str);
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return `${y}/${m}/${day}`;
}

export default async function Page() {
  const updates_list = await fetch_latest_updates(5);

  return (
    <>
      {/* header */}
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <Link href="/" className="flex items-center gap-3 header_left_block">
          {/* 画像パスは public/ 以下に移すと /images/... で参照可能 */}
          <Image
            src="/images/sisiwaka_touen_logo.jpg"
            alt="シシワカ陶苑ロゴ"
            width={48}
            height={48}
            className="rounded"
          />
          <h1 className="text-xl font-bold">シシワカ陶苑</h1>
        </Link>
        <div className="flex items-center gap-4 header_right_block">
          <a
            href="https://minne.com/@sisiwaka10en"
            target="_blank"
            rel="noreferrer"
            className="minne_icon inline-block"
            aria-label="minne"
          >
            <Image
              src="/images/minne_logo_vertical.png"
              alt="minne logo"
              width={28}
              height={28}
            />
          </a>
          <a
            href="https://www.instagram.com/albrecht1999/"
            target="_blank"
            rel="noreferrer"
            className="instagram_icon inline-block"
            aria-label="Instagram"
          >
            <Image
              src="/images/Instagram_Glyph_Gradient.png"
              alt="Instagram Icon"
              width={28}
              height={28}
            />
          </a>
        </div>
      </header>

      <main>
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-12 main_container">
          {/* News セクション */}
          <section className="news_section">
            <h2 className="text-2xl font-bold nav_font mb-4">更新情報</h2>
            <div className="space-y-4 section_contents" id="updates">
              {updates_list.map((u) => (
                <article key={u.id} className="update_item border rounded-lg p-4">
                  <time className="block text-sm opacity-70 update_date">
                    {format_date_ymd(u.created_at)}
                  </time>
                  <div className="mt-1 update_article">
                    <UpdateArticle text={u.article} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* About セクション */}
          <section className="about_section">
            <h2 className="text-2xl font-bold nav_font">シシワカ陶苑について</h2>
            <div className="grid md:grid-cols-2 gap-6 section_contents intro_area mt-4">
              <div className="sisiwaka_family_area">
                <figure>
                  <Image
                    src="/images/sisiwaka_touen_family.png"
                    alt="パパ・シシワカとアクセル・シシワカ"
                    width={640}
                    height={400}
                    className="w-full h-auto rounded"
                  />
                  <figcaption className="text-sm opacity-70 mt-2">
                    パパ・シシワカとアクセル・シシワカ（17世紀ごろ）
                  </figcaption>
                </figure>
              </div>
              <div className="intro_text space-y-4 leading-7">
                <p>
                  　私が陶芸に惹かれたのは、高校の修学旅行で出会った清水焼のコーヒーカップがきっかけです。その後、自分でも作ってみたくなり、陶芸教室で学び始めました。
                </p>
                <p>
                  　もう一つの趣味はサボテン。子供の頃に出会って以来、育てるのが楽しみで、作品にもサボテンや多肉植物をモチーフに取り入れています。好きなものを組み合わせて形にするのが、私の創作スタイルです。
                </p>
                <p>
                  　技法は「しのぎ」と「練り込み」を使い、独特の模様や質感を生み出しています。特に、色土を重ねて削る過程が好きで、新しい発見が毎回あります。
                </p>
                <p>
                  　作品はコーヒーカップが中心ですが、茶碗や湯飲み、植木鉢なども作っています。日常の中で楽しめる器を目指しています。
                </p>
                <p>
                  　また、息子も私の影響で陶芸を始め、いくつかの作品を作りました。今は学業が忙しく一時中断していますが、このサイトでは親子それぞれの作品を紹介しています。それぞれの器を楽しんでいただけたら幸いです。
                </p>
              </div>
            </div>
          </section>

          {/* Works へのリンク */}
          <div className="flex justify-center">
            <Link href="/works" className="art_link inline-block">
              <span className="px-6 py-3 rounded-full border hover:bg-gray-50 transition">作品一覧へ</span>
            </Link>
          </div>

          {/* Contact */}
          <div className="flex justify-center">
            <a
              href="https://ss953871.stars.ne.jp/script/mailform/sisiwaka_touen/"
              className="contact_box flex items-center gap-2 border rounded px-4 py-3 hover:bg-gray-50 transition"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/images/contact_icon.png" alt="contact" width={20} height={20} />
              お問い合わせはこちら
            </a>
          </div>
        </div>
      </main>

      <footer className="px-4 py-6 border-t text-center">
        <p>&copy; 2025 シシワカ陶苑</p>
      </footer>
    </>
  );
}
