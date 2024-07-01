export function getStringByUrl(url: string) {
  return new Promise<string>((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    // xhr.responseType = 'text'
    xhr.onload = () => {
      const { status, response, statusText } = xhr
      // status = 0 低版本安卓手机当加载本地资源就会出现这个情况
      // 没有查明原因，这里做下兼容
      if ((status >= 200 && status < 300) || (status === 0 && response)) {
        resolve(response)
      } else {
        reject(new Error(`${statusText}[${status}]`))
      }
    }
    xhr.onerror = (err) => reject(`getStringByUrl:请求错误:${err}`)
    xhr.send()
  })
}

export function getImageInfo(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      resolve(image)
    }
    image.onerror = (err) => reject(`getImageInfo:请求错误:${err}${src}`)
    image.src = src
  })
}

export async function getImageInfoBySvgUrl(url: string, color: string) {
  let svgXml = await getStringByUrl(url)

  if (color) {
    svgXml = svgXml.replace(/white/gi, color)
  }
  return getImageInfo(
    `data:image/svg+xml;base64,${window.btoa(decodeURIComponent(encodeURIComponent(svgXml)))}`,
  )
}
