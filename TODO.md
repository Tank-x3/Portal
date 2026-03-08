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

## フェーズ3: 説明ページ作成 🔧
- [x] 説明ページテンプレート (template.html)
- [x] キャラシート作成機 (charasheet.html) + 画像素材
- [ ] プロフィールメーカー (profiles.html)
- [ ] 交流情報まとめ (interaction.html)
- [ ] ライブ情報まとめ (live.html)
- [ ] Writening入力支援 (writening.html)
- [ ] あにまん掲示板DB (animanch.html)
- [ ] オリウマレース開催支援 (race_tool.html)
- [ ] オリウマデータベース (oriuma_db.html)
- [ ] オリウマガチャ (oriuma_gacha.html)
- [ ] クイズを遊ぼう (quizplayer.html)
- [ ] マスターコーヒー (coffee.html)
- [ ] タッグ戦チーム順位集計 (tagracecalc.html)
- [ ] 競走馬血統表 (horse_pedigree.html)
- [ ] オリウマサポカガチャ (oriuma_sp_gacha.html)
- [ ] モブウマ娘メーカー (mobumamusume.html)

## フェーズ4: 仕上げ ❌
- [ ] カード画像をプレースホルダーから実画像に差し替え

## フェーズ5: デプロイ・公開 ✅
- [x] Gitリポジトリ初期化
- [x] GitHubリモートリポジトリ接続 (Tank-x3/Portal)
- [x] GitHub Actions自動デプロイ設定
- [x] GitHub Pages有効化・公開確認

---

## 既知の課題
- ツール3 (交流情報) とツール4 (ライブ情報) はツール側でスマホ表示未対応/未最適化
- カルーセルのステップ1でPC/スマホ両方のキャプションが常に表示される
  (デバイス判定による出し分けは未実装)
- 新規追加ツール (7-15) の説明文はリポジトリのdescriptionから仮記載。正確な内容に要修正
