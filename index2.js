const nodeDiskInfo = require('node-disk-info');

const onChangeInput = () => {
  let discsInformation = [];
  try {
    const disks = nodeDiskInfo.getDiskInfoSync();
    discsInformation = disks
  } catch (e) {
    console.error(e);
  }
  return discsInformation
}
console.log(onChangeInput())

// newNum, newNum2, newNum3 for example
let newNum = 2479952;
let newNum2 = 15389720;
let newNum3 = 12893384;
let m = 'доступно: ' + (newNum /1024 /1024).toFixed(0) + "gb";
let t = 'всего: ' + (newNum2 /1024 /1024).toFixed(0) + "gb";
let u = 'использовано: ' + (newNum3 /1024 /1024).toFixed(0) + "gb";
console.log(`\r\n${m}\r\n${t}\r\n${u}`)
