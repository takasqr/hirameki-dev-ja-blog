import { isCloudinary } from './isCloudinary'

/**
 * Cloudinary の画像でサムネイル用の画像の URL を返す関数
 */
function getThumbnailCloudinary(url: string): string {
  if (!isCloudinary(url)) {
    throw new Error('Cloudinary の画像以外が指定されました。')
  }

  const urlWithoutVersion = removeCloudinaryVersion(url)
  const lastSlashIndex = urlWithoutVersion.lastIndexOf('/');
  if (lastSlashIndex === -1) return urlWithoutVersion; // スラッシュがない場合はそのまま返す

  const newWidth = 250

  return (
    urlWithoutVersion.slice(0, lastSlashIndex) +
    `/w_${newWidth}` +
    urlWithoutVersion.slice(lastSlashIndex)
  )
}

/**
 * CloudinaryのURLからバージョンコード（v+UNIXタイムスタンプ）を除去する関数
 */
function removeCloudinaryVersion(url: string): string {
  return url.replace(/\/v\d{10}(?=\/)/, '');
}

export { getThumbnailCloudinary }
