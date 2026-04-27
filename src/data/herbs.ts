// 药食同源中药数据结构
export interface Herb {
  id: string;
  name: string;              // 中文名称
  latinName: string;         // 拉丁名称
  category: HerbCategory;    // 分类
  aliases: string[];         // 别名
  description: string;       // 简介
  efficacy: string[];        // 功效列表
  medicinalValue: string;    // 药用价值
  edibleValue: string;       // 食用价值
  usage: string[];           // 服用方法
  contraindications: string[]; // 禁忌
  imageUrl: string;          // 图片URL
  color: string;             // 主色调（用于装饰）
}

export type HerbCategory =
  | '补益药'    // 补气、补血、补阳、补阴
  | '清热药'    // 清热解毒、清热凉血
  | '理气药'    // 行气、解郁
  | '消食药'    // 消食化积
  | '利水渗湿药' // 利水消肿、祛湿
  | '活血化瘀药' // 活血通经
  | '止咳平喘药' // 化痰止咳
  | '其他';     // 其他类别

// 药食同源中药数据库
export const herbsData: Herb[] = [
  {
    id: 'dangshen',
    name: '党参',
    latinName: 'Codonopsis pilosula',
    category: '补益药',
    aliases: ['潞党参', '台党参', '纹党参'],
    description: '党参为桔梗科植物党参的干燥根，原产山西上党，故称党参。是中医传统的补益药，具有与人参相似的益气生津功效。',
    efficacy: ['补中益气', '健脾益肺', '养血生津', '增强免疫力'],
    medicinalValue: '党参含有多糖、皂苷等活性成分，具有提高机体免疫功能、抗疲劳、抗氧化、降血压、升高血糖等作用。常用于治疗脾肺气虚、食少倦怠、咳嗽虚喘、气血不足等症。',
    edibleValue: '党参可入汤、粥、茶等日常膳食，如党参炖鸡、党参红枣茶、党参粥等。味道甘甜，适合日常养生保健，可作为煲汤材料长期食用。',
    usage: ['煎汤内服', '炖汤佐料', '泡茶饮用', '煮粥食用'],
    contraindications: ['实证、热证者慎用', '不宜与藜芦同用', '孕妇慎用'],
    imageUrl: '/herbs/dangshen.jpg',
    color: '#8B4513'
  },
  {
    id: 'huangqi',
    name: '黄芪',
    latinName: 'Astragalus membranaceus',
    category: '补益药',
    aliases: ['北芪', '绵黄芪', '膜荚黄芪'],
    description: '黄芪为豆科植物蒙古黄芪或荚膜黄芪的干燥根，是中国传统医学中最重要的补气药物之一，素有"补气之长"之美誉。',
    efficacy: ['补气升阳', '固表止汗', '利水消肿', '生津养血', '行滞通痹', '托毒排脓', '敛疮生肌'],
    medicinalValue: '黄芪含有黄芪多糖、黄酮类化合物等，具有增强免疫功能、强心、降压、保肝、利尿、抗衰老、抗疲劳等作用。对免疫系统、心血管系统有显著调节作用。',
    edibleValue: '黄芪是常见的药食同源材料，可泡茶、煮粥、炖汤。如黄芪红枣茶、黄芪枸杞粥、黄芪炖排骨等。性质温和，适合长期调理使用。',
    usage: ['煎汤内服', '泡茶饮用', '煮粥食用', '炖汤佐料'],
    contraindications: ['阴虚火旺者慎用', '表实邪盛者忌用', '食积停滞者慎用'],
    imageUrl: '/herbs/huangqi.jpg',
    color: '#DAA520'
  },
  {
    id: 'gouqi',
    name: '枸杞子',
    latinName: 'Lycium barbarum',
    category: '补益药',
    aliases: ['枸杞', '甘枸杞', '西枸杞', '宁夏枸杞'],
    description: '枸杞子为茄科植物宁夏枸杞的干燥成熟果实，主产于宁夏、甘肃等地，是传统的滋补肝肾、明目益精佳品。',
    efficacy: ['滋补肝肾', '益精明目', '润肺止咳', '补血安神'],
    medicinalValue: '枸杞子富含枸杞多糖、类胡萝卜素、维生素等，具有增强免疫、抗氧化、抗衰老、降血糖、降血脂、保肝明目等功效。对肝肾亏虚、视力减退有良好疗效。',
    edibleValue: '枸杞食用方式多样，可直接嚼食、泡茶、煮粥、煲汤、泡酒等。味道甘甜可口，是日常养生的常用食材，如枸杞菊花茶、枸杞银耳羹、枸杞炖燕窝等。',
    usage: ['直接嚼食', '泡茶饮用', '煮粥食用', '炖汤佐料', '泡酒'],
    contraindications: ['外邪实热、脾虚湿盛者慎用', '大便溏泄者慎用'],
    imageUrl: '/herbs/gouqi.jpg',
    color: '#DC143C'
  },
  {
    id: 'honghua',
    name: '红花',
    latinName: 'Carthamus tinctorius',
    category: '活血化瘀药',
    aliases: ['草红花', '刺红花', '杜红花', '金红花'],
    description: '红花为菊科植物红花的干燥花，是传统的活血化瘀药，具有"活血通经、散瘀止痛"的功效。',
    efficacy: ['活血通经', '散瘀止痛', '消肿解毒', '降低血脂'],
    medicinalValue: '红花含有红花黄色素、红花苷等成分，具有改善微循环、抗凝血、扩张血管、降血压、降血脂、镇痛抗炎等作用。常用于治疗经闭、痛经、恶露不行、跌打损伤等。',
    edibleValue: '红花可用于药膳，如红花蒸蛋、红花炖牛肉、红花粥等。在烹饪中可作为天然色素使用，赋予菜肴金黄或橙红色泽，并增添独特香气。',
    usage: ['煎汤内服', '泡茶饮用', '炖汤佐料', '药膳烹饪'],
    contraindications: ['孕妇禁用', '月经过多者慎用', '有出血倾向者慎用'],
    imageUrl: '/herbs/honghua.jpg',
    color: '#FF6347'
  },
  {
    id: 'shanyao',
    name: '山药',
    latinName: 'Dioscorea opposita',
    category: '补益药',
    aliases: ['怀山药', '淮山', '山薯', '玉延'],
    description: '山药为薯蓣科植物薯蓣的干燥根茎，药食两用历史悠久，具有补脾养胃、生津益肺、补肾涩精的功效。',
    efficacy: ['补脾养胃', '生津益肺', '补肾涩精', '降低血糖', '延缓衰老'],
    medicinalValue: '山药含有淀粉酶、多酚氧化酶、黏液蛋白、薯蓣皂苷等，具有助消化、降血糖、增强免疫、延缓衰老、保护胃黏膜等作用。对脾虚食少、肺虚久咳、肾虚遗精等有良效。',
    edibleValue: '山药是常见蔬菜，可炒、炖、蒸、煮粥、做糕点。如清炒山药、山药排骨汤、蓝莓山药、山药粥等。口感绵软，适合各年龄段人群食用。',
    usage: ['炒菜食用', '炖汤煮粥', '蒸熟食用', '制作糕点'],
    contraindications: ['湿盛中满者慎用', '有实邪者忌用', '不宜与甘遂同用'],
    imageUrl: '/herbs/shanyao.jpg',
    color: '#F5DEB3'
  },
  {
    id: 'chenpi',
    name: '陈皮',
    latinName: 'Citrus reticulata',
    category: '理气药',
    aliases: ['橘皮', '广陈皮', '新会皮', '贵老'],
    description: '陈皮为芸香科植物橘及其栽培变种的干燥成熟果皮，以广东新会产者最为著名，素有"陈久者良"之说。',
    efficacy: ['理气健脾', '燥湿化痰', '开胃消食', '降逆止呕'],
    medicinalValue: '陈皮含有挥发油、黄酮类化合物等，具有促进消化液分泌、抗菌消炎、祛痰平喘、解除胃肠痉挛、利胆保肝等作用。对消化不良、咳嗽痰多、呕吐呃逆有显著疗效。',
    edibleValue: '陈皮可泡茶、煮粥、炖汤、调味。如陈皮普洱茶、陈皮红豆沙、陈皮炖肉等。香气独特，能去腥提鲜，是广东菜系的重要调味料。',
    usage: ['泡茶饮用', '炖汤佐料', '煮粥食用', '调味去腥'],
    contraindications: ['阴虚燥咳者慎用', '内有实热者慎用', '舌红少津者慎用'],
    imageUrl: '/herbs/chenpi.jpg',
    color: '#FF8C00'
  },
  {
    id: 'baizhu',
    name: '白术',
    latinName: 'Atractylodes macrocephala',
    category: '补益药',
    aliases: ['於术', '冬术', '浙术', '贡术'],
    description: '白术为菊科植物白术的干燥根茎，以浙江於潜产者质量最佳，称为"於术"，具有健脾益气、燥湿利水的功效。',
    efficacy: ['健脾益气', '燥湿利水', '止汗安胎', '增强免疫'],
    medicinalValue: '白术含有挥发油、白术多糖、白术三醇等，具有调节胃肠功能、保肝利胆、利尿消肿、增强免疫、抗氧化、抗肿瘤等作用。对脾虚食少、腹胀泄泻、水肿、自汗等有良效。',
    edibleValue: '白术可入粥、汤、茶等。如白术茯苓粥、白术炖鸡、白术茶等。味道清香略带甘苦，适合脾胃虚弱者长期调理。',
    usage: ['煎汤内服', '煮粥食用', '炖汤佐料', '泡茶饮用'],
    contraindications: ['阴虚内热、津亏燥渴者慎用', '气滞胀闷者慎用'],
    imageUrl: '/herbs/baizhu.jpg',
    color: '#F0E68C'
  },
  {
    id: 'shengjiang',
    name: '生姜',
    latinName: 'Zingiber officinale',
    category: '其他',
    aliases: ['鲜姜', '老姜', '姜根', '百辣云'],
    description: '生姜为姜科植物姜的新鲜根茎，是药食同源的典范，具有解表散寒、温中止呕、温肺止咳的功效。',
    efficacy: ['解表散寒', '温中止呕', '温肺止咳', '解毒抗菌', '促进消化'],
    medicinalValue: '生姜含有姜辣素、姜烯酚、姜酮等活性成分，具有解热镇痛、抗炎抗菌、抗氧化、促进胃肠蠕动、止呕抗晕等作用。对风寒感冒、胃寒呕吐、寒痰咳嗽等有显著疗效。',
    edibleValue: '生姜是厨房必备调味品，可入菜、泡茶、煮糖水。如姜丝炒肉、姜茶红糖、姜撞奶、姜丝可乐等。用途广泛，是驱寒暖胃的日常佳品。',
    usage: ['烹饪调味', '泡茶饮用', '煎汤内服', '外敷使用'],
    contraindications: ['阴虚内热、热盛出血者慎用', '痔疮患者慎用', '服用抗凝药物者慎用'],
    imageUrl: '/herbs/shengjiang.jpg',
    color: '#F4A460'
  },
  {
    id: 'bohe',
    name: '薄荷',
    latinName: 'Mentha haplocalyx',
    category: '清热药',
    aliases: ['薄荷叶', '野薄荷', '银丹草', '升阳菜'],
    description: '薄荷为唇形科植物薄荷的干燥地上部分，气味清香，性辛凉，是常用的发散风热药。',
    efficacy: ['疏散风热', '清利头目', '利咽透疹', '疏肝行气', '芳香辟秽'],
    medicinalValue: '薄荷含有薄荷醇、薄荷酮、柠檬烯等，具有清凉镇痛、抗菌消炎、驱风解痉、祛痰平喘、局部麻醉等作用。对风热感冒、头痛目赤、咽喉肿痛、口疮等有显著疗效。',
    edibleValue: '薄荷可用于泡茶、制作饮品、烹饪调味。如薄荷茶、薄荷柠檬水、薄荷糕点、薄荷炒蛋等。清凉爽口，是夏季消暑解渴的佳品。',
    usage: ['泡茶饮用', '制作饮品', '烹饪调味', '口腔含服'],
    contraindications: ['阴虚发热、盗汗自汗者慎用', '脾胃虚寒者慎用', '孕妇慎用'],
    imageUrl: '/herbs/bohe.jpg',
    color: '#32CD32'
  },
  {
    id: 'jinyinhua',
    name: '金银花',
    latinName: 'Lonicera japonica',
    category: '清热药',
    aliases: ['忍冬花', '双花', '二花', '银花'],
    description: '金银花为忍冬科植物忍冬的干燥花蕾或带初开的花，因初开时白色，后转黄色而得名，具有清热解毒、疏散风热的功效。',
    efficacy: ['清热解毒', '疏散风热', '凉血止痢', '抗菌消炎', '抗病毒'],
    medicinalValue: '金银花含有绿原酸、木犀草苷、挥发油等，具有广谱抗菌、抗病毒、解热抗炎、保肝利胆、调节免疫等作用。对风热感冒、温病发热、咽喉肿痛、热毒血痢等有显著疗效。',
    edibleValue: '金银花常用于泡茶、煮水。如金银花茶、金银花露、金银花绿豆汤等。味道清香微苦，是夏季清热消暑的常用饮品。',
    usage: ['泡茶饮用', '煎汤内服', '煮水代茶', '制作凉茶'],
    contraindications: ['脾胃虚寒及疮疡属阴证者慎用', '气虚疮疡脓清者慎用'],
    imageUrl: '/herbs/jinyinhua.jpg',
    color: '#FFD700'
  },
  {
    id: 'juemingzi',
    name: '决明子',
    latinName: 'Cassia obtusifolia',
    category: '清热药',
    aliases: ['草决明', '马蹄决明', '还瞳子', '假绿豆'],
    description: '决明子为豆科植物决明或小决明的干燥成熟种子，因其具有明目功效而得名，是清肝明目的常用药。',
    efficacy: ['清肝明目', '润肠通便', '降压降脂', '清热泻火'],
    medicinalValue: '决明子含有大黄酚、大黄素、决明子苷等，具有泻下通便、降压降脂、保肝明目、抗菌消炎、抗氧化等作用。对目赤肿痛、羞明多泪、便秘、高血压等有显著疗效。',
    edibleValue: '决明子可泡茶、煮粥、研粉食用。如决明子茶、决明子菊花茶、决明子粥等。炒制后香气更浓，适合长期服用调理。',
    usage: ['泡茶饮用', '煮粥食用', '研粉冲服', '做枕头芯'],
    contraindications: ['脾虚泄泻、低血压者慎用', '孕妇慎用'],
    imageUrl: '/herbs/juemingzi.jpg',
    color: '#8B4513'
  },
  {
    id: 'dazao',
    name: '大枣',
    latinName: 'Ziziphus jujuba',
    category: '补益药',
    aliases: ['红枣', '枣子', '干枣', '美枣'],
    description: '大枣为鼠李科植物枣的干燥成熟果实，是中国特有的药食同源佳品，具有补中益气、养血安神的功效。',
    efficacy: ['补中益气', '养血安神', '缓和药性', '健脾和胃', '增强免疫'],
    medicinalValue: '大枣含有环磷酸腺苷、有机酸、维生素、矿物质等，具有增强免疫、抗疲劳、保护肝脏、镇静安神、抗过敏等作用。对脾虚食少、乏力便溏、妇人脏躁有显著疗效。',
    edibleValue: '大枣可直接食用、泡茶、煮粥、炖汤、做糕点。如红枣茶、红枣银耳羹、红枣桂圆粥、红枣炖鸡等。味道甘甜，是老少皆宜的滋补佳品。',
    usage: ['直接食用', '泡茶饮用', '煮粥食用', '炖汤佐料'],
    contraindications: ['湿盛中满、痰热咳嗽者慎用', '不宜与葱、鱼类同食', '糖尿病患者慎用'],
    imageUrl: '/herbs/dazao.jpg',
    color: '#8B0000'
  },
  {
    id: 'hongzao',
    name: '黑枣',
    latinName: 'Ziziphus jujuba var. spinosa',
    category: '补益药',
    aliases: ['君迁子', '野柿子', '软枣', '牛奶柿'],
    description: '黑枣为柿树科植物君迁子的成熟果实，经熏制或蒸晒而成，具有补中益气、养血安神的功效。',
    efficacy: ['补中益气', '养血安神', '补肾养胃', '润肠通便'],
    medicinalValue: '黑枣含有丰富的维生素、矿物质、膳食纤维等，具有补血养血、增强免疫、抗氧化、润肠通便等作用。对血虚萎黄、眩晕心悸、失眠多梦等有显著疗效。',
    edibleValue: '黑枣可直接食用、泡茶、煮粥、炖汤。如黑枣茶、黑枣桂圆汤、黑枣小米粥等。味道甜糯，是冬季进补的常用食材。',
    usage: ['直接食用', '泡茶饮用', '煮粥食用', '炖汤佐料'],
    contraindications: ['脾胃虚寒者慎用', '糖尿病患者慎用', '不宜与柿子同食'],
    imageUrl: '/herbs/heizao.jpg',
    color: '#2F4F4F'
  },
  {
    id: 'shanzha',
    name: '山楂',
    latinName: 'Crataegus pinnatifida',
    category: '消食药',
    aliases: ['红果', '山里红', '胭脂果', '猴楂'],
    description: '山楂为蔷薇科植物山里红或山楂的干燥成熟果实，味酸甘，是消食化积的常用药。',
    efficacy: ['消食健胃', '行气散瘀', '化浊降脂', '收敛止痢'],
    medicinalValue: '山楂含有山楂酸、黄酮类、三萜类等，具有促进消化液分泌、抗菌消炎、扩张血管、降压降脂、强心抗心绞痛等作用。对肉食积滞、胃脘胀满、高脂血症等有显著疗效。',
    edibleValue: '山楂可鲜食、制干、泡茶、做糕点。如冰糖葫芦、山楂茶、山楂糕、山楂片等。酸甜可口，是消食开胃的零食佳品。',
    usage: ['鲜食', '泡茶饮用', '制干食用', '制作糕点'],
    contraindications: ['胃酸过多者慎用', '脾胃虚弱者慎用', '孕妇慎用', '不宜与海鲜同食'],
    imageUrl: '/herbs/shanzha.jpg',
    color: '#FF4500'
  },
  {
    id: 'maidong',
    name: '麦冬',
    latinName: 'Ophiopogon japonicus',
    category: '补益药',
    aliases: ['麦门冬', '寸冬', '沿阶草', '不死药'],
    description: '麦冬为百合科植物麦冬的干燥块根，因产于浙江杭州一带又称"杭麦冬"，具有养阴生津、润肺清心的功效。',
    efficacy: ['养阴生津', '润肺清心', '益胃生津', '除烦安神'],
    medicinalValue: '麦冬含有麦冬多糖、甾体皂苷、黄酮类等，具有镇静催眠、抗心肌缺血、抗心律失常、降血糖、润肠通便、抗炎等作用。对肺燥干咳、阴虚劳嗽、喉痹咽痛等有显著疗效。',
    edibleValue: '麦冬可泡茶、煮粥、炖汤。如麦冬茶、麦冬沙参粥、麦冬玉竹汤等。味道甘微苦，是滋阴润燥的常用食材。',
    usage: ['泡茶饮用', '煮粥食用', '炖汤佐料', '煎汤内服'],
    contraindications: ['风寒感冒、脾胃虚寒、痰湿内盛者慎用'],
    imageUrl: '/herbs/maidong.jpg',
    color: '#90EE90'
  },
  {
    id: 'baishao',
    name: '白芍',
    latinName: 'Paeonia lactiflora',
    category: '补益药',
    aliases: ['白芍药', '杭芍', '川芍', '金芍药'],
    description: '白芍为毛茛科植物芍药的干燥根，具有养血柔肝、缓急止痛、敛阴止汗的功效。',
    efficacy: ['养血柔肝', '缓急止痛', '敛阴止汗', '平抑肝阳', '调经止血'],
    medicinalValue: '白芍含有芍药苷、苯甲酸、鞣质等，具有镇静镇痛、抗炎抗菌、护肝解痉、抗心肌缺血、调节免疫等作用。对血虚肝旺、头晕目眩、胁肋疼痛、月经不调等有显著疗效。',
    edibleValue: '白芍可入粥、汤、茶等。如白芍炖乌鸡、白芍粥、白芍茶等。常与当归、川芎、熟地等同用，是妇科调养的常用材料。',
    usage: ['煎汤内服', '煮粥食用', '炖汤佐料', '泡茶饮用'],
    contraindications: ['阳衰虚寒者慎用', '不宜与藜芦同用'],
    imageUrl: '/herbs/baishao.jpg',
    color: '#FAFAD2'
  },
  {
    id: 'gancao',
    name: '甘草',
    latinName: 'Glycyrrhiza uralensis',
    category: '补益药',
    aliases: ['国老', '蜜草', '甜草', '美草'],
    description: '甘草为豆科植物甘草、胀果甘草或光果甘草的干燥根和根茎，因能调和诸药而有"国老"之称。',
    efficacy: ['补脾益气', '清热解毒', '祛痰止咳', '缓急止痛', '调和诸药'],
    medicinalValue: '甘草含有甘草酸、甘草苷、黄酮类等，具有肾上腺皮质激素样作用、抗炎抗过敏、镇咳祛痰、保肝解毒、抗心律失常等作用。对脾胃虚弱、咳嗽痰多、脘腹挛痛等有显著疗效。',
    edibleValue: '甘草可用于泡茶、煮粥、炖汤。如甘草茶、甘草绿豆汤、甘草炖梨等。味道极甜，是天然的甜味剂，但需适量使用。',
    usage: ['泡茶饮用', '煎汤内服', '炖汤佐料', '作为甜味剂'],
    contraindications: ['湿盛胀满、水肿者慎用', '不宜与大戟、甘遂、芫花同用', '长期大量服用可引起高血压、水肿'],
    imageUrl: '/herbs/gancao.jpg',
    color: '#9ACD32'
  },
  {
    id: 'furong',
    name: '茯苓',
    latinName: 'Poria cocos',
    category: '利水渗湿药',
    aliases: ['云苓', '松苓', '茯灵', '白茯苓'],
    description: '茯苓为多孔菌科真菌茯苓的干燥菌核，寄生于松树根部，分为茯苓皮、赤茯苓、白茯苓等不同部位。',
    efficacy: ['利水渗湿', '健脾宁心', '安神定悸', '增强免疫'],
    medicinalValue: '茯苓含有茯苓多糖、三萜类化合物等，具有利尿、镇静安神、保肝、增强免疫、抗肿瘤、降血糖等作用。对水肿尿少、痰饮眩悸、脾虚食少、心神不安等有显著疗效。',
    edibleValue: '茯苓可煮粥、炖汤、研粉食用。如茯苓饼、茯苓粥、茯苓炖排骨、茯苓奶茶等。口感细腻，是健脾祛湿的常用食材。',
    usage: ['煮粥食用', '炖汤佐料', '研粉冲服', '制作糕点'],
    contraindications: ['阴虚津亏、肾虚多尿者慎用', '不宜与醋同食'],
    imageUrl: '/herbs/fuling.jpg',
    color: '#DEB887'
  },
  {
    id: 'yiyiren',
    name: '薏苡仁',
    latinName: 'Coix lacryma-jobi',
    category: '利水渗湿药',
    aliases: ['薏米', '苡仁', '六谷子', '菩提珠'],
    description: '薏苡仁为禾本科植物薏苡的干燥成熟种仁，又称薏米，是药食同源的祛湿佳品。',
    efficacy: ['利水渗湿', '健脾止泻', '清热排脓', '除痹止痛', '美白养颜'],
    medicinalValue: '薏苡仁含有薏苡仁酯、薏苡仁油、蛋白质等，具有利尿消肿、镇静镇痛、解热抗炎、增强免疫、抗肿瘤、美白肌肤等作用。对水肿、脚气、脾虚泄泻、湿痹拘挛等有显著疗效。',
    edibleValue: '薏苡仁可煮粥、炖汤、制茶。如薏米红豆粥、薏米冬瓜汤、薏米茶等。是夏季祛湿消暑的常用食材，也可用于美容养颜。',
    usage: ['煮粥食用', '炖汤佐料', '泡茶饮用', '研粉外用'],
    contraindications: ['孕妇慎用', '阴虚体质者慎用', '大便燥结者慎用'],
    imageUrl: '/herbs/yiyiren.jpg',
    color: '#F5F5DC'
  },
  {
    id: 'heshouwu',
    name: '何首乌',
    latinName: 'Polygonum multiflorum',
    category: '补益药',
    aliases: ['首乌', '夜交藤', '地精', '马肝石'],
    description: '何首乌为蓼科植物何首乌的干燥块根，生用解毒、截疟，制用补肝肾、益精血、乌须发。',
    efficacy: ['补肝肾', '益精血', '乌须发', '强筋骨', '解毒截疟', '润肠通便'],
    medicinalValue: '何首乌含有蒽醌类化合物、卵磷脂、二苯乙烯苷等，具有促进造血、保肝降脂、抗衰老、增强免疫、润肠通便等作用。对血虚萎黄、眩晕耳鸣、须发早白、腰膝酸软等有显著疗效。',
    edibleValue: '何首乌可炖汤、泡茶、煮粥。如何首乌炖鸡、何首乌茶、何首乌黑豆粥等。是乌发养颜的常用食材，但需制过后方可长期服用。',
    usage: ['炖汤佐料', '泡茶饮用', '煮粥食用', '泡酒'],
    contraindications: ['湿痰壅盛者慎用', '大便溏泄者慎用', '肝功能异常者慎用'],
    imageUrl: '/herbs/heshouwu.jpg',
    color: '#8B4513'
  },
  {
    id: 'baiguo',
    name: '白果',
    latinName: 'Ginkgo biloba',
    category: '止咳平喘药',
    aliases: ['银杏', '灵眼', '佛指甲', '鸭脚子'],
    description: '白果为银杏科植物银杏的干燥成熟种子，具有敛肺定喘、止带缩尿的功效。',
    efficacy: ['敛肺定喘', '止带缩尿', '祛痰平喘', '收敛固涩'],
    medicinalValue: '白果含有银杏内酯、白果酸、银杏黄酮等，具有祛痰平喘、抗菌消炎、收敛固涩、降低血压、改善心脑血管循环等作用。对哮喘痰嗽、带下白浊、遗尿尿频等有显著疗效。',
    edibleValue: '白果可炒食、炖汤、做糕点。如白果炖鸡、白果粥、白果炒西芹、盐焗白果等。需注意不可过量食用，以免引起中毒。',
    usage: ['炒食', '炖汤佐料', '煮粥食用', '制作糕点'],
    contraindications: ['有小毒，不宜过量', '实邪者忌用', '孕妇慎用', '儿童慎用'],
    imageUrl: '/herbs/baiguo.jpg',
    color: '#ADFF2F'
  },
  {
    id: 'lianzi',
    name: '莲子',
    latinName: 'Nelumbo nucifera',
    category: '补益药',
    aliases: ['莲实', '藕实', '水芝丹', '莲蓬子'],
    description: '莲子为睡莲科植物莲的干燥成熟种子，具有补脾止泻、益肾固精、养心安神的功效。',
    efficacy: ['补脾止泻', '益肾固精', '养心安神', '涩精止带', '清热降火'],
    medicinalValue: '莲子含有莲子碱、荷叶碱、金丝桃苷等，具有镇静安神、强心降压、涩肠止泻、补肾固精、增强免疫等作用。对脾虚久泻、遗精带下、心悸失眠等有显著疗效。',
    edibleValue: '莲子可煮粥、炖汤、做甜品。如莲子粥、莲子银耳羹、莲子百合糖水、红枣莲子汤等。口感粉糯，是传统甜品的常用材料。',
    usage: ['煮粥食用', '炖汤佐料', '制作甜品', '研粉冲服'],
    contraindications: ['中满痞胀、大便燥结者慎用', '不宜与牛奶同食'],
    imageUrl: '/herbs/lianzi.jpg',
    color: '#FFB6C1'
  },
  {
    id: 'kuxingren',
    name: '苦杏仁',
    latinName: 'Prunus armeniaca',
    category: '止咳平喘药',
    aliases: ['杏仁', '杏核仁', '山杏', '木落子'],
    description: '苦杏仁为蔷薇科植物山杏、西伯利亚杏或杏的干燥成熟种子，具有止咳平喘、润肠通便的功效。',
    efficacy: ['止咳平喘', '润肠通便', '降气化痰', '消炎镇痛'],
    medicinalValue: '苦杏仁含有苦杏仁苷、苦杏仁酶、脂肪油等，具有镇咳平喘、祛痰平喘、润肠通便、镇痛抗炎、抗肿瘤等作用。对咳嗽气喘、胸满痰多、肠燥便秘等有显著疗效。',
    edibleValue: '苦杏仁可制作杏仁茶、杏仁豆腐、杏仁露等。如杏仁茶、杏仁豆腐、杏仁糊等。需注意苦杏仁有小毒，需充分加热破坏毒性后方可食用。',
    usage: ['泡茶饮用', '制作饮品', '研粉冲服', '入汤煎服'],
    contraindications: ['有小毒，婴儿慎用', '阴虚咳嗽者慎用', '大便溏泄者慎用', '不宜过量服用'],
    imageUrl: '/herbs/kuxingren.jpg',
    color: '#D2691E'
  },
  {
    id: 'xiyangshen',
    name: '西洋参',
    latinName: 'Panax quinquefolius',
    category: '补益药',
    aliases: ['花旗参', '洋参', '美国人参', '广东人参'],
    description: '西洋参为五加科植物西洋参的干燥根，原产于美国、加拿大等地，具有补气养阴、清热生津的功效。',
    efficacy: ['补气养阴', '清热生津', '润肺止咳', '清心除烦', '增强免疫'],
    medicinalValue: '西洋参含有皂苷、多糖、氨基酸等，具有抗疲劳、抗氧化、增强免疫、降血糖、保护心血管、镇静安神等作用。对气阴两虚、虚热烦倦、咽干口渴等有显著疗效。',
    edibleValue: '西洋参可含服、泡茶、炖汤、煮粥。如西洋参茶、西洋参炖鸡、西洋参粥、西洋参含片等。适合熬夜后补气养阴。',
    usage: ['含服', '泡茶饮用', '炖汤佐料', '煮粥食用'],
    contraindications: ['阳虚内寒者慎用', '胃有寒湿者慎用', '不宜与萝卜、茶同食'],
    imageUrl: '/herbsxiyangshen.jpg',
    color: '#F5F5F5'
  }
];

// 获取所有分类
export const herbCategories: HerbCategory[] = [
  '补益药',
  '清热药',
  '理气药',
  '消食药',
  '利水渗湿药',
  '活血化瘀药',
  '止咳平喘药',
  '其他'
];

// 获取分类对应的颜色
export const categoryColors: Record<HerbCategory, string> = {
  '补益药': '#DC143C',
  '清热药': '#228B22',
  '理气药': '#FF8C00',
  '消食药': '#FF6347',
  '利水渗湿药': '#4169E1',
  '活血化瘀药': '#DC143C',
  '止咳平喘药': '#9370DB',
  '其他': '#808080'
};

// 搜索中药
export function searchHerbs(query: string): Herb[] {
  const lowerQuery = query.toLowerCase();
  return herbsData.filter(herb =>
    herb.name.includes(query) ||
    herb.latinName.toLowerCase().includes(lowerQuery) ||
    herb.aliases.some(alias => alias.includes(query)) ||
    herb.efficacy.some(e => e.includes(query))
  );
}

// 按分类筛选
export function filterByCategory(category: HerbCategory): Herb[] {
  return herbsData.filter(herb => herb.category === category);
}
