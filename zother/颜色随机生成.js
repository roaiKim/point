function rancolor (a) {
  let r = Math.floor(Math.random() * 255)//random()方法可返回介于 0~1 之间的一个随机数
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
}
