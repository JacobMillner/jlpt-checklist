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
      meaning: 'to be (am, is, are, were, used to)',
    },
  ],
  [
    'chyaikenai',
    {
      id: 'chyaikenai',
      title: 'ちゃいけない・じゃいけない',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a1%e3%82%83%e3%81%84%e3%81%91%e3%81%aa%e3%81%84-%e3%81%98%e3%82%83%e3%81%84%e3%81%91%e3%81%aa%e3%81%84-cha-ikenai-ja-dame/',
      longDesc: `<p> must not; may not; cannot (spoken Japanese).</p><p>寝る前にスマホを見ちゃダメよ</p><p>You shouldn't look at your smartphone before going to bed.</p>`,
      meaning: 'must not do (spoken Japanese)',
    },
  ],
  [
    'dake',
    {
      id: 'dake',
      title: 'だけ',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a0%e3%81%91-dake-meaning/',
      longDesc: `<p> only; just; as much as~.</p><p>一人だけ。</p><p>only one person.</p>`,
      meaning: 'only; just; as much as~',
    },
  ],
  [
    'darou',
    {
      id: 'darou',
      title: 'だろう',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a0%e3%82%8d%e3%81%86-darou-meaning/',
      longDesc: `<p>I think; it seems; probably; right?</p><p>嘘だろう。</p><p>You’re kidding (surely that’s a lie).</p>`,
      meaning: 'I think; it seems; probably; right?',
    },
  ],
  [
    'de',
    {
      id: 'de',
      title: 'で',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a7-de-particle-meaning/',
      longDesc: `<p>in; at; on; by; with; via</p><p>じてんしゃで行きます。</p><p>I will go by bicycle.</p>`,
      meaning: 'in; at; on; by; with; via',
    },
  ],
  [
    'demo',
    {
      id: 'demo',
      title: 'でも',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a7%e3%82%82-demo-meaning/',
      longDesc: `<p>but; however; though~.</p><p>私は魚が好すきです。でも肉も好きです。</p><p>I like fish. But I also like meat too.</p>`,
      meaning: '	but; however; though~',
    },
  ],
  [
    'deshou',
    {
      id: 'deshou',
      title: 'でしょう',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a7%e3%81%97%e3%82%87%e3%81%86-deshou-meaning/',
      longDesc: `<p>I think; it seems; probably; right?</p><p>明日は雨が降るでしょう。</p><p>I think it will rain tomorrow.</p>`,
      meaning: 'I think; it seems; probably; right?',
    },
  ],
  [
    'donna',
    {
      id: 'donna',
      title: 'どんな',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a9%e3%82%93%e3%81%aa-donna-meaning/',
      longDesc: `<p>what kind of; what sort of</p><p>ベトナムはどんな国ですか。</p><p>What kind of country is Vietnam?</p>`,
      meaning: 'what kind of; what sort of',
    },
  ],
  [
    'doushite',
    {
      id: 'doushite',
      title: 'どうして',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a7%e3%81%97%e3%82%87%e3%81%86-deshou-meaning/',
      longDesc: `<p>why; for what reason; how</p><p>どうして来ないの？</p><p>Why aren't you coming?</p>`,
      meaning: 'why; for what reason; how',
    },
  ],
  [
    'douyatte',
    {
      id: 'douyatte',
      title: 'どうやって',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%a9%e3%81%86%e3%82%84%e3%81%a3%e3%81%a6-douyatte-meaning/',
      longDesc: `<p>how; in what way; by what means</p><p>駅までどうやって行きますか。</p><p>How can I get to the station?</p>`,
      meaning: 'how; in what way; by what means',
    },
  ],
  [
    'ga',
    {
      id: 'ga',
      title: 'が',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%8c-ga-subject-marker-particle/',
      longDesc: `<p>subject marker; however; but ~</p><p>明日は雨が降る。</p><p>It is going to rain tomorrow.</p>`,
      meaning: 'subject marker; however; but ~',
    },
  ],
  [
    'ga-arimasu',
    {
      id: 'ga-arimasu',
      title: 'があります',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%8c%e3%81%82%e3%82%8a%e3%81%be%e3%81%99-ga-arimasu-%e3%81%8c%e3%81%82%e3%82%8b-ga-aru-meaning/',
      longDesc: `<p>there is; is (non-living things)</p><p>へやにテレビがあります。</p><p>I have a TV in my room.</p>`,
      meaning: 'there is; is (non-living things)',
    },
  ],
  [
    'ga-hoshii',
    {
      id: 'ga-hoshii',
      title: 'がほしい',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%8c%e3%81%bb%e3%81%97%e3%81%84-ga-hoshii-%e3%81%8c%e6%ac%b2%e3%81%97%e3%81%84-meaning/',
      longDesc: `<p>to want something</p><p>もっとお金が欲しいです。</p><p>I want more money.</p>`,
      meaning: 'to want something',
    },
  ],
  [
    'ga-imasu',
    {
      id: 'ga-imasu',
      title: 'がいます',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%8c%e3%81%84%e3%81%be%e3%81%99-ga-imasu-%e3%81%8c%e3%81%84%e3%82%8b-ga-iru-meaning/',
      longDesc: `<p>there is; to be; is (living things)</p><p>テーブルの下に猫がいる。</p><p>There is a cat below the table.</p>`,
      meaning: 'there is; to be; is (living things)',
    },
  ],
  [
    'hou-ga-ii',
    {
      id: 'hou-ga-ii',
      title: 'ほうがいい',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e6%96%b9%e3%81%8c%e3%81%84%e3%81%84-%e3%81%bb%e3%81%86%e3%81%8c%e3%81%84%e3%81%84-hou-ga-ii-meaning/',
      longDesc: `<p>had better; it'd be better to; should ~</p><p>テーブルの下に猫がいる。</p><p>There is a cat below the table.</p>`,
      meaning: "had better; it'd be better to; should ~",
    },
  ],
  [
    'i-adjectives',
    {
      id: 'i-adjectives',
      title: 'い-adjectives',
      link: 'https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%84-adjectives-%e3%81%84%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/',
      longDesc: `<p>i-adjectives</p><p><ul><li>熱い　(atsui) hot (thing)</li><li>暑い　(atsui) hot (weather)</li><li>温かい　(atatakai) warm</li><li>温い　(nurui)&nbsp;lukewarm, not hot enough</li><li>寒い　(samui) cold (weather)</li><li>涼しい　(suzushii) cool</li><li>冷たい　(tsumetai) cold (to the touch)</li></ul><ul><li><a target="_blank" class="jp" href="https://jlptsensei.com/learn-japanese-vocabulary/%e5%a4%9a%e3%81%84-ooi-meaning-many/">多い</a> 　(ooi)&nbsp;many, numerous, much</li><li><a target="_blank" class="jp" href="https://jlptsensei.com/learn-japanese-vocabulary/%e5%b0%91%e3%81%aa%e3%81%84-sukunai-few/">少ない</a> 　(sukunai) few, little, limited, scarce</li></ul><ul><li><a target="_blank" class="jp" href="https://jlptsensei.com/learn-japanese-vocabulary/%e9%ab%98%e3%81%84-takai-meaning-tall-expensive/">高い</a> 　(takai) expensive, tall</li><li><a target="_blank" class="jp" href="https://jlptsensei.com/learn-japanese-vocabulary/%e5%ae%89%e3%81%84-yasui-meaning-cheap/">安い</a> 　(yasui) cheap</li></ul><ul><li><a target="_blank" class="jp" href="https://jlptsensei.com/learn-japanese-vocabulary/%e5%a4%a7%e3%81%8d%e3%81%84-ookii-meaning-big%e2%80%8b/">大きい</a>　(ookii) big</li><li><a target="_blank" class="jp" href="https://jlptsensei.com/learn-japanese-vocabulary/%e5%b0%8f%e3%81%95%e3%81%84-chiisai-meaning-small/">小さい</a> 　(chiisai) small</li><li><a target="_blank" class="jp" href="https://jlptsensei.com/learn-japanese-vocabulary/%e9%95%b7%e3%81%84-nagai-long/">長い</a> 　(nagai) long</li><li>短い　(mijikai) short</li><li>広い　(hiroi) wide, broad, spacious</li><li>狭い　(semai) narrow, small, restricted, cramped</li><li>遠い　(tooi) far, distant</li><li>近い　(chikai) close, near</li><li>太い　(futoi) thick, broad</li><li>細い　(hosoi) thin, fine, slender, narrow</li></ul></p>`,
      meaning: 'i-adjectives',
    },
  ],
  [
    'ichiban',
    {
      id: 'ichiban',
      title: '一番',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e4%b8%80%e7%95%aa-%e3%81%84%e3%81%a1%e3%81%b0%e3%82%93-ichiban-meaning/',
      longDesc: `<p>the most; the best</p><p>彼がいちばん働いた。</p><p>He worked the hardest.</p>`,
      meaning: 'the most; the best',
    },
  ],
  [
    'issho-ni',
    {
      id: 'issho-ni',
      title: '一緒に',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e4%b8%80%e7%b7%92%e3%81%ab-%e3%81%84%e3%81%a3%e3%81%97%e3%82%87%e3%81%ab-issho-ni-meaning/',
      longDesc: `<p>together</p><p>一緒に日本語を勉強しましょう。</p><p>Let's study Japanese together.</p>`,
      meaning: 'together',
    },
  ],
  [
    'itsumo',
    {
      id: 'itsumo',
      title: 'いつも',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%84%e3%81%a4%e3%82%82-itsumo-meaning/',
      longDesc: `<p>always; usually; habitually</p><p>彼はいつも元気ですね。</p><p>He is always energetic.</p>`,
      meaning: 'always; usually; habitually',
    },
  ],
]);

export default grammarHash;
