export function getDeviceType() {
  const u = navigator.userAgent;
  // android终端
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  // ios终端
  const isIOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(u);

  if (isAndroid) {
    return 'android';
  }
  if (isIOS) {
    const screen = window.screen;
    if (screen.width === 375 && screen.height === 812 || screen.height === 375 && screen.width === 812) {
      return 'iphone-x';
    }
    return 'iphone';
  }
  return 'default';
}