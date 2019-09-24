let timer: NodeJS.Timeout;
let diffTimer: NodeJS.Timeout;

type Options = {
  fireAt: string;
  frames: number[];
  expiry?: number;
};

export default function flooding(run: Function, options: Options) {
  if (!options.expiry) {
    options.expiry = 60;
  }
  diffTimer = setInterval(() => {
    const diff = subtract(options.fireAt);
    const diff_abs = Math.abs(diff);
    if (diff > options.expiry!) {
      clearInterval(timer);
      clearInterval(diffTimer);
      console.log('expired..');
    }
    console.log('计时:', diff, 's');
    options.frames.forEach(frame => {
      if (diff_abs === frame) {
        clearInterval(timer);
        timer = setInterval(() => {
          run();
        }, frame * 100);
      }
    });
  }, 1000);
}

function subtract(fireAt: string): number /* unit s*/ {
  return Math.round((Date.now() - new Date(fireAt).valueOf()) / 1000);
}
