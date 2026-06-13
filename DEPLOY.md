# 公開手順

このサイトは静的HTMLサイトです。
GitHub に push し、Cloudflare Pages から GitHub リポジトリを連携して公開します。

## Cloudflare Pages 推奨設定

- Framework preset: `None`
- Build command: 空欄
- Build output directory: `/`
- Root directory: `/`

## 初回公開後の運用ルール

初回公開後は、ユーザーから明示的に「公開版へ反映」「pushして」「Cloudflareを更新して」などの指示があるまで、公開版の上書きはしません。

ローカルでは自由に作業します。
公開タイミングだけを分けることで、細かい修正のたびに公開作業が発生しないようにします。

## 現在の公開状態

- GitHub: `https://github.com/dibainnbasuta-rgb/fuji-hill-ai-blog`
- Cloudflare Pages: `https://fuji-hill-ai-blog.pages.dev/`
- Production branch: `main`
- 注意: Cloudflare Pages は GitHub の `main` ブランチへの push を検知すると自動デプロイします。公開版を更新したくない間は、ローカル編集だけに留めて `git push` しません。

## 公開前チェック

- `index.html` が表示できる
- `blog.html` が表示できる
- `old-blog.html` が表示できる
- `articles/old-blog-recovery.html` が表示できる
- スマホ幅でナビが表示される
- ローカル画像リンクが切れていない
- 認証情報や個人情報ファイルを含めていない

## Google検索について

Cloudflare Pages で公開した静的サイトでも、Google のクロール対象になります。
ただし、検索流入が出るまでは時間がかかります。

公開URLが決まった後にやるとよいこと:

1. Google Search Console に登録する
2. `sitemap.xml` を作る
3. `robots.txt` に sitemap URL を追記する
4. トップページを URL 検査でインデックス登録リクエストする

`sitemap.xml` は公開URLが決まってから作成します。
