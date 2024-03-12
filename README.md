View system information using nodejs and packaging project in .exe file
> [!NOTE]
> To start the project you need to run command "node init -y" and "node install"
After that "node index.js"

> [!TIP]
> for packaging in .exe need use pkg app.js

пример вывода на windows

========== Информация о системе и пользователе пк ==========

Система: Windows_NT
Имя_хоста: LENOVO-S7
Релиз: 10.0.22631
Архитектура: x64
Модель_процессора: AMD Ryzen 5 5600H with Radeon Graphics
Частота_процессора: 3294 ГГц
Имя_пользователя: asedov
Каталог_пользователя: C:\Users\asedo

========== Информация о дисках ==========

**********
диск: C:
всего: 953gb
использовано: 824gb
доступно: 128gb

**********
диск: D:
всего: 931gb
использовано: 485gb
доступно: 446gb

Нажмите любую клавишу для завершения программы

пример вывода на линукс файл index2.js

[
  Drive {
    _filesystem: 'Local Fixed Disk',
    _blocks: 1022870155264,
    _used: 885221765120,
    _available: 137648390144,
    _capacity: '87%',
    _mounted: 'C:'
  },
  Drive {
    _filesystem: 'Local Fixed Disk',
    _blocks: 1000186310656,
    _used: 520845623296,
    _available: 479340687360,
    _capacity: '52%',
    _mounted: 'D:'
  },
  Drive {
    _filesystem: 'CD-ROM Disc',
    _blocks: 0,
    _used: 0,
    _available: 0,
    _capacity: '0%',
    _mounted: 'F:'
  }
]

доступно: 2gb
всего: 15gb
использовано: 12gb
