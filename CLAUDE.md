# oriuma Tools ポータルサイト

## プロジェクト概要
GitHub Pages で公開する、自作Webツール6種のポータルサイト。
サイト名: **oriuma Tools**
公開先: `https://tank-x3.github.io/Portal/` (予定)

## 技術スタック
- HTML / CSS / vanilla JavaScript (フレームワーク・ビルドツールなし)
- ホスティング: GitHub Pages
- レスポンシブ対応: メディアクエリ (768px ブレークポイント)

## ディレクトリ構成
```
Portal/
├── index.html                    # トップページ (カード形式ツール一覧)
├── assets/
│   ├── css/
│   │   └── common.style.css      # 全ページ共通CSS
│   ├── js/
│   │   ├── layout-adjust.js      # カードグリッド動的均等配分
│   │   └── carousel.js           # 説明ページ用カルーセル
│   └── images/
│       ├── portal/               # トップページ用 (logo.png)
│       └── manuals/              # 説明ページ用画像 (ツール別サブフォルダ)
│           ├── charasheet/
│           ├── profiles/
│           ├── interaction/
│           ├── live/
│           ├── writening/
│           └── animanch/
├── manuals/                      # 各ツールの説明ページ
│   ├── template.html             # 説明ページ共通テンプレート
│   ├── charasheet.html           # ✅ 完成済み
│   ├── profiles.html             # ❌ 未作成
│   ├── interaction.html          # ❌ 未作成
│   ├── live.html                 # ❌ 未作成
│   ├── writening.html            # ❌ 未作成
│   └── animanch.html             # ❌ 未作成
└── DevLog.md                     # Geminiとの開発ログ (参照用)
```

## 掲載ツール一覧
| # | ツール名 | リポジトリ名 | 説明ページ |
|---|---------|-------------|-----------|
| 1 | オリウマ用キャラシート作成機 | oriuma_CharacterSheet | ✅ 完成 |
| 2 | 架空馬・オリウマ プロフィールメーカー | Horses_Profiles_Maker | ❌ 未作成 |
| 3 | オリウマキャラ間交流情報まとめツール | Character_Interaction_Record | ❌ 未作成 |
| 4 | ライブ情報まとめツール | Live_Sim | ❌ 未作成 |
| 5 | Writening入力支援ツール | Writening | ❌ 未作成 |
| 6 | あにまん掲示板 お気に入りスレッドDBツール | BBS_animanch_FavDB | ❌ 未作成 |

全ツールのベースURL: `https://tank-x3.github.io/{リポジトリ名}/`

## デザイン方針
- **カード**: 340px幅固定、CSS Grid + JSで動的均等配分
- **色**: 背景 #f4f4f9 / ヘッダー #4a4a4a / ボタン #007bff / カード白
- **フォント**: システムフォントスタック
- **ヘッダー**: ロゴ128px + タイトル横並び (スマホ時縦積み)
- **アコーディオン**: `<details>/<summary>` で簡易説明、詳細は子ページリンク
- **説明ページ**: カルーセル(基本使い方) + 目次付き縦積み(詳細)
- **画像**: PC/スマホで `<picture>` タグ切り替え、ファイル名は001始まり連番

## コーディング規約
- 外部ライブラリ不使用 (vanilla JS のみ)
- CSSは `common.style.css` に集約
- `target="_blank"` には `rel="noopener noreferrer"` を付与
- scriptタグには `defer` 属性を使用
