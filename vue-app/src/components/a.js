function search (list, t) {
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        const center = Math.floor((left + right) / 2);
        if (list[center] === t) {
            return center;
        } else if (list[center] < t) {
            // 右側にある場合
            left = center + 1;
        }else if (list[center] < t) {
            // 左側にある場合
            left = center - 1;
        }
    }
    // 見つからなかった場合
    return -1;
}