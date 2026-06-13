# AIと喧嘩しながら富士ヒルゴールドを狙うブログ

富士ヒルゴールドを一応狙う「実験体A」の自転車実験ブログです。
練習、食事、機材、体重、AI相談、旧ブログ発掘を、実験記事と検証記事として残します。

## サイト構成

- `index.html`: トップページ
- `blog.html`: 記事一覧
- `experiments.html`: 実験カテゴリ
- `old-blog.html`: 旧ブログ発掘室
- `plan.html`: 目標と現状メニュー
- `profile.html`: 実験体Aのプロフィール
- `articles/`: 個別記事
- `assets/`: CSSと画像

## 公開方針

このリポジトリは GitHub と Cloudflare Pages で公開します。
ただし、初回公開後はユーザーから明示的な指示があるまで公開版の上書きはしません。

通常作業はローカルで進めます。
記事やデザインがまとまった段階で、ユーザーの指示を受けてからコミット、push、Cloudflareへの反映を行います。

## 記事追加時の基本作業

1. `articles/` に記事HTMLを追加する
2. `index.html` の新着記事に必要なら追加する
3. `blog.html` の記事一覧に追加する
5. 関連記事がある場合は記事末尾の「次に読む」を更新する

## ローカル確認

```powershell
cd C:\Users\dibai\Desktop\Claud置き場\fuji-hill-ai-blog
python -m http.server 8765
```

ブラウザで以下を開きます。

```text
http://localhost:8765/
```
