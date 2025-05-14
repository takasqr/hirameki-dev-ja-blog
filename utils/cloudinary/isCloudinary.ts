/**
 * URL が Cloudinary かどうかを判断する関数
 */
function isCloudinary(url: string): boolean {
  if (url.includes('https://res.cloudinary.com')) {
    return true
  }
  else if (url.includes('https://image.hirameki.dev')) {
    return true
  }
  else {
    return false
  }
}

export { isCloudinary }
