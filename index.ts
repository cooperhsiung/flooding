const fireAt = '2019-09-24 10:58:00';
let counts = [30, 20, 10, 5, 3, 2, 1];
let timer: NodeJS.Timeout;
let diffTimer: NodeJS.Timeout;

type Options = {
  fireAt: string;
  stopOver: number;
};

export function flooding(run: Function) {
  diffTimer = setInterval(() => {
    const diff1 = diff();
    const diff2 = Math.abs(diff1);
    if (diff1 > 60) {
      clearInterval(timer);
      clearInterval(diffTimer);
    }
    console.log('计时:', diff1, 's');
    counts.forEach(count => {
      if (diff2 === count) {
        clearInterval(timer);
        timer = setInterval(() => {
          run();
        }, count * 100);
      }
    });
  }, 1000);
}

function diff(): number {
  // unit -> s
  return Math.round((Date.now() - new Date(fireAt).valueOf()) / 1000);
}
