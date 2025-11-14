export const revalidate = 60; // 1分ISR（PHP版の最新5件に近い体験）

import Link from 'next/link';
import Image from 'next/image';
import { fetch_latest_updates } from '@/lib/updates';
import UpdateArticle from '@/components/update_article';
import SiteHeader from '@/components/site_header';
import SiteFooter from '@/components/site_footer';
import styles from './page.module.css';


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
			<SiteHeader />
			<main className={styles.main}>
				<div className={`${styles.main_container}`}>
					{/* News */}
					<section className={styles.news_section}>
						<h2 className={styles.nav_font}>更新情報</h2>
						<div className={styles.section_contents}>
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
					<section className={styles.about_section}>
						<h2 className={styles.nav_font}>シシワカ陶苑について</h2>
						<div className={`${styles.intro_area} ${styles.section_contents}`}>
							<div className={styles.sisiwaka_family_area}>
								<figure>
									<Image src="/images/sisiwaka_touen_family.png" alt="..." width={640} height={400} />
									<figcaption>パパ・シシワカとアクセル・シシワカ（17世紀ごろ）</figcaption>
								</figure>
							</div>
							<div className={styles.intro_text}>
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
					<Link href="/works" className={styles.art_link}><span>作品一覧へ</span></Link>

					{/* Contact */}
					<a href="https://ss953871.stars.ne.jp/script/mailform/sisiwaka_touen/" className={styles.contact_box} target="_blank" rel="noreferrer">
						<Image src="/images/contact_icon.png" alt="contact" width={20} height={20} />
						お問い合わせはこちら
					</a>
				</div>
			</main>

			<SiteFooter />
		</>
	);
}
