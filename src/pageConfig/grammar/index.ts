import { Grammar } from './types';

const grammarHash: Map<string, Grammar> = new Map([
  [
    'no',
    {
      id: 'no',
      title: 'の - possessive particle',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ae-no-possessive-particle-meaning/',
      longDesc:
        'の is a particle used to indicate possession. It is similar to [‘s].',
    },
  ],
  [
    'da-desu',
    {
      id: 'da-desu',
      title: 'だ / です',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a0-da-%e3%81%a7%e3%81%99-desu-meaning/',
      longDesc: `<p>to be (am, is, are, were, used to)</p><div class="ex-block"><p class="jp">私はクリス<span class="color">です</span>。</p><p class="gram-romaji">watashi wa kurisu desu.</p><p class="gram-honyaku">I <span class="color">am</span> Chris.</p></div>`,
    },
  ],
  [
    'chyaikenai',
    {
      id: 'chyaikenai',
      title: 'ちゃいけない・じゃいけない',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a1%e3%82%83%e3%81%84%e3%81%91%e3%81%aa%e3%81%84-%e3%81%98%e3%82%83%e3%81%84%e3%81%91%e3%81%aa%e3%81%84-cha-ikenai-ja-dame/',
      longDesc: `<p> must not; may not; cannot (spoken Japanese).</p><p>寝る前にスマホを見ちゃダメよ</p><p>You shouldn't look at your smartphone before going to bed.</p>`,
    },
  ],
  [
    'dake',
    {
      id: 'dake',
      title: 'だけ',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a0%e3%81%91-dake-meaning/',
      longDesc: `<p> only; just; as much as~.</p><p>一人だけ。</p><p>only one person.</p>`,
    },
  ],
  [
    'darou',
    {
      id: 'darou',
      title: 'だろう',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a0%e3%82%8d%e3%81%86-darou-meaning/',
      longDesc: `<p>I think; it seems; probably; right?</p><p>嘘だろう。</p><p>You’re kidding (surely that’s a lie).</p>`,
    },
  ],
  [
    'de',
    {
      id: 'de',
      title: 'で',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a7-de-particle-meaning/',
      longDesc: `<p>in; at; on; by; with; via</p><p>じてんしゃで行きます。</p><p>I will go by bicycle.</p>`,
    },
  ],
  [
    'demo',
    {
      id: 'demo',
      title: 'でも',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a7%e3%82%82-demo-meaning/',
      longDesc: `<p>but; however; though~.</p><p>私は魚が好すきです。でも肉も好きです。</p><p>I like fish. But I also like meat too.</p>`,
    },
  ],
  [
    'deshou',
    {
      id: 'deshou',
      title: 'でしょう',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a7%e3%81%97%e3%82%87%e3%81%86-deshou-meaning/',
      longDesc: `<p>I think; it seems; probably; right?</p><p>明日は雨が降るでしょう。</p><p>I think it will rain tomorrow.</p>`,
    },
  ],
]);

export default grammarHash;
