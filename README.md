# flooding

[![NPM Version][npm-image]][npm-url]
[![Node Version][node-image]][node-url]

make a function to execute like flooding, suitable for ticket-snatching tasks.

适用于执行抢票任务

## Installation

```bash
npm i flooding -S
```

## Usage

```typescript
import flooding from 'flooding';

function run() {
  console.log('run at:', new Date());
  // your tasks
}

flooding(run, {
  fireAt: '2019-09-24 15:01:00',
  frames: [30, 20, 10, 5, 3, 2, 1]
});
```

## API

```
flooding(run: Function, options: {
  fireAt: string; // 票券发售时刻
  frames: number[]; // 倒计时刻开始执行任务，尾部执行频率加快
  expiry?: number; // 超过 fireAt 多久停止任务，默认 60s
}):void
```

## Todo

- [ ] xxxx

## License

MIT

[npm-image]: https://img.shields.io/npm/v/flooding.svg
[npm-url]: https://www.npmjs.com/package/flooding
[node-image]: https://img.shields.io/badge/node.js-%3E=8-brightgreen.svg
[node-url]: https://nodejs.org/download/
