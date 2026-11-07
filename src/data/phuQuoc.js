// Itinerary transcribed from the supplied confirmation, 2026-10-07 to 2026-10-11.
// Curated actual photo records live in phuQuocPhotos.js; routes and notes retain the original plan.
export const places = {
 airport: { name:'富國島機場', en:'PHU QUOC INTERNATIONAL AIRPORT', area:'抵達與出發', description:'桃園與富國島之間的往返航程。', images:[] },
 honthom: { name:'香島・跨海纜車', en:'HON THOM', area:'南島', description:'搭乘跨海纜車往返香島，行程包含太陽世界水上樂園與香島自助午餐。', images:[] },
 sunset: { name:'日落小鎮・親吻之橋', en:'SUNSET TOWN', area:'南島', description:'地中海風格街區散步，行程列有中央村鐘樓、筆塔、龐貝遺跡、龍梯與親吻之橋。', images:[] },
 safari: { name:'珍珠野生動物園', en:'VINPEARL SAFARI', area:'北島', description:'步行園區與 Safari 遊獵車行程，乘車進入野生動物園區。', images:[] },
 grandworld: { name:'富國大世界', en:'GRAND WORLD', area:'北島', description:'當代藝術城市公園、竹之傳奇、威尼斯秀與北島大世界夜市，集中在這一天安排。', images:[] },
 vinwonders: { name:'珍珠奇幻樂園', en:'VINWONDERS', area:'北島', description:'樂園一日遊，包含巨型海龜水族館、水上樂園與陸地遊樂設施。', images:[] },
};
export const hotels = {
 muong: { name:'富國島芒青酒店', en:'Muong Thanh Luxury Phu Quoc Hotel' },
 ocean: { name:'富國島海洋珍珠飯店', en:'Phu Quoc Ocean Pearl Hotel' },
};
export const days = [
 {id:1,date:'2026-10-07',weekday:'三',title:'飛往富國島',subtitle:'桃園出發，抵達海島的第一晚。',area:'出發',placeIds:['airport'],route:['桃園機場','富國島機場','芒青酒店'],meals:['未安排','未安排','機上簡餐'],hotel:'muong',notes:['去程：太陽富國航空 9G511，17:35 桃園 → 20:25 富國島。'],images:[]},
 {id:2,date:'2026-10-08',weekday:'四',title:'跨海纜車與日落小鎮',subtitle:'香島水上樂園、親吻之橋與地中海街區。',area:'南島',placeIds:['honthom','sunset'],route:['香島跨海纜車','太陽世界水上樂園','親吻之橋','日落小鎮'],meals:['飯店早餐','香島自助午餐（套票）','自理'],hotel:'muong',notes:['水上活動準備泳衣、沙灘褲與戲水裝備。','日落小鎮散步：中央村鐘樓、筆塔、龐貝遺跡與龍梯。'],images:[]},
 {id:3,date:'2026-10-09',weekday:'五',title:'Safari 與大世界',subtitle:'野生動物、竹之傳奇與彩色運河街景。',area:'北島',placeIds:['safari','grandworld'],route:['Vinpearl Safari','當代藝術城市公園','竹之傳奇','威尼斯秀','大世界夜市'],meals:['飯店早餐','百佳港式點心吃到飽','自理'],hotel:'ocean',notes:['行程單列威尼斯秀 21:30–22:00，自由參觀；演出依現場與天候調整。','貢多拉遊船、泰迪熊博物館為自行選擇項目，船票、小費或門票另計。'],images:[]},
 {id:4,date:'2026-10-10',weekday:'六',title:'珍珠樂園',subtitle:'海龜水族館、水上樂園與陸地遊樂設施。',area:'北島',placeIds:['vinwonders'],route:['珍珠樂園','巨型海龜水族館','水上樂園','陸地遊樂設施'],meals:['飯店早餐','主題公園內用餐（套票）','自理'],hotel:'ocean',notes:['行程單列美人魚 14:00–14:10、餵魚 15:00–15:15、Once Show 18:45–19:05；演出依現場為準。','水上活動準備泳衣與戲水裝備。'],images:[]},
 {id:5,date:'2026-10-11',weekday:'日',title:'返程',subtitle:'從富國島回到桃園。',area:'返程',placeIds:['airport'],route:['海洋珍珠飯店','富國島機場','桃園機場'],meals:['飯店早餐','機上簡餐','未安排'],hotel:null,notes:['回程：太陽富國航空 9G510，11:30 富國島 → 16:10 桃園。'],images:[]},
];
