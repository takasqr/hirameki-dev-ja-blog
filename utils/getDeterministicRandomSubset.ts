/**
 * Mulberry32 シード付き疑似乱数生成器
 * @param {number} seed - シード値
 * @returns {() => number} 0 以上 1 未満の疑似乱数を返す関数
 */
function mulberry32(seed: number): () => number {
  return function () {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * 配列の要素をシード付き乱数でシャッフルし、指定された数の要素を取得する（毎回同じ結果を得られる）
 *
 * @template T - 配列の要素の型
 * @param {T[]} array - 元の配列
 * @param {number} count - 取得する要素の数
 * @param {number} seed - シード値（同じ値なら毎回同じ結果になる）
 * @returns {T[]} シード付き乱数でシャッフルされた要素の配列
 */
function getDeterministicRandomSubset<T>(
  array: T[],
  count: number,
  seed = 1234
): T[] {
  if (count >= array.length) {
    return array;
  }
  
  // 配列のコピーを作成
  const shuffled = array.slice();
  
  // シード付き疑似乱数生成関数を作成
  const random = mulberry32(seed);
  
  // Fisher-Yates のアルゴリズムでシャッフル
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, count);
}

export { getDeterministicRandomSubset }
