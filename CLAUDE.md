# oriuma Tools ポータルサイト

## プロジェクト概要
GitHub Pages で公開する、自作Webツール15種のポータルサイト。
サイト名: **oriuma Tools**
公開先: `https://tank-x3.github.io/Portal/`
お問い合わせ: `https://tank-x3.github.io/ContactForm/`

## 技術スタック
- HTML / CSS / vanilla JavaScript (フレームワーク・ビルドツールなし)
- ホスティング: GitHub Pages (GitHub Actions による自動デプロイ)
- レスポンシブ対応: メディアクエリ (768px ブレークポイント)

## ディレクトリ構成
```
Portal/
├── index.html                    # トップページ (カード形式ツール一覧)
├── .github/workflows/deploy.yml  # GitHub Pages 自動デプロイ
├── assets/
│   ├── css/
│   │   ├── base.css              # 全ページ共通 (body, ヘッダー, フッター)
│   │   ├── cards.css             # トップページ用 (カード, アコーディオン)
│   │   ├── manual.css            # 説明ページ用 (コンテナ, セクション, 目次)
│   │   └── carousel.css          # カルーセル用
│   ├── js/
│   │   ├── layout-adjust.js      # カードグリッド動的均等配分
│   │   └── carousel.js           # 説明ページ用カルーセル
│   └── images/
│       ├── portal/               # トップページ用 (logo.png)
│       └── manuals/              # 説明ページ用画像 (ツール別サブフォルダ)
├── manuals/                      # 各ツールの説明ページ
│   └── template.html             # 説明ページ共通テンプレート
└── DevLog.md                     # Geminiとの開発ログ (git管理外, ローカル参照用)
```

## 掲載ツール一覧 (15種)
| # | ツール名 | リポジトリ名 | 説明ページ |
|---|---------|-------------|-----------|
| 1 | オリウマ用キャラシート作成機 | oriuma_CharacterSheet | ✅ 完成 |
| 2 | 架空馬・オリウマ プロフィールメーカー | Horses_Profiles_Maker | ❌ 未作成 |
| 3 | オリウマキャラ間交流情報まとめツール | Character_Interaction_Record | ❌ 未作成 |
| 4 | ライブ情報まとめツール | Live_Sim | ❌ 未作成 |
| 5 | Writening入力支援ツール | Writening | ❌ 未作成 |
| 6 | あにまん掲示板 お気に入りスレッドDBツール | BBS_animanch_FavDB | ❌ 未作成 |
| 7 | オリウマレース開催支援ツール | Oriuma_Race_Tool | ❌ 未作成 |
| 8 | オリウマデータベース | oriuma_DB | ❌ 未作成 |
| 9 | オリウマガチャシミュレーター | oriuma_gacha | ❌ 未作成 |
| 10 | クイズを遊ぼう！ | QuizPlayer | ❌ 未作成 |
| 11 | マスター、コーヒー淹れてよ | Master-make-me-some-coffee | ❌ 未作成 |
| 12 | タッグ戦チーム順位集計 | TagRaceCalc | ❌ 未作成 |
| 13 | 競走馬血統表ツール | Horse_Pedigree | ❌ 未作成 |
| 14 | オリウマサポカガチャ | oriuma_SP_gacha | ❌ 未作成 |
| 15 | モブウマ娘メーカー | MobUmamusume_Maker | ❌ 未作成 |

全ツールのベースURL: `https://tank-x3.github.io/{リポジトリ名}/`

### ポータル対象外
- 88ch_Converter (個人用途の限定ツール)
- Google_AI_Studio_LogConverter, JP-Post-Guardian, animanch_res_copy (GitHub Pages非公開)

## デザイン方針
- **カード**: 340px幅固定、CSS Grid + JSで動的均等配分
- **色**: 背景 #f4f4f9 / ヘッダー #4a4a4a / ボタン #007bff / カード白
- **フォント**: システムフォントスタック
- **ヘッダー**: ロゴ128px + タイトル横並び + お問い合わせリンク (スマホ時縦積み)
- **フッター**: お問い合わせリンク + 著作権表記 (タンクの人)
- **アコーディオン**: `<details>/<summary>` で簡易説明、詳細は子ページリンク
- **説明ページ**: カルーセル(基本使い方) + 目次付き縦積み(詳細)
- **画像**: PC/スマホで `<picture>` タグ切り替え、ファイル名は001始まり連番

## コーディング規約
- 外部ライブラリ不使用 (vanilla JS のみ)
- CSS: 役割別に分割 (base / cards / manual / carousel)
- `target="_blank"` には `rel="noopener noreferrer"` を付与
- scriptタグには `defer` 属性を使用
