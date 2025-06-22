// 最初に呼び出す dataは引数
function sort(data) {
    for (let i = 0; i < data.length; i++) {
        // 3*3のグリッドに値を格納
    }
    // 格納した値から隣接してる値をチェック
    check();
  return null;
}


// 隣接するマスに同じIDがあるならFalseを返す
function check(grid) {
    // 隣接するマス
    const adjacenRow = [
        [-1, 0], // 上
        [1, 0],  // 下
        [0, -1], // 左
        [0, 1],  // 右
    ];

    // 縦をチェック
    for (let i = 0; i < 3; i++) {
        // 横をチェック
        for (let j = 0; j < 3; j++) {
            // 現在位置
            const current = grid[i][j];
            // 上下左右をチェック
            for (const [ax, ay] of adjacenRow) {
                const ci = i + ax;
                const cj = j + ay;
                // 3*3の範囲内かチェック
                if (ci >= 0 && ci < 3 && cj >= 0 && cj < 3) {
                    // 隣接しているグリッドが同じIDかチェック
                    if (grid[ci][cj] === current) {
                        return false;
                    }
                }
            }
        }
    }

  return true;
}