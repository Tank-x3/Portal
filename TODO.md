# oriuma Tools - タスク管理

## 進捗ステータス
- ✅ 完了
- 🔧 作業中
- ❌ 未着手

---

## フェーズ1: サイト基盤 ✅
- [x] トップページ (index.html) 作成
- [x] 共通CSS (common.style.css) 作成
- [x] カードレイアウトJS (layout-adjust.js) 作成
- [x] カルーセルJS (carousel.js) 作成
- [x] ディレクトリ構成の整備
- [x] ロゴ画像の配置

## フェーズ2: 説明ページ作成 🔧
- [x] 説明ページテンプレート (template.html)
- [x] キャラシート作成機 (charasheet.html) + 画像素材
- [ ] プロフィールメーカー (profiles.html) ← 次の作業予定
- [ ] 交流情報まとめ (interaction.html)
- [ ] ライブ情報まとめ (live.html)
- [ ] Writening入力支援 (writening.html)
- [ ] あにまん掲示板DB (animanch.html)

## フェーズ3: 仕上げ ❌
- [ ] カード画像をプレースホルダーから実画像に差し替え
- [ ] フッターの著作権表記を正式な名前に更新
- [ ] Writening / あにまん掲示板の説明文内リンク (href="#") を修正
- [ ] CSSの重複定義を整理 (manual-container等の重複)
- [ ] style.css.old の削除

## フェーズ4: デプロイ・公開 🔧
- [x] Gitリポジトリ初期化
- [ ] GitHubリモートリポジトリ接続
- [ ] GitHub Pages設定
- [ ] 公開確認・動作テスト

---

## 既知の課題
- ツール3 (交流情報) とツール4 (ライブ情報) はスマホ表示未対応/未最適化
- カルーセルのステップ1でPC/スマホ両方のキャプションが常に表示される
  (デバイス判定による出し分けは未実装)
