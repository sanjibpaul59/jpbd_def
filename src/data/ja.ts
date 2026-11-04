import type { SiteContent } from "@/src/data/types";

export const ja = {
  locale: "ja",
  forumName: "日本バングラデシュ開発交流フォーラム",
  tagline: "友好 · 協力 · 共栄",
  year: 2026,
  description:
    "日本バングラデシュ開発交流フォーラムは、日本とバングラデシュの友好、協力、共栄を築きます。",
  brandMain: "日本・バングラデシュ",
  brandSub: "開発交流フォーラム",
  nav: [
    { hash: "#about", label: "概要" },
    { hash: "#pillars", label: "重点" },
    { hash: "#programmes", label: "プログラム" },
    { hash: "#gallery", label: "ギャラリー" },
    { hash: "#events", label: "催し" },
    { hash: "#partnership", label: "連携" },
    { hash: "#news", label: "知らせ" },
    { hash: "#take-part", label: "参加" },
  ],
  chrome: {
    skip: "本文へ進む",
    menu: "メニュー",
    close: "閉じる",
    primaryNav: "メインメニュー",
    footerNav: "フッター",
    language: "言語",
    languageEnglish: "English",
    languageJapanese: "日本語",
    previousPhoto: "前の写真",
    nextPhoto: "次の写真",
  },
  slides: [
    {
      src: "/images/carousel-friendship.jpg",
      alt: "朝の静かな水面のほとりに咲く桜",
      kicker: "友好",
      caption: "敬意と信頼に支えられた、長い友好。",
    },
    {
      src: "/images/carousel-lotus.jpg",
      alt: "夕暮れの緑の池に浮かぶ白い蓮",
      kicker: "協力",
      caption: "文化、学び、公共の場にまたがる共同の営み。",
    },
    {
      src: "/images/carousel-exchange.jpg",
      alt: "並木の大学道を歩く学生たち",
      kicker: "共栄",
      caption: "両国を行き来しながら学ぶ、次の世代。",
    },
  ],
  galleryHeading: {
    kicker: "ギャラリー",
    title: "交流の光景",
  },
  gallery: [
    {
      src: "/images/gallery-blossom.jpg",
      alt: "暗い枝に咲くピンクと白の桜",
      caption: "春の花",
    },
    {
      src: "/images/gallery-lotus.jpg",
      alt: "濃い緑の水面に浮かぶ白い蓮",
      caption: "静水の蓮",
    },
    {
      src: "/images/gallery-dialogue.jpg",
      alt: "木のテーブルを挟んで、閉じたフォルダーを交わす手",
      caption: "仕事の対話",
    },
    {
      src: "/images/gallery-youth.jpg",
      alt: "小さなテーブルを囲んで話す三人を、後ろから見た光景",
      caption: "青年の対話",
    },
    {
      src: "/images/gallery-energy.jpg",
      alt: "高い緑の草のそばに並ぶ太陽光パネル",
      caption: "クリーンエネルギー",
    },
    {
      src: "/images/gallery-craft.jpg",
      alt: "紅、緑、金に畳まれた絹",
      caption: "織物と工芸",
    },
  ],
  hero: {
    lead: "日本とバングラデシュの、より強く、より豊かで、より持続可能な連携を築きます。",
    ctaHash: "#pillars",
    ctaLabel: "六つの柱",
  },
  about: {
    kicker: "概要",
    title: "二つの国をつなぐ橋",
    body: "日本バングラデシュ開発交流フォーラムは、日本とバングラデシュの友好と協力を強める非営利の人的交流団体です。政府、企業、大学、研究機関、市民社会、そして若い世代をつなぎ、相互理解と長期的な発展を育む協力の機会をつくります。",
    src: "/images/about-bridge.jpg",
    alt: "朝もやの緑の木々のあいだ、静かな水面に架かる石の歩道橋",
  },
  purpose: {
    kicker: "目的",
    title: "友好を、具体的な行動へ",
    missionLabel: "使命",
    visionLabel: "展望",
    mission:
      "貿易、教育、文化、革新、そして人と人との交流を通じて、両国の永続的な友好と協力を進めます。",
    missionImage: {
      src: "/images/purpose-mission.jpg",
      alt: "木のテーブルを挟んで、閉じた緑の本を交わす二組の手",
    },
    vision:
      "日本とバングラデシュが信頼できる相手として共に成長し、次の世代のために包摂的で持続可能な共栄を実現する未来を目指します。",
    visionImage: {
      src: "/images/purpose-vision.jpg",
      alt: "夜明けの静かな川と、遠くに連なる並木の岸",
    },
  },
  pillarsHeading: {
    kicker: "重点",
    title: "より強い連携のための六つの柱",
  },
  pillars: [
    {
      number: "01",
      title: "経済協力",
      summary: "貿易、投資、事業連携。",
      src: "/images/pillar-economy.jpg",
      alt: "夜明けの静かな港。遠くに船、その向こうに緑の丘",
    },
    {
      number: "02",
      title: "教育と人材育成",
      summary: "奨学金、技能の向上、学術交流。",
      src: "/images/pillar-education.jpg",
      alt: "日の当たる机の上の布装の本と、閉じたノート",
    },
    {
      number: "03",
      title: "文化と人的交流",
      summary: "文化と多様性を尊ぶ交流。",
      src: "/images/pillar-culture.jpg",
      alt: "象牙色の布の上に置かれた桜と白い蓮",
    },
    {
      number: "04",
      title: "技術と革新",
      summary: "デジタル化、グリーン技術、スタートアップ。",
      src: "/images/pillar-technology.jpg",
      alt: "整った机の上の閉じたノートパソコンと、小さな植物",
    },
    {
      number: "05",
      title: "青年のリーダーシップ",
      summary: "次世代のリーダーを育てます。",
      src: "/images/pillar-youth.jpg",
      alt: "並木道を遠ざかる四人の若者",
    },
    {
      number: "06",
      title: "持続可能な開発",
      summary: "環境に配慮し、健やかでしなやかな社会。",
      src: "/images/pillar-sustain.jpg",
      alt: "朝の静かな水面に沿うマングローブ",
    },
  ],
  programmesHeading: {
    kicker: "プログラム",
    title: "文化、教育、青年、持続可能な開発",
  },
  programmes: [
    {
      title: "心をつなぎ、暮らしを豊かにする",
      summary:
        "文化、芸術、スポーツ、地域の活動、教育交流を通じて、フォーラムは両国の共通の価値を分かち合い、人と人とのつながりを深め、長く続く友好を育みます。",
      src: "/images/programme-culture.jpg",
      alt: "木々のあいだに灯る灯籠と、中庭の空の木の舞台",
    },
    {
      title: "人に投資し、未来を築く",
      points: [
        "大学と教育機関の交流",
        "奨学金と学ぶ機会",
        "日本語の力と専門技能",
        "研究と革新の協力",
        "専門家のネットワークと知識の共有",
      ],
      src: "/images/programme-learning.jpg",
      alt: "長い木の机に布装の本が並ぶ、日の当たる閲覧室",
    },
    {
      title: "次の世代のリーダーを育てる",
      summary:
        "若い世代は、日本とバングラデシュの関係の未来を形づくるうえで大切な役割を担います。フォーラムは、リーダーシップ研修、青年フォーラムと政策対話、起業とスタートアップの支援、異文化の交流、次世代の専門家ネットワークを進めます。",
      src: "/images/programme-youth.jpg",
      alt: "並木道を遠ざかる三人を、後ろから見た光景",
    },
    {
      title: "より緑に、より健やかで、よりしなやかな未来へ",
      points: [
        "クリーンエネルギーとグリーン技術",
        "気候変動への備えとしなやかさ",
        "賢く持続可能な都市",
        "環境の保全",
        "知識の共有と責任ある革新",
      ],
      src: "/images/programme-green.jpg",
      alt: "日の出の静かな水面に沿うマングローブ",
    },
  ],
  gatheringsHeading: {
    kicker: "催し",
    title: "これからの集い",
    body: "フォーラムは、会合、政策対話、学術交流、文化の集いを通じて、日本とバングラデシュの人々を結びつけます。",
  },
  standingGatherings: [
    {
      title: "青年フォーラムと政策対話",
      summary:
        "リーダーシップ研修、青年フォーラム、政策対話、起業支援、次世代の専門家ネットワーク。",
    },
    {
      title: "大学と専門家の交流",
      summary: "大学と教育機関の交流、奨学金、日本語と専門技能、研究協力。",
    },
    {
      title: "文化と地域の交流",
      summary:
        "文化、芸術、スポーツ、地域の活動を通じて共通の価値を分かち合い、長く続く友好を育みます。",
    },
  ],
  gatherings: [
    {
      title: "文化の夕べ",
      when: "2026年11月18日",
      place: "ダッカ",
      summary: "両国の文化、芸術、地域の交流を紹介する見本の夕べです。",
      src: "/images/event-culture.jpg",
      alt: "灯籠がともり、低い木の舞台がある屋外の中庭",
    },
    {
      title: "青年リーダーシップ・フォーラム",
      when: "2027年3月12日",
      place: "ダッカ",
      summary: "リーダーシップ研修、政策対話、次世代のネットワークのための見本の集いです。",
      src: "/images/event-forum.jpg",
      alt: "淡い色の椅子と高い窓のある、人のいない会議室",
    },
    {
      title: "大学交流対話",
      when: "2027年6月4日",
      place: "東京",
      summary: "奨学金、研究協力、学術交流のための見本の対話です。",
      src: "/images/event-study.jpg",
      alt: "木の机と緑のランプがある、静かな図書館の閲覧室",
    },
  ],
  partnership: {
    kicker: "連携",
    title: "深まる連携",
    body: "日本とバングラデシュは、相互の敬意と信頼、平和、開発、そして人間の尊厳への共通の思いに支えられた長い友好を築いてきました。両国は共に、より強い経済、より深い文化のつながり、より包摂的で持続可能な未来を築くことができます。",
    src: "/images/partnership-dialogue.jpg",
    alt: "高い窓のそばに二つのカップと閉じたフォルダーが置かれた、人のいない会議机",
    with: [
      "政府機関",
      "外交官と大使館関係者",
      "企業",
      "大学",
      "市民社会団体",
      "若いリーダー",
    ],
  },
  bulletin: [],
  news: {
    kicker: "知らせ",
    title: "二つの国のあいだで共有される知識",
    body: "研究と革新の協力、専門家のネットワーク、知識の共有は、フォーラムが日本とバングラデシュをつなぐ方法の一部です。",
    src: "/images/news-study.jpg",
    alt: "木の棚と布装の本が並ぶ、静かな図書館の通路",
  },
  contactEmail: "",
  joinEndpoint: "",
  joinForm: {
    submitLabel: "関心を伝える",
    thanksTitle: "ありがとうございます",
    thanksBody: "関心を受け付けました。",
    sendError: "送信できませんでした。もう一度お試しください。",
    interestGeneral: "交流全般",
    nameLabel: "氏名",
    emailLabel: "メール",
    affiliationLabel: "所属",
    interestLabel: "関心のある分野",
    interestPlaceholder: "分野を選ぶ",
    purposeLabel: "参加したい理由",
  },
  breakAfterProgrammes: {
    src: "/images/band-water.jpg",
    alt: "夕暮れの静かな池に咲く白い蓮",
    caption: "静かな水、共有する大地。",
  },
  breakAfterEvents: {
    src: "/images/band-path.jpg",
    alt: "朝の、人のいない並木道",
    caption: "共に歩く道。",
  },
  takePart: {
    kicker: "参加",
    title: "交流のなかの席",
    body: "政府機関、外交官と大使館関係者、企業、大学、市民社会団体、若いリーダーと共に、フォーラムは友好、協力、共栄の新しい章を開きます。",
    src: "/images/takepart-open.jpg",
    alt: "緑の庭の小道に開いた木の戸口",
  },
  closing: {
    title: "共に、より強い未来へ",
    pair: "日本 · バングラデシュ",
    body: "フォーラムは、友好、協力、共栄の新しい章を開きます。",
  },
} satisfies SiteContent;
