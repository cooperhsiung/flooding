import flooding from './index';

function run() {
  console.log('run at:', new Date());
  // your tasks
}

flooding(run, {
  fireAt: '2019-09-24 15:04:00',
  frames: [30, 20, 10, 5, 3, 2, 1]
});
