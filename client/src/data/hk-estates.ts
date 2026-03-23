/*
 * Hong Kong Estates Database
 * Each estate maps to its full address, region, and district
 * District: 香港島 / 九龍 / 新界
 * Region: Sub-district areas
 */

export interface Estate {
  name: string;
  nameEn: string;
  address: string;
  region: string;
  district: string;
}

export const HK_ESTATES: Estate[] = [
  // === 香港島 Hong Kong Island ===
  // 中西區
  { name: "西營盤邨", nameEn: "Sai Ying Pun Estate", address: "香港西營盤正街", region: "中西區", district: "香港島" },
  { name: "觀龍樓", nameEn: "Kwun Lung Lau", address: "香港堅尼地城觀龍樓道", region: "中西區", district: "香港島" },
  { name: "寶翠園", nameEn: "The Belcher's", address: "香港堅尼地城卑路乍街89號", region: "中西區", district: "香港島" },
  { name: "學士臺", nameEn: "Academic Terrace", address: "香港西營盤薄扶林道2號", region: "中西區", district: "香港島" },
  { name: "帝后華庭", nameEn: "Queen's Terrace", address: "香港上環皇后大道西1號", region: "中西區", district: "香港島" },
  { name: "縉城峰", nameEn: "Island Crest", address: "香港西營盤第一街8號", region: "中西區", district: "香港島" },
  // 灣仔
  { name: "囍匯", nameEn: "The Avenue", address: "香港灣仔皇后大道東200號", region: "灣仔", district: "香港島" },
  { name: "尚翹峰", nameEn: "The Zenith", address: "香港灣仔皇后大道東3號", region: "灣仔", district: "香港島" },
  { name: "壹環", nameEn: "One Wan Chai", address: "香港灣仔皇后大道東1號", region: "灣仔", district: "香港島" },
  { name: "星域軒", nameEn: "Star Crest", address: "香港灣仔星街9號", region: "灣仔", district: "香港島" },
  // 東區
  { name: "太古城", nameEn: "Taikoo Shing", address: "香港鰂魚涌太古城道", region: "東區", district: "香港島" },
  { name: "康怡花園", nameEn: "Kornhill", address: "香港鰂魚涌康山道1號", region: "東區", district: "香港島" },
  { name: "杏花邨", nameEn: "Heng Fa Chuen", address: "香港柴灣盛泰道100號", region: "東區", district: "香港島" },
  { name: "嘉亨灣", nameEn: "Grand Promenade", address: "香港西灣河太安街38號", region: "東區", district: "香港島" },
  { name: "逸濤灣", nameEn: "Les Saisons", address: "香港西灣河太安街28號", region: "東區", district: "香港島" },
  { name: "鯉景灣", nameEn: "Lei King Wan", address: "香港西灣河太安街", region: "東區", district: "香港島" },
  { name: "興東邨", nameEn: "Hing Tung Estate", address: "香港筲箕灣愛信道", region: "東區", district: "香港島" },
  { name: "柴灣邨", nameEn: "Chai Wan Estate", address: "香港柴灣柴灣道", region: "東區", district: "香港島" },
  // 南區
  { name: "海怡半島", nameEn: "South Horizons", address: "香港鴨脷洲怡南路2號", region: "南區", district: "香港島" },
  { name: "置富花園", nameEn: "Chi Fu Fa Yuen", address: "香港薄扶林置富道", region: "南區", district: "香港島" },
  { name: "華富邨", nameEn: "Wah Fu Estate", address: "香港薄扶林華富道", region: "南區", district: "香港島" },
  { name: "深灣軒", nameEn: "Sham Wan Towers", address: "香港鴨脷洲深灣道3號", region: "南區", district: "香港島" },
  { name: "南灣", nameEn: "Larvotto", address: "香港鴨脷洲海旁道8號", region: "南區", district: "香港島" },

  // === 九龍 Kowloon ===
  // 九龍城
  { name: "黃埔花園", nameEn: "Whampoa Garden", address: "九龍紅磡黃埔花園", region: "九龍城", district: "九龍" },
  { name: "海逸豪園", nameEn: "Laguna Verde", address: "九龍紅磡海逸道8號", region: "九龍城", district: "九龍" },
  { name: "半山壹號", nameEn: "One Beacon Hill", address: "九龍何文田常盛街1號", region: "九龍城", district: "九龍" },
  { name: "何文田邨", nameEn: "Ho Man Tin Estate", address: "九龍何文田常富街", region: "九龍城", district: "九龍" },
  { name: "愛民邨", nameEn: "Oi Man Estate", address: "九龍何文田忠孝街60號", region: "九龍城", district: "九龍" },
  { name: "啟晴邨", nameEn: "Kai Ching Estate", address: "九龍啟德沐虹街12號", region: "九龍城", district: "九龍" },
  { name: "德朗邨", nameEn: "Tak Long Estate", address: "九龍啟德沐翠街2號", region: "九龍城", district: "九龍" },
  { name: "嘉匯", nameEn: "Park Peninsula", address: "九龍啟德沐泰街10號", region: "九龍城", district: "九龍" },
  // 油尖旺
  { name: "柏景灣", nameEn: "Park Avenue", address: "九龍大角咀海輝道18號", region: "油尖旺", district: "九龍" },
  { name: "維港灣", nameEn: "Island Harbourview", address: "九龍大角咀海輝道11號", region: "油尖旺", district: "九龍" },
  { name: "凱帆軒", nameEn: "Hampton Place", address: "九龍大角咀海帆道3號", region: "油尖旺", district: "九龍" },
  { name: "港灣豪庭", nameEn: "Metro Harbour View", address: "九龍大角咀福利街8號", region: "油尖旺", district: "九龍" },
  { name: "天璽", nameEn: "The Cullinan", address: "九龍尖沙咀柯士甸道西1號", region: "油尖旺", district: "九龍" },
  { name: "擎天半島", nameEn: "Sorrento", address: "九龍尖沙咀柯士甸道西1號", region: "油尖旺", district: "九龍" },
  { name: "漾日居", nameEn: "The Waterfront", address: "九龍尖沙咀柯士甸道西1號", region: "油尖旺", district: "九龍" },
  { name: "君臨天下", nameEn: "The Harbourside", address: "九龍尖沙咀柯士甸道西1號", region: "油尖旺", district: "九龍" },
  { name: "海港大廈", nameEn: "Harbour Centre", address: "九龍尖沙咀彌敦道101號", region: "油尖旺", district: "九龍" },
  // 深水埗
  { name: "美孚新邨", nameEn: "Mei Foo Sun Chuen", address: "九龍荔枝角美孚新邨", region: "深水埗", district: "九龍" },
  { name: "碧海藍天", nameEn: "Aqua Marine", address: "九龍深水埗海麗街1號", region: "深水埗", district: "九龍" },
  { name: "海麗邨", nameEn: "Hoi Lai Estate", address: "九龍深水埗深旺道86號", region: "深水埗", district: "九龍" },
  { name: "南昌邨", nameEn: "Nam Cheong Estate", address: "九龍深水埗保安道", region: "深水埗", district: "九龍" },
  { name: "昇悅居", nameEn: "Liberté", address: "九龍深水埗海輝道10號", region: "深水埗", district: "九龍" },
  { name: "泓景臺", nameEn: "Banyan Garden", address: "九龍深水埗荔枝角道863號", region: "深水埗", district: "九龍" },
  { name: "宇晴軒", nameEn: "The Pacifica", address: "九龍深水埗海輝道11號", region: "深水埗", district: "九龍" },
  // 黃大仙
  { name: "鑽石山邨", nameEn: "Diamond Hill Estate", address: "九龍鑽石山鳳德道", region: "黃大仙", district: "九龍" },
  { name: "慈雲山邨", nameEn: "Tsz Wan Shan Estate", address: "九龍慈雲山慈雲山道", region: "黃大仙", district: "九龍" },
  { name: "彩虹邨", nameEn: "Choi Hung Estate", address: "九龍黃大仙彩虹道", region: "黃大仙", district: "九龍" },
  { name: "現崇山", nameEn: "Aria Kowloon Peak", address: "九龍鑽石山蒲崗村道", region: "黃大仙", district: "九龍" },
  { name: "星河明居", nameEn: "Stars By The Harbour", address: "九龍黃大仙彩虹道", region: "黃大仙", district: "九龍" },
  // 觀塘
  { name: "麗港城", nameEn: "Laguna City", address: "九龍觀塘茶果嶺道", region: "觀塘", district: "九龍" },
  { name: "匯景花園", nameEn: "Sceneway Garden", address: "九龍觀塘順利邨道", region: "觀塘", district: "九龍" },
  { name: "藍田邨", nameEn: "Lam Tin Estate", address: "九龍藍田碧雲道", region: "觀塘", district: "九龍" },
  { name: "德田邨", nameEn: "Tak Tin Estate", address: "九龍藍田安田街", region: "觀塘", district: "九龍" },
  { name: "秀茂坪邨", nameEn: "Sau Mau Ping Estate", address: "九龍秀茂坪秀明道", region: "觀塘", district: "九龍" },
  { name: "日出康城", nameEn: "LOHAS Park", address: "九龍將軍澳康城路1號", region: "觀塘", district: "九龍" },
  { name: "安泰邨", nameEn: "On Tai Estate", address: "九龍觀塘安秀道", region: "觀塘", district: "九龍" },

  // === 新界 New Territories ===
  // 沙田
  { name: "沙田第一城", nameEn: "City One Shatin", address: "新界沙田銀城街", region: "沙田", district: "新界" },
  { name: "駿景園", nameEn: "Royal Ascot", address: "新界火炭禾寮坑路1號", region: "沙田", district: "新界" },
  { name: "富豪花園", nameEn: "Belair Garden", address: "新界沙田大涌橋路", region: "沙田", district: "新界" },
  { name: "河畔花園", nameEn: "Riverside Garden", address: "新界沙田大涌橋路", region: "沙田", district: "新界" },
  { name: "碩門邨", nameEn: "Shek Mun Estate", address: "新界沙田石門安群街3號", region: "沙田", district: "新界" },
  { name: "禾輋邨", nameEn: "Wo Che Estate", address: "新界沙田豐順街", region: "沙田", district: "新界" },
  { name: "瀝源邨", nameEn: "Lek Yuen Estate", address: "新界沙田禾輋街", region: "沙田", district: "新界" },
  { name: "名城", nameEn: "Festival City", address: "新界沙田大涌橋路8號", region: "沙田", district: "新界" },
  // 大埔
  { name: "大埔中心", nameEn: "Tai Po Centre", address: "新界大埔安邦路", region: "大埔", district: "新界" },
  { name: "太和邨", nameEn: "Tai Wo Estate", address: "新界大埔寶雅路12號", region: "大埔", district: "新界" },
  { name: "大元邨", nameEn: "Tai Yuen Estate", address: "新界大埔大元街", region: "大埔", district: "新界" },
  { name: "富亨邨", nameEn: "Fu Heng Estate", address: "新界大埔頌雅路", region: "大埔", district: "新界" },
  { name: "嵐山", nameEn: "The Woodland", address: "新界大埔馬窩路", region: "大埔", district: "新界" },
  // 北區
  { name: "上水廣場", nameEn: "Landmark North", address: "新界上水龍琛路39號", region: "北區", district: "新界" },
  { name: "粉嶺中心", nameEn: "Fanling Centre", address: "新界粉嶺新運路33號", region: "北區", district: "新界" },
  { name: "清河邨", nameEn: "Ching Ho Estate", address: "新界上水清曉路", region: "北區", district: "新界" },
  { name: "祥華邨", nameEn: "Cheung Wah Estate", address: "新界粉嶺祥華路", region: "北區", district: "新界" },
  { name: "華明邨", nameEn: "Wah Ming Estate", address: "新界粉嶺華明路", region: "北區", district: "新界" },
  // 元朗
  { name: "嘉湖山莊", nameEn: "Kingswood Villas", address: "新界天水圍天恩路12號", region: "元朗", district: "新界" },
  { name: "天晴邨", nameEn: "Tin Ching Estate", address: "新界天水圍天壇街", region: "元朗", district: "新界" },
  { name: "天逸邨", nameEn: "Tin Yat Estate", address: "新界天水圍天秀路", region: "元朗", district: "新界" },
  { name: "YOHO Town", nameEn: "YOHO Town", address: "新界元朗朗日路9號", region: "元朗", district: "新界" },
  { name: "朗屏邨", nameEn: "Long Ping Estate", address: "新界元朗朗屏路", region: "元朗", district: "新界" },
  // 屯門
  { name: "屯門市廣場", nameEn: "Tuen Mun Town Plaza", address: "新界屯門屯順街1號", region: "屯門", district: "新界" },
  { name: "蝴蝶邨", nameEn: "Butterfly Estate", address: "新界屯門蝴蝶灣", region: "屯門", district: "新界" },
  { name: "良景邨", nameEn: "Leung King Estate", address: "新界屯門田景路", region: "屯門", district: "新界" },
  { name: "友愛邨", nameEn: "Yau Oi Estate", address: "新界屯門友愛路", region: "屯門", district: "新界" },
  { name: "瓏門", nameEn: "Gateway", address: "新界屯門湖翠路2號", region: "屯門", district: "新界" },
  // 荃灣
  { name: "荃灣中心", nameEn: "Tsuen Wan Centre", address: "新界荃灣青山公路荃灣段", region: "荃灣", district: "新界" },
  { name: "萬景峰", nameEn: "The Dynasty", address: "新界荃灣西樓角路", region: "荃灣", district: "新界" },
  { name: "海之戀", nameEn: "Ocean Pride", address: "新界荃灣大河道18號", region: "荃灣", district: "新界" },
  { name: "映日灣", nameEn: "Hemera", address: "新界荃灣海盛路", region: "荃灣", district: "新界" },
  // 葵青
  { name: "新都會廣場", nameEn: "Metroplaza", address: "新界葵芳興芳路223號", region: "葵青", district: "新界" },
  { name: "葵涌邨", nameEn: "Kwai Chung Estate", address: "新界葵涌大窩口道", region: "葵青", district: "新界" },
  { name: "青衣邨", nameEn: "Tsing Yi Estate", address: "新界青衣青敬路", region: "葵青", district: "新界" },
  { name: "長安邨", nameEn: "Cheung On Estate", address: "新界青衣擔杆山路", region: "葵青", district: "新界" },
  { name: "翠怡花園", nameEn: "Greenfield Garden", address: "新界青衣青綠街", region: "葵青", district: "新界" },
  // 西貢
  { name: "將軍澳中心", nameEn: "Tseung Kwan O Centre", address: "新界將軍澳唐德街", region: "西貢", district: "新界" },
  { name: "新都城", nameEn: "Metro City", address: "新界將軍澳運亨路1號", region: "西貢", district: "新界" },
  { name: "寶林邨", nameEn: "Po Lam Estate", address: "新界將軍澳寶琳路", region: "西貢", district: "新界" },
  { name: "尚德邨", nameEn: "Sheung Tak Estate", address: "新界將軍澳唐明街", region: "西貢", district: "新界" },
  { name: "天晉", nameEn: "The Wings", address: "新界將軍澳唐德街1號", region: "西貢", district: "新界" },
  { name: "維景灣畔", nameEn: "Ocean Shores", address: "新界將軍澳維景灣畔", region: "西貢", district: "新界" },
  { name: "清水灣半島", nameEn: "Oscar By The Sea", address: "新界將軍澳蓬萊路8號", region: "西貢", district: "新界" },
  // 離島
  { name: "東涌映灣園", nameEn: "Caribbean Coast", address: "新界東涌映灣園大道", region: "離島", district: "新界" },
  { name: "藍天海岸", nameEn: "Coastal Skyline", address: "新界東涌東環路12號", region: "離島", district: "新界" },
  { name: "昇薈", nameEn: "The Visionary", address: "新界東涌迎禧路1號", region: "離島", district: "新界" },
  { name: "逸東邨", nameEn: "Yat Tung Estate", address: "新界東涌逸東街", region: "離島", district: "新界" },
];

export function searchEstates(query: string): Estate[] {
  if (!query || query.trim().length === 0) return [];
  const q = query.toLowerCase().trim();
  return HK_ESTATES.filter(
    (e) => e.name.toLowerCase().includes(q) || e.nameEn.toLowerCase().includes(q)
  ).slice(0, 8);
}
