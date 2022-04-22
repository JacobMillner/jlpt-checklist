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
  [
    'janai-dewa-nai',
    {
      id: 'janai-dewa-nai',
      title: 'じゃない・ではない',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%98%e3%82%83%e3%81%aa%e3%81%84-janai-%e3%81%a7%e3%81%af%e3%81%aa%e3%81%84-dewa-nai-meaning/',
      longDesc: `<p>to not be (am not; is not; are not)</p><p>あなたは一人じゃない。</p><p>You are not alone.</p>`,
      meaning: 'to not be (am not; is not; are not)',
    },
  ],
  [
    'ka-question',
    {
      id: 'ka-question',
      title: 'か',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%8b-ka-question-particle-meaning/',
      longDesc: `<p>question particle</p><p>何ですか？</p><p>What?</p>`,
      meaning: 'question particle',
    },
  ],
  [
    'ka-ka',
    {
      id: 'ka-ka',
      title: 'か～か',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%8b%ef%bd%9e%e3%81%8b-ka-ka-or-meaning/',
      longDesc: `<p>or</p><p>明日は雨かどうか分からない。</p><p>I'm not sure if it will rain or not tomorrow.</p>`,
      meaning: 'or',
    },
  ],
  [
    'kara',
    {
      id: 'kara',
      title: 'から',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%8b%e3%82%89-kara-meaning/',
      longDesc: `<p>because; since; from</p><p>天気がいいから、外に行きたい。</p><p>Since the weather is nice, I want to go outside.</p>`,
      meaning: 'because; since; from',
    },
  ],
  [
    'kata',
    {
      id: 'kata',
      title: '方 (かた）',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e6%96%b9-%e3%81%8b%e3%81%9f-kata-meaning/',
      longDesc: `<p>the way of doing something; how to do</p><p>パソコンの使いかたがわかりません。</p><p>I don't know how to use a computer.</p>`,
      meaning: 'the way of doing something; how to do',
    },
  ],
  [
    'kedo',
    {
      id: 'kedo',
      title: 'けど',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%91%e3%81%a9-kedo-meaning/',
      longDesc: `<p>but; however; although ~</p><p>仕事は辛いけど楽しい。</p><p>Work is tough, but fun.</p>`,
      meaning: 'but; however; although ~',
    },
  ],
  [
    'keredo-mo',
    {
      id: 'keredo-mo',
      title: 'けれども',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%91%e3%82%8c%e3%81%a9%e3%82%82-keredo-mo-meaning/',
      longDesc: `<p>but; however; although ~</p><p>このカメラは高かったけれど、すぐ壊れてしまいました。</p><p>This camera was really expensive, but it broke right away.</p>`,
      meaning: 'but; however; although ~',
    },
  ],
  [
    'mada',
    {
      id: 'mada',
      title: 'まだ',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%be%e3%81%a0-mada-meaning/',
      longDesc: `<p>still; not yet</p><p>まだですか？</p><p>Is it ready yet? / are we there yet? / Still...?</p>`,
      meaning: 'still; not yet',
    },
  ],
  [
    'mada-te-imasen',
    {
      id: 'mada-te-imasen',
      title: 'まだ～ていません',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%be%e3%81%a0%ef%bd%9e%e3%81%a6%e3%81%84%e3%81%be%e3%81%9b%e3%82%93-mada-te-imasen-meaning/',
      longDesc: `<p>have not yet ~</p><p>バスはまだ来ていません。</p><p>The bus still hasn't come.</p>`,
      meaning: 'have not yet ~',
    },
  ],
  [
    'made',
    {
      id: 'made',
      title: 'まで',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%be%e3%81%a7-made-meaning/',
      longDesc: `<p>until; as far as; to (an extent); even ~</p><p>昨日までお休みでした。</p><p>I was on vacation until yesterday.</p>`,
      meaning: 'until; as far as; to (an extent); even ~',
    },
  ],
  [
    'mae-ni',
    {
      id: 'mae-ni',
      title: '前に',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e5%89%8d%e3%81%ab-%e3%81%be%e3%81%88%e3%81%ab-mae-ni-meaning/',
      longDesc: `<p>before; in front of~</p><p>ドアを開ける前にノックぐらいしてください。</p><p>Before opening the door, please at least knock first.</p>`,
      meaning: 'before; in front of~',
    },
  ],
  [
    'masen-ka',
    {
      id: 'masen-ka',
      title: 'ませんか',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%be%e3%81%9b%e3%82%93%e3%81%8b-masen-ka-meaning/',
      longDesc: `<p>would you; do you want to; shall we ~</p><p>今日一緒に食べませんか？</p><p>Do you want to eat together today?</p>`,
      meaning: 'would you; do you want to; shall we ~',
    },
  ],
  [
    'mashouka',
    {
      id: 'mashouka',
      title: 'ましょうか',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%be%e3%81%97%e3%82%87%e3%81%86%e3%81%8b-mashouka-meaning/',
      longDesc: `<p>shall I ~; used to offer help to the listener</p><p>マドを開けましょうか。</p><p>Shall I open the window?</p>`,
      meaning: 'shall I ~; used to offer help to the listener',
    },
  ],
  [
    'mo',
    {
      id: 'mo',
      title: 'も',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%82%82-mo-particle-meaning/',
      longDesc: `<p>too; also; as well</p><p>私もできる。</p><p>I can do that too.</p>`,
      meaning: 'too; also; as well',
    },
  ],
  [
    'mou',
    {
      id: 'mou',
      title: 'もう',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%82%82%e3%81%86-mou-meaning/',
      longDesc: `<p>already; anymore; again; other</p><p>もう昼ご飯の時間だ。早く食べましょう！</p><p>It's lunch time already, let's hurry up and eat.</p>`,
      meaning: 'already; anymore; again; other',
    },
  ],
  [
    'na-adjectives',
    {
      id: 'na-adjectives',
      title: 'な-adjectives',
      link: 'https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%aa-adjectives-%e3%81%aa%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/',
      longDesc: `<div class="grammar-notes my-3"><p>Learn Japanese grammar: <span class="jp color">な-adjectives</span> (na-adjectives), also known as な形容詞 (na keiyoushi).</p><p>There are two kinds of adjectives in Japanese, <a target="_blank" class="jp" href="https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%84-adjectives-%e3%81%84%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/">i-adjectives (い形容詞)</a> and <a target="_blank" class="jp" href="https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%aa-adjectives-%e3%81%aa%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/">na-adjectives (な形容詞)</a>.</p><p>The na-adjective is very simple to learn because it acts essentially like a noun and the form does not change much. Let’s look at some basic examples.</p><h2 id="examples" class="full-mobile bg-full bg-n5 my-3 text-center">How to conjugate na-adjectives</h2><h2 class="mt-5">な-adjective (present)</h2><p>Let’s start with a basic adjective, 元気 【げんき】 (genki) which means energetic.</p><div class="ex-block"><p class="ja">その子は<span class="color">げんきだ</span>。</p><p class="gram-romaji">sono ko wa <span class="color">genki da</span>.</p><p class="gram-honyaku">That child is energetic.</p></div><div class="print-break"></div><p>When a na-adjective is placed before a noun, a な&nbsp;is added at the end of the adjective.</p><div class="ex-block"><p class="ja">かれは<span class="color">げんきな</span>子だね。</p><p class="gram-romaji">kare wa <span class="color">genki na</span> ko da ne.</p><p class="gram-honyaku">He is an energetic child.</p></div><h2 class="mt-5">な-adjective (present negative)</h2><div class="ex-block"><p class="ja">その子は<span class="color">げんきじゃない</span>ね。</p><p class="gram-romaji">sono ko wa <span class="color">genki janai</span> ne.</p><p class="gram-honyaku">That child is not very energetic.</p></div><h2 class="mt-5">な-adjective (past)</h2><div class="ex-block"><p class="ja">その子はとても<span class="color">げんきだった</span>ね。</p><p class="gram-romaji">sono ko wa totemo <span class="color">genki datta</span> ne.</p><p class="gram-honyaku">That child was really energetic.</p></div><h2 class="mt-5">な-adjective (past negative)</h2><div class="ex-block"><p class="ja">かれはあまり<span class="color">げんきじゃなかった</span>ね。</p><p class="gram-romaji">kare wa amari <span class="color">genki janakatta</span> ne.</p><p class="gram-honyaku">He wasn’t very energetic.</p></div><h2 class="mt-5">Other common na-adjectives</h2><ul><li><a target="_blank" class="jp" href="">上手</a> 　(jouzu)&nbsp;skill, proficiency</li><li><a target="_blank" class="jp" href="https://jlptsensei.com/learn-japanese-vocabulary/%e4%b8%8b%e6%89%8bheta-meaning-unskillful/">下手</a> 　(heta)&nbsp;unskilled</li><li>好き　(suki) like</li><li>有名　(yuumei) famous</li><li>きれい　(kirei)&nbsp;beautiful, clean, tidy</li></ul><div class="d-print-none"><h2 class="mt-5">Other References</h2><ul><li>See full <a rel="noreferrer noopener" aria-label="N5 adjectives (opens in a new tab)" href="/jlpt-n5-adjectives-vocabulary-list/" target="_blank">N5 adjectives list</a>.</li><li>See full <a href="https://jlptsensei.com/jlpt-n5-na-adjectives-list/" target="_blank" rel="noreferrer noopener">N5 な-adjectives list</a>.</li></ul><p>Also see lesson on <a target="_blank" class="jp" href="https://jlptsensei.com/learn-japanese-grammar/japanese-%e3%81%84-adjectives-%e3%81%84%e5%bd%a2%e5%ae%b9%e8%a9%9e-meaning/">い-adjectives (い形容詞)</a>.</p></div><hr><div class="row"><div class="col-md-6"><div class="text-center mt-4 grammar-thumbnail-cont"><div itemprop="image" itemscope="" itemtype="https://schema.org/ImageObject"><a target="_blank" href="https://jlptsensei.com/wp-content/uploads/2020/02/na-adjectives-な形容詞-jlpt-n5-grammar-meaning-文法例文-learn-japanese-flashcards-900x900.png"><img src="https://jlptsensei.com/wp-content/uploads/2020/02/na-adjectives-な形容詞-jlpt-n5-grammar-meaning-文法例文-learn-japanese-flashcards-200x200.png" alt="na-adjectives な形容詞 jlpt n5 grammar meaning 文法例文 learn japanese flashcards" class="img-responsive"></a><p class="mt-2 mb-0">Click the image to download the flashcard. <br>Download all <a href="/downloads/jlpt-n5-grammar-list-flashcards/" target="_blank">N5 grammar flashcards</a>.</p><meta itemprop="url" content="https://jlptsensei.com/wp-content/uploads/2020/02/na-adjectives-な形容詞-jlpt-n5-grammar-meaning-文法例文-learn-japanese-flashcards-900x900.png"></div></div></div><div class="col-md-6 text-center"><div class="mt-4 gl-ebook"> <a href="/downloads/jlpt-n5-grammar-master-e-book/" target="_blank"> <img src="/wp-content/uploads/2020/03/jlpt-n5-grammar-master-ebook-cover-200x200.png" alt="JLPT Grammar E-Book Download"> </a><p class="mt-2 mb-0">Download our complete <br><a href="/downloads/jlpt-n5-grammar-master-e-book/" target="_blank">JLPT N5 Grammar Master E-book</a>.</p></div></div></div><div class="wp-block-image gl-patron-block mt-4"><figure class="aligncenter size-full"><a href="/member-benefits" target="_blank" rel="noreferrer noopener"><img style="max-width: 250px;" src="https://jlptsensei.com/wp-content/uploads/2020/03/patron.png" alt="become a patron" class="wp-image-16627"></a></figure></div><p class="text-center mb-0">Access ALL extra downloads, ebooks, and study guides by supporting JLPT Sensei on <a href="https://www.patreon.com/jlptsensei" target="_blank" rel="noreferrer noopener">Patreon</a>.</p></div>`,
      meaning: 'na-adjectives',
    },
  ],
  [
    'naa',
    {
      id: 'naa',
      title: 'なあ',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%aa%e3%81%82-naa-sentence-ending-particle-meaning/',
      longDesc: `<p>sentence ending particle; confirmation; admiration, etc</p><p>たくさんの人がいるなあ。</p><p>Wow, there's a lot of people here.</p>`,
      meaning: 'sentence ending particle; confirmation; admiration, etc',
    },
  ],
  [
    'naide',
    {
      id: 'naide',
      title: 'ないで',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%aa%e3%81%84%e3%81%a7-naide-meaning/',
      longDesc: `<p>without doing~ ; To do [B] without doing [A]</p><p>コーヒーには、いつもさとうを入れないで飲みます。</p><p>I always drink coffee without putting any sugar in it.</p>`,
      meaning: 'I always drink coffee without putting any sugar in it.',
    },
  ],
  [
    'naide-kudasai',
    {
      id: 'naide-kudasai',
      title: 'ないでください',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%aa%e3%81%84%e3%81%a7%e3%81%8f%e3%81%a0%e3%81%95%e3%81%84-naide-kudasai-meaning/',
      longDesc: `<p>please don't do</p><p>コーヒーには、いつもさとうを入れないで飲みます。</p><p>I always drink coffee without putting any sugar in it.</p>`,
      meaning: "please don't do",
    },
  ],
  [
    'naito-ikenai',
    {
      id: 'naito-ikenai',
      title: 'ないといけない',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%aa%e3%81%84%e3%81%a8%e3%81%84%e3%81%91%e3%81%aa%e3%81%84-naito-ikenai-meaning/',
      longDesc: `<p>must do; have an obligation to do</p><p>そろそろ寝ないといけない。</p><p>I have to sleep soon.</p>`,
      meaning: 'must do; have an obligation to do',
    },
  ],
  [
    'nakutemoii',
    {
      id: 'nakutemoii',
      title: 'なくてもいい',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%aa%e3%81%8f%e3%81%a6%e3%82%82%e3%81%84%e3%81%84-naku-temo-ii-meaning/',
      longDesc: `<p>don't have to do</p><p>明日は休みだから、学校に行かなくてもいい。</p><p>Tomorrow is a day off, so I don't need to go to school.</p>`,
      meaning: "don't have to do",
    },
  ],
  [
    'nakucha',
    {
      id: 'nakucha',
      title: 'なくちゃ',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%aa%e3%81%8f%e3%81%a1%e3%82%83-%e3%83%80%e3%83%a1-nakucha-dame-meaning/',
      longDesc: `<p>must do; need to; gotta do</p><p>行かなくちゃ。</p><p>I gotta go.</p>`,
      meaning: 'must do; need to; gotta do',
    },
  ],
  [
    'nakute-wa-ikenai',
    {
      id: 'nakute-wa-ikenai',
      title: 'なくてはいけない',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%aa%e3%81%8f%e3%81%a6%e3%81%af%e3%81%84%e3%81%91%e3%81%aa%e3%81%84-nakute-wa-ikenai-meaning/',
      longDesc: `<p>must do; need to do</p><p>本当にすぐ行かなくてはいけない。</p><p>I gotta go.</p>`,
      meaning: 'must do; need to do',
    },
  ],
  [
    'nakute-wa-naranai',
    {
      id: 'nakute-wa-naranai',
      title: 'なくてはならない',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%aa%e3%81%8f%e3%81%a6%e3%81%af%e3%81%aa%e3%82%89%e3%81%aa%e3%81%84-nakute-wa-naranai-meaning/',
      longDesc: `<p>must do; need to do</p><p>急がなくてはならない。</p><p>I have to hurry.</p>`,
      meaning: 'must do; need to do',
    },
  ],
  [
    'naru',
    {
      id: 'naru',
      title: 'なる',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%aa%e3%82%8b-naru-meaning/',
      longDesc: `<p>to become</p><p>大きくなっているね！</p><p>You're getting bigger!</p>`,
      meaning: 'to become',
    },
  ],
  [
    'ndesu',
    {
      id: 'ndesu',
      title: 'んです',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%82%93%e3%81%a7%e3%81%99-ndesu-%e3%82%93%e3%81%a0-nda-meaning/',
      longDesc: `<p>to explain something; show emphasis</p><p>何を飲みたいんですか。</p><p>What would you like to drink?</p>`,
      meaning: 'to explain something; show emphasis',
    },
  ],
  [
    'ne',
    {
      id: 'ne',
      title: 'ね',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ad-ne-particle-meaning/',
      longDesc: `<p>isn't it? right? eh?</p><p>かわいいね。</p><p>It's cute, isn't it? / You're cute, eh.</p>`,
      meaning: "isn't it? right? eh?",
    },
  ],
  [
    'ni',
    {
      id: 'ni',
      title: 'に',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ab-ni-destination-particle-meaning/',
      longDesc: `<p>destination particle; in; at; on; to</p><p>来月大学に入る。</p><p>I will go to (start) university next month.</p>`,
      meaning: 'destination particle; in; at; on; to',
    },
  ],
  [
    'ni-iku',
    {
      id: 'ni-iku',
      title: 'にいく',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%97%e3%81%ab%e3%81%84%e3%81%8f-ni-iku-meaning/',
      longDesc: `<p>go to do</p><p>友だちの家に遊びに行く。</p><p>I'm going to go over to my friends house to hang out.</p>`,
      meaning: 'go to do',
    },
  ],
  [
    'ni-suru',
    {
      id: 'ni-suru',
      title: 'にする',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ab%e3%81%99%e3%82%8b-ni-suru-meaning/',
      longDesc: `<p>to decide on</p><p>どれにする?</p><p>Which will you have? / Which do you want?</p>`,
      meaning: 'to decide on',
    },
  ],
  [
    'ni-e',
    {
      id: 'ni-e',
      title: 'に/へ',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ab-%e3%81%b8-ni-e-directional-particle-meaning/',
      longDesc: `<p>to (indicates direction / destination)</p><p>日本に戻りたい。</p><p>I want to go back to Japan.</p>`,
      meaning: 'to (indicates direction / destination)',
    },
  ],
  [
    'no-desu',
    {
      id: 'no-desu',
      title: 'に/へ',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ae%e3%81%a7%e3%81%99-no-desu-%e3%81%ae%e3%81%a0-noda-meaning/',
      longDesc: `<p>to explain something; show emphasis</p><p>どこへ行きたいのですか。</p><p>Where would you like to go?</p>`,
      meaning: 'to explain something; show emphasis',
    },
  ],
  [
    'no-ga-heta-desu',
    {
      id: 'no-ga-heta-desu',
      title: 'のが下手',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ae%e3%81%8c%e4%b8%8b%e6%89%8b-%e3%81%ae%e3%81%8c%e3%81%b8%e3%81%9f-no-ga-heta-meaning/',
      longDesc: `<p>to be bad at doing something</p><p>彼はおはしを使うのが下手だ。</p><p>He is bad at using chopsticks.</p>`,
      meaning: 'to be bad at doing something',
    },
  ],
  [
    'no-ga-jouzu',
    {
      id: 'no-ga-jouzu',
      title: 'のが上手',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ae%e3%81%8c%e4%b8%8a%e6%89%8b-no-ga-jouzu-%e3%81%ae%e3%81%8c%e3%81%98%e3%82%87%e3%81%86%e3%81%9a%e3%81%a7%e3%81%99-meaning/',
      longDesc: `<p>to be good at</p><p>あなたは教えるのが上手です。</p><p>You're good at teaching.</p>`,
      meaning: 'to be good at',
    },
  ],
  [
    'no-ga-suki',
    {
      id: 'no-ga-suki',
      title: 'のが好き',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ae%e3%81%8c%e5%a5%bd%e3%81%8d-no-ga-suki-%e3%81%ae%e3%81%8c%e3%81%99%e3%81%8d%e3%81%a7%e3%81%99-meaning/',
      longDesc: `<p>to like doing something</p><p>私は寝るのが好きです。</p><p>I like to sleep / I like sleeping</p>`,
      meaning: 'to like doing something',
    },
  ],
  [
    'no-naka-de-a-ga-ichiban',
    {
      id: 'no-naka-de-a-ga-ichiban',
      title: 'の中で[A]が一番',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ae%e4%b8%ad%e3%81%a7%e3%81%8c%e4%b8%80%e7%95%aa-%e3%81%ae%e3%81%aa%e3%81%8b%e3%81%a7%e3%81%8c%e3%81%84%e3%81%a1%e3%81%b0%e3%82%93-no-naka-de-ga-ichiban-meaning/',
      longDesc: `<p>out of this group, [A] is best</p><p>家族のなかで父がいちばん背が高いです。</p><p>In my family, my father is the tallest.</p>`,
      meaning: 'out of this group, [A] is best',
    },
  ],
  [
    'no-de',
    {
      id: 'no-de',
      title: 'ので',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%ae%e3%81%a7-node-meaning/',
      longDesc: `<p>because of; given that; since</p><p>ちょっと寒いので、窓を閉めてもいいですか。</p><p>It's a bit cold, so is it OK to close the window?</p>`,
      meaning: 'because of; given that; since',
    },
  ],
  [
    'o-go',
    {
      id: 'o-go',
      title: 'お / ご ',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e5%be%a1-%e3%81%8a-%e3%81%94-o-go-polite-marker-particle-meaning/',
      longDesc: `<p>polite marker; honorific prefix particle</p><p>金曜日はおひまですか？</p><p>Are you free on Friday?</p>`,
      meaning: 'polite marker; honorific prefix particle',
    },
  ],
  [
    'o-wo',
    {
      id: 'o-wo',
      title: 'を',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%82%92-wo-object-marker-meaning/',
      longDesc: `<p>object marker particle</p><p>日本語をべんきょうしています。</p><p>I am studying Japanese.</p>`,
      meaning: 'object marker particle',
    },
  ],
  [
    'o-kudasai',
    {
      id: 'o-kudasai',
      title: 'をください',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%82%92%e3%81%8f%e3%81%a0%e3%81%95%e3%81%84-o-kudasai-meaning/',
      longDesc: `<p>please give me ~</p><p>すみません、お水をください。</p><p>Excuse me, could you please give me some water?</p>`,
      meaning: 'please give me ~',
    },
  ],
  [
    'shikashi',
    {
      id: 'shikashi',
      title: 'しかし',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%97%e3%81%8b%e3%81%97-shikashi-meaning/',
      longDesc: `<p>but; however ~</p><p>しかしなぜ？</p><p>But why? (expressing disagreement)</p>`,
      meaning: 'but; however ~',
    },
  ],
  [
    'sorekara',
    {
      id: 'sorekara',
      title: 'それから',
      link: 'https://jlptsensei.com/learn-japanese-grammar/%e3%81%9d%e3%82%8c%e3%81%8b%e3%82%89-sore-kara-meaning/',
      longDesc: `<p>and; and then; after that; since then</p><p>それから、私は昼ごはんを食べました。</p><p>And then, I ate lunch.</p>`,
      meaning: 'and; and then; after that; since then',
    },
  ],
]);

export default grammarHash;
