// この関数がレイアウトを調整します
function adjustCardLayout() {
    // HTML要素を取得
    const container = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.tool-card');
    const totalCards = cards.length;

    if (totalCards === 0) return; // カードがなければ何もしない

    // CSSで設定したカードの横幅(340px)と隙間(2rem = 32px)を定義
    const cardWidthWithGap = 340 + 32;

    // コンテナの現在の表示領域の幅を取得
    const containerWidth = container.clientWidth;

    // 画面幅に最大で何枚のカードが収まるかを計算
    const maxCardsPerRow = Math.floor(containerWidth / cardWidthWithGap);

    // 全カードが1行に収まる場合は、そのまま表示
    if (totalCards <= maxCardsPerRow) {
        container.style.gridTemplateColumns = `repeat(${totalCards}, 340px)`;
        return;
    }

    // --- ご希望のロジックを計算 ---
    let rows = 1;
    let optimalColumns = totalCards; // 最適な列数
    while (true) {
        // 「カード総数 ÷ 行数」で、1行あたりの枚数を計算（小数点切り上げ）
        let columns = Math.ceil(totalCards / rows);
        
        // 計算した1行あたりの枚数が、画面に収まる最大枚数以下になったら、それが最適解
        if (columns <= maxCardsPerRow) {
            optimalColumns = columns;
            break;
        }
        
        // 収まらなければ、行数を1つ増やして再計算
        rows++;

        // 無限ループ防止
        if (rows > totalCards) break;
    }

    // 計算した最適な列数をCSSに適用
    container.style.gridTemplateColumns = `repeat(${optimalColumns}, 340px)`;
}

// ページの読み込みが完了した時に、一度レイアウトを調整
window.addEventListener('DOMContentLoaded', adjustCardLayout);

// ブラウザのウィンドウサイズが変更された時に、再度レイアウトを調整
window.addEventListener('resize', adjustCardLayout);