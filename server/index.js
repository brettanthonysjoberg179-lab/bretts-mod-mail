import { Devvit } from '@devvit/public-api';
import { reddit } from '@devvit/reddit';

Devvit.configure({
  reddit,
});

Devvit.addTrigger({
  event: 'onAppInstall',
  job: async () => {
    console.log("Brett's Mod Mail installed!");
    return { status: 'ok' };
  },
});

Devvit.addTrigger({
  event: 'onModMail',
  job: async () => {
    console.log("Brett's Mod Mail trigger fired");
    return { status: 'ok' };
  },
});

Devvit.addUIElement({
  type: 'post',
  location: 'head',
  render: async () => {
    return null;
  },
});

export default Devvit;
