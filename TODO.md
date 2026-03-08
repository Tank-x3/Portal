# oriuma Tools - タスク管理

## 進捗ステータス
- ✅ 完了
- 🔧 作業中
- ❌ 未着手

---

## フェーズ1: サイト基盤 ✅
- [x] トップページ (index.html) 作成
- [x] 共通CSS作成・モジュール分割 (base/cards/manual/carousel)
- [x] カードレイアウトJS (layout-adjust.js) 作成
- [x] カルーセルJS (carousel.js) 作成
- [x] ディレクトリ構成の整備
- [x] ロゴ画像の配置
- [x] CSS重複定義の整理
- [x] 旧CSS (common.style.css) からの移行完了

## フェーズ2: サイト構成 ✅
- [x] お問い合わせ導線 (ヘッダー + フッター)
- [x] フッター著作権表記を「タンクの人」に更新
- [x] 新規ツール9種のカード追加 (全15ツール掲載)
- [x] Writening / あにまん掲示板の説明文内リンク修正
- [x] 全15ツールのカード説明文を正確な内容に書き直し

## フェーズ3: 説明ページ作成 🔧
- [x] 説明ページテンプレート (template.html)
- [x] 全15ツールの説明ページ作成 (テキストベース)
- [ ] スクリーンショット撮影・追加 (SCREENSHOT_PLAN.md 参照)
  - [ ] 優先度A: profiles, interaction, animanch
  - [ ] 優先度B: live, race_tool, oriuma_db, horse_pedigree
  - [ ] 優先度C: writening, oriuma_gacha, quizplayer, coffee, tagracecalc, oriuma_sp_gacha, mobumamusume
- [ ] 説明ページにカルーセル追加 (スクリーンショット準備後)

## フェーズ4: 仕上げ ❌
- [ ] カード画像をプレースホルダーから実画像に差し替え
- [ ] 説明ページの内容精査 (ユーザーによるレビュー)

## フェーズ5: デプロイ・公開 ✅
- [x] Gitリポジトリ初期化
- [x] GitHubリモートリポジトリ接続 (Tank-x3/Portal)
- [x] GitHub Actions自動デプロイ設定
- [x] GitHub Pages有効化・公開確認

---

## 既知の課題
- ツール3 (交流情報) とツール4 (ライブ情報) はツール側でスマホ表示未対応/未最適化
- charasheet.htmlのカルーセルステップ1でPC/スマホ両方のキャプションが常に表示される
