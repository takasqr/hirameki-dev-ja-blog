/**
 * 配列の要素をランダムに並び替え、指定された数の要素を取得する。
 * 
 * @template T - 配列の要素の型
 * @param {T[]} array - 元の配列
 * @param {number} count - 取得する要素の数
 * @returns {T[]} ランダムに選択された要素の配列
 */
function getRandomSubset<T>(array: T[], count: number): T[] {
  if (count >= array.length) {
    return array;
  }
  
  const shuffled = array.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export { getRandomSubset }
