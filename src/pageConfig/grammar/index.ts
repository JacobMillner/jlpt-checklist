import { Grammar } from './types';

const taskHash: Map<string, Grammar> = new Map([
  [
    'no',
    {
      id: 'no',
      title: 'の - possessive particle',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ae-no-possessive-particle-meaning/',
      longDesc: 'の is a particle used to indicate possession. It is similar to [‘s].',
    },
  ],
]);

export default taskHash;
