const os = require('node:os');
const diskinfo = require('diskinfo');

const userInfo = os.userInfo();
const hostName = os.hostname();
const platformType = os.type();
const platformRelease = os.release();
const platformArch = os.arch();
const platformUptime = os.uptime();
const processorModel = os.cpus();

function upTimeConverter(n) {
  const upMinute = parseInt(n / 60);
  const upHour = parseInt(upMinute / 3600);
  if (upHour < 1) {
    return `около ${Math.ceil(upHour)} часа`
  }
  if (upHour > 2 && upHour < 5) {
    return `${Math.floor(upHour)} часа`
  }
  if (upHour > 5) {
    return `${Math.floor(upHour)} часов`
  }
}

let modelP = [];
processorModel.forEach((el) => {
  modelP.push(el)
})

const processorModelThis = modelP[1].model;
const processorSpeedThis = `${modelP[1].speed} ГГц`;

const platformUpHour = upTimeConverter(platformUptime);

const consoleUserAndSystemInfo = async() => {
  console.log(`Система: ${platformType}`)
  console.log(`Имя_хоста: ${hostName}`)
  console.log(`Релиз: ${platformRelease}`)
  console.log(`Архитектура: ${platformArch}`)
  console.log(`Модель_процессора: ${processorModelThis}`)
  console.log(`Частота_процессора: ${processorSpeedThis}`)
  console.log(`Имя_пользователя: ${userInfo.username}`)
  console.log(`Каталог_пользователя: ${userInfo.homedir}`)
  // console.log(`Время_работы_пк: ${platformUpHour}`)
}

const getDiscSpace = async() => {
  diskinfo.getDrives((err, aDrives) => {
    for (let i = 0; i < aDrives.length; i++) {
      if ((aDrives[i].blocks /1024 /1024 /1024).toFixed(0) > 0) {
        let myDivide = Array(11).join('*');
        console.log(myDivide)
        let mounted = 'диск: ' + aDrives[i].mounted;
        let total  = 'всего: ' + (aDrives[i].blocks /1024 /1024 /1024).toFixed(0) + "gb";
        let used = 'использовано: ' + (aDrives[i].used /1024 /1024 /1024).toFixed(0) + "gb";
        let available = 'доступно: ' + (aDrives[i].available /1024 /1024 /1024).toFixed(0) + "gb";
        console.log(mounted+"\r\n"+total+"\r\n"+used+"\r\n"+available+"\r\n");
      }
      }
      console.log('Нажмите любую клавишу для завершения программы')
    });
}

const awaitEnter = async() => {
  const keypress = async() => {
    process.stdin.setRawMode(true)
    return new Promise(resolve => process.stdin.once('data', () => {
      process.stdin.setRawMode(false)
      resolve()
    }))
  }
  ;
  (async () => {
    await getDiscSpace()
    await keypress()
  
  })().then(process.exit)
}

const allInfo = async() => {
console.log('========== Информация о системе и пользователе пк ==========\n')
await consoleUserAndSystemInfo()
console.log('\r\n========== Информация о дисках ==========\n')
await awaitEnter()
}
allInfo()
