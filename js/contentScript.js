/* global jQuery */
jQuery.noConflict();

var extId = chrome.runtime.id;
var mainPathname = '/twrail/';
var mainPathname2 = '/twrail/index.aspx';
var searchIfrPathname = '/twrail/QuickSearch.aspx';
var serachResultPathname = '/twrail/SearchResult.aspx';

var TRCity = [];
var TRStation = [];
var language = 1;
TRCity.push('0');
TRCity.push('臺北地區');
TRCity.push('Taipei');
TRCity.push('1');
TRCity.push('桃園地區');
TRCity.push('Taoyuan');
TRCity.push('2');
TRCity.push('新竹地區');
TRCity.push('Hsinchu  ');
TRCity.push('3');
TRCity.push('苗栗地區');
TRCity.push('Miaoli  ');
TRCity.push('4');
TRCity.push('臺中地區');
TRCity.push('Taichung  ');
TRCity.push('5');
TRCity.push('彰化地區');
TRCity.push('Changhua  ');
TRCity.push('6');
TRCity.push('南投地區');
TRCity.push('Nantou');
TRCity.push('7');
TRCity.push('雲林地區');
TRCity.push('Yunlin');
TRCity.push('8');
TRCity.push('嘉義地區');
TRCity.push('Chiayi  ');
TRCity.push('9');
TRCity.push('臺南地區');
TRCity.push('Tainan');
TRCity.push('10');
TRCity.push('高雄地區');
TRCity.push('Kaohsiung');
TRCity.push('11');
TRCity.push('屏東地區');
TRCity.push('Pingtung  ');
TRCity.push('12');
TRCity.push('臺東地區');
TRCity.push('Taitung');
TRCity.push('13');
TRCity.push('花蓮地區');
TRCity.push('Hualien  ');
TRCity.push('14');
TRCity.push('宜蘭地區');
TRCity.push('Yilan  ');
TRCity.push('15');
TRCity.push('平溪/深澳線');
TRCity.push('Pinghsi / ShenAo Line');
TRCity.push('16');
TRCity.push('內灣/六家線');
TRCity.push('Neiwan / Liujia Line');
TRCity.push('17');
TRCity.push('集集線');
TRCity.push('Jiji Line');
TRCity.push('18');
TRCity.push('沙崙線');
TRCity.push('Shalun Line');

TRStation.push('0');
TRStation.push('1810');
TRStation.push('福隆');
TRStation.push('Fulong');
TRStation.push('0');
TRStation.push('1809');
TRStation.push('貢寮');
TRStation.push('Gongliao');
TRStation.push('0');
TRStation.push('1808');
TRStation.push('雙溪');
TRStation.push('Shuangxi');
TRStation.push('0');
TRStation.push('1807');
TRStation.push('牡丹');
TRStation.push('Mudan');
TRStation.push('0');
TRStation.push('1806');
TRStation.push('三貂嶺');
TRStation.push('Sandiaoling');
TRStation.push('0');
TRStation.push('1805');
TRStation.push('猴硐');
TRStation.push('Houtong');
TRStation.push('0');
TRStation.push('1804');
TRStation.push('瑞芳');
TRStation.push('Ruifang');
TRStation.push('0');
TRStation.push('1803');
TRStation.push('四腳亭');
TRStation.push('Sijiaoting');
TRStation.push('0');
TRStation.push('1802');
TRStation.push('暖暖');
TRStation.push('Nuannuan');
TRStation.push('0');
TRStation.push('1001');
TRStation.push('基隆');
TRStation.push('Keelung');
TRStation.push('0');
TRStation.push('1029');
TRStation.push('三坑');
TRStation.push('Sankeng');
TRStation.push('0');
TRStation.push('1002');
TRStation.push('八堵');
TRStation.push('Badu');
TRStation.push('0');
TRStation.push('1003');
TRStation.push('七堵');
TRStation.push('Qidu');
TRStation.push('0');
TRStation.push('1030');
TRStation.push('百福');
TRStation.push('Baifu');
TRStation.push('0');
TRStation.push('1004');
TRStation.push('五堵');
TRStation.push('Wudu');
TRStation.push('0');
TRStation.push('1005');
TRStation.push('汐止');
TRStation.push('Xizhi');
TRStation.push('0');
TRStation.push('1031');
TRStation.push('汐科');
TRStation.push('Xike');
TRStation.push('0');
TRStation.push('1006');
TRStation.push('南港');
TRStation.push('Nangang');
TRStation.push('0');
TRStation.push('1007');
TRStation.push('松山');
TRStation.push('Songshan');
TRStation.push('0');
TRStation.push('1008');
TRStation.push('臺北');
TRStation.push('Taipei');
TRStation.push('0');
TRStation.push('1009');
TRStation.push('萬華');
TRStation.push('Wanhua');
TRStation.push('0');
TRStation.push('1011');
TRStation.push('板橋');
TRStation.push('Banqiao');
TRStation.push('0');
TRStation.push('1032');
TRStation.push('浮洲');
TRStation.push('Fuzhou');
TRStation.push('0');
TRStation.push('1012');
TRStation.push('樹林');
TRStation.push('Shulin');
TRStation.push('0');
TRStation.push('1013');
TRStation.push('山佳');
TRStation.push('Shanjia');
TRStation.push('0');
TRStation.push('1014');
TRStation.push('鶯歌');
TRStation.push('Yingge');
TRStation.push('1');
TRStation.push('1015');
TRStation.push('桃園');
TRStation.push('Taoyuan');
TRStation.push('1');
TRStation.push('1016');
TRStation.push('內壢');
TRStation.push('Neili');
TRStation.push('1');
TRStation.push('1017');
TRStation.push('中壢');
TRStation.push('Zhongli');
TRStation.push('1');
TRStation.push('1018');
TRStation.push('埔心');
TRStation.push('Puxin');
TRStation.push('1');
TRStation.push('1019');
TRStation.push('楊梅');
TRStation.push('Yangmei');
TRStation.push('1');
TRStation.push('1020');
TRStation.push('富岡');
TRStation.push('Fugang');
TRStation.push('10');
TRStation.push('1231');
TRStation.push('大湖');
TRStation.push('Dahu');
TRStation.push('10');
TRStation.push('1232');
TRStation.push('路竹');
TRStation.push('Luzhu');
TRStation.push('10');
TRStation.push('1233');
TRStation.push('岡山');
TRStation.push('Gangshan');
TRStation.push('10');
TRStation.push('1234');
TRStation.push('橋頭');
TRStation.push('Qiaotou');
TRStation.push('10');
TRStation.push('1235');
TRStation.push('楠梓');
TRStation.push('Nanzi');
TRStation.push('10');
TRStation.push('1242');
TRStation.push('新左營');
TRStation.push('Xinzuoying');
TRStation.push('10');
TRStation.push('1236');
TRStation.push('左營');
TRStation.push('Zuoying');
TRStation.push('10');
TRStation.push('1238');
TRStation.push('高雄');
TRStation.push('Kaohsiung');
TRStation.push('10');
TRStation.push('1402');
TRStation.push('鳳山');
TRStation.push('Fengshan');
TRStation.push('10');
TRStation.push('1403');
TRStation.push('後庄');
TRStation.push('Houzhuang');
TRStation.push('10');
TRStation.push('1404');
TRStation.push('九曲堂');
TRStation.push('Jiuqutang');
TRStation.push('11');
TRStation.push('1405');
TRStation.push('六塊厝');
TRStation.push('Liukuaicuo');
TRStation.push('11');
TRStation.push('1406');
TRStation.push('屏東');
TRStation.push('Pingtung');
TRStation.push('11');
TRStation.push('1407');
TRStation.push('歸來');
TRStation.push('Guilai');
TRStation.push('11');
TRStation.push('1408');
TRStation.push('麟洛');
TRStation.push('Linluo');
TRStation.push('11');
TRStation.push('1409');
TRStation.push('西勢');
TRStation.push('Xishi');
TRStation.push('11');
TRStation.push('1410');
TRStation.push('竹田');
TRStation.push('Zhutian');
TRStation.push('11');
TRStation.push('1411');
TRStation.push('潮州');
TRStation.push('Chaozhou');
TRStation.push('11');
TRStation.push('1412');
TRStation.push('崁頂');
TRStation.push('Kanding');
TRStation.push('11');
TRStation.push('1413');
TRStation.push('南州');
TRStation.push('Nanzhou');
TRStation.push('11');
TRStation.push('1414');
TRStation.push('鎮安');
TRStation.push('Zhenan');
TRStation.push('11');
TRStation.push('1415');
TRStation.push('林邊');
TRStation.push('Linbian');
TRStation.push('11');
TRStation.push('1416');
TRStation.push('佳冬');
TRStation.push('Jiadong');
TRStation.push('11');
TRStation.push('1417');
TRStation.push('東海');
TRStation.push('Donghai');
TRStation.push('11');
TRStation.push('1418');
TRStation.push('枋寮');
TRStation.push('Fangliao');
TRStation.push('11');
TRStation.push('1502');
TRStation.push('加祿');
TRStation.push('Jialu');
TRStation.push('11');
TRStation.push('1503');
TRStation.push('內獅');
TRStation.push('Neishi');
TRStation.push('11');
TRStation.push('1504');
TRStation.push('枋山');
TRStation.push('Fangshan');
TRStation.push('12');
TRStation.push('1507');
TRStation.push('古莊');
TRStation.push('Guzhuang');
TRStation.push('12');
TRStation.push('1508');
TRStation.push('大武');
TRStation.push('Dawu');
TRStation.push('12');
TRStation.push('1510');
TRStation.push('瀧溪');
TRStation.push('Longxi');
TRStation.push('12');
TRStation.push('1512');
TRStation.push('金崙');
TRStation.push('Jinlun');
TRStation.push('12');
TRStation.push('1514');
TRStation.push('太麻里');
TRStation.push('Taimali');
TRStation.push('12');
TRStation.push('1516');
TRStation.push('知本');
TRStation.push('Zhiben');
TRStation.push('12');
TRStation.push('1517');
TRStation.push('康樂');
TRStation.push('Kangle');
TRStation.push('12');
TRStation.push('1632');
TRStation.push('臺東');
TRStation.push('Taitung');
TRStation.push('12');
TRStation.push('1631');
TRStation.push('山里');
TRStation.push('Shanli');
TRStation.push('12');
TRStation.push('1630');
TRStation.push('鹿野');
TRStation.push('Luye');
TRStation.push('12');
TRStation.push('1629');
TRStation.push('瑞源');
TRStation.push('Ruiyuan');
TRStation.push('12');
TRStation.push('1628');
TRStation.push('瑞和');
TRStation.push('Ruihe');
TRStation.push('12');
TRStation.push('1626');
TRStation.push('關山');
TRStation.push('Guanshan');
TRStation.push('12');
TRStation.push('1625');
TRStation.push('海端');
TRStation.push('Haiduan');
TRStation.push('12');
TRStation.push('1624');
TRStation.push('池上');
TRStation.push('Chishang');
TRStation.push('13');
TRStation.push('1623');
TRStation.push('富里');
TRStation.push('Fuli');
TRStation.push('13');
TRStation.push('1622');
TRStation.push('東竹');
TRStation.push('Dongzhu');
TRStation.push('13');
TRStation.push('1621');
TRStation.push('東里');
TRStation.push('Dongli');
TRStation.push('13');
TRStation.push('1619');
TRStation.push('玉里');
TRStation.push('Yuli');
TRStation.push('13');
TRStation.push('1617');
TRStation.push('三民');
TRStation.push('Sanmin');
TRStation.push('13');
TRStation.push('1616');
TRStation.push('瑞穗');
TRStation.push('Ruisui');
TRStation.push('13');
TRStation.push('1614');
TRStation.push('富源');
TRStation.push('Fuyuan');
TRStation.push('13');
TRStation.push('1613');
TRStation.push('大富');
TRStation.push('Dafu');
TRStation.push('13');
TRStation.push('1612');
TRStation.push('光復');
TRStation.push('Guangfu');
TRStation.push('13');
TRStation.push('1611');
TRStation.push('萬榮');
TRStation.push('Wanrong');
TRStation.push('13');
TRStation.push('1610');
TRStation.push('鳳林');
TRStation.push('Fenglin');
TRStation.push('13');
TRStation.push('1609');
TRStation.push('南平');
TRStation.push('Nanping');
TRStation.push('13');
TRStation.push('1607');
TRStation.push('豐田');
TRStation.push('Fengtian');
TRStation.push('13');
TRStation.push('1606');
TRStation.push('壽豐');
TRStation.push('Shoufeng');
TRStation.push('13');
TRStation.push('1605');
TRStation.push('平和');
TRStation.push('Pinghe');
TRStation.push('13');
TRStation.push('1604');
TRStation.push('志學');
TRStation.push('Zhixue');
TRStation.push('13');
TRStation.push('1602');
TRStation.push('吉安');
TRStation.push('Jian');
TRStation.push('13');
TRStation.push('1715');
TRStation.push('花蓮');
TRStation.push('Hualien');
TRStation.push('13');
TRStation.push('1714');
TRStation.push('北埔');
TRStation.push('Beipu');
TRStation.push('13');
TRStation.push('1713');
TRStation.push('景美');
TRStation.push('Jingmei');
TRStation.push('13');
TRStation.push('1712');
TRStation.push('新城');
TRStation.push('Xincheng');
TRStation.push('13');
TRStation.push('1711');
TRStation.push('崇德');
TRStation.push('Chongde');
TRStation.push('13');
TRStation.push('1710');
TRStation.push('和仁');
TRStation.push('Heren');
TRStation.push('13');
TRStation.push('1709');
TRStation.push('和平');
TRStation.push('Heping');
TRStation.push('14');
TRStation.push('1708');
TRStation.push('漢本');
TRStation.push('Hanben');
TRStation.push('14');
TRStation.push('1706');
TRStation.push('武塔');
TRStation.push('Wuta');
TRStation.push('14');
TRStation.push('1705');
TRStation.push('南澳');
TRStation.push('Nanao');
TRStation.push('14');
TRStation.push('1704');
TRStation.push('東澳');
TRStation.push('Dongao');
TRStation.push('14');
TRStation.push('1703');
TRStation.push('永樂');
TRStation.push('Yongle');
TRStation.push('14');
TRStation.push('1827');
TRStation.push('蘇澳');
TRStation.push('Suao');
TRStation.push('14');
TRStation.push('1826');
TRStation.push('蘇澳新');
TRStation.push('Suaoxin');
TRStation.push('14');
TRStation.push('1825');
TRStation.push('新馬');
TRStation.push('Xinma');
TRStation.push('14');
TRStation.push('1824');
TRStation.push('冬山');
TRStation.push('Dongshan');
TRStation.push('14');
TRStation.push('1823');
TRStation.push('羅東');
TRStation.push('Luodong');
TRStation.push('14');
TRStation.push('1822');
TRStation.push('中里');
TRStation.push('Zhongli');
TRStation.push('14');
TRStation.push('1821');
TRStation.push('二結');
TRStation.push('Erjie');
TRStation.push('14');
TRStation.push('1820');
TRStation.push('宜蘭');
TRStation.push('Yilan');
TRStation.push('14');
TRStation.push('1819');
TRStation.push('四城');
TRStation.push('Sicheng');
TRStation.push('14');
TRStation.push('1818');
TRStation.push('礁溪');
TRStation.push('Jiaoxi');
TRStation.push('14');
TRStation.push('1817');
TRStation.push('頂埔');
TRStation.push('Dingpu');
TRStation.push('14');
TRStation.push('1816');
TRStation.push('頭城');
TRStation.push('Toucheng');
TRStation.push('14');
TRStation.push('1815');
TRStation.push('外澳');
TRStation.push('Waiao');
TRStation.push('14');
TRStation.push('1814');
TRStation.push('龜山');
TRStation.push('Guishan');
TRStation.push('14');
TRStation.push('1813');
TRStation.push('大溪');
TRStation.push('Daxi');
TRStation.push('14');
TRStation.push('1812');
TRStation.push('大里');
TRStation.push('Dali');
TRStation.push('14');
TRStation.push('1811');
TRStation.push('石城');
TRStation.push('Shicheng');
TRStation.push('15');
TRStation.push('1908');
TRStation.push('菁桐');
TRStation.push('Jingtong');
TRStation.push('15');
TRStation.push('1907');
TRStation.push('平溪');
TRStation.push('Pingxi');
TRStation.push('15');
TRStation.push('1906');
TRStation.push('嶺腳');
TRStation.push('Lingjiao');
TRStation.push('15');
TRStation.push('1905');
TRStation.push('望古');
TRStation.push('Wanggu');
TRStation.push('15');
TRStation.push('1904');
TRStation.push('十分');
TRStation.push('Shifen');
TRStation.push('15');
TRStation.push('1903');
TRStation.push('大華');
TRStation.push('Dahua');
TRStation.push('15');
TRStation.push('6103');
TRStation.push('海科館');
TRStation.push('NMMST');
TRStation.push('16');
TRStation.push('2212');
TRStation.push('千甲');
TRStation.push('Qianjia');
TRStation.push('16');
TRStation.push('2213');
TRStation.push('新莊');
TRStation.push('Xinzhuang');
TRStation.push('16');
TRStation.push('2203');
TRStation.push('竹中');
TRStation.push('Zhuzhong');
TRStation.push('16');
TRStation.push('2214');
TRStation.push('六家');
TRStation.push('Liujia');
TRStation.push('16');
TRStation.push('2204');
TRStation.push('上員');
TRStation.push('Shangyuan');
TRStation.push('16');
TRStation.push('2211');
TRStation.push('榮華');
TRStation.push('Ronghua');
TRStation.push('16');
TRStation.push('2205');
TRStation.push('竹東');
TRStation.push('Zhudong');
TRStation.push('16');
TRStation.push('2206');
TRStation.push('橫山');
TRStation.push('Hengshan');
TRStation.push('16');
TRStation.push('2207');
TRStation.push('九讚頭');
TRStation.push('Jiuzantou');
TRStation.push('16');
TRStation.push('2208');
TRStation.push('合興');
TRStation.push('Hexing');
TRStation.push('16');
TRStation.push('2209');
TRStation.push('富貴');
TRStation.push('Fugui');
TRStation.push('16');
TRStation.push('2210');
TRStation.push('內灣');
TRStation.push('Neiwan');
TRStation.push('17');
TRStation.push('2702');
TRStation.push('源泉');
TRStation.push('Yuanquan');
TRStation.push('17');
TRStation.push('2703');
TRStation.push('濁水');
TRStation.push('Zhuoshui');
TRStation.push('17');
TRStation.push('2704');
TRStation.push('龍泉');
TRStation.push('Longquan');
TRStation.push('17');
TRStation.push('2705');
TRStation.push('集集');
TRStation.push('Jiji');
TRStation.push('17');
TRStation.push('2706');
TRStation.push('水里');
TRStation.push('Shuili');
TRStation.push('17');
TRStation.push('2707');
TRStation.push('車埕');
TRStation.push('Checheng');
TRStation.push('18');
TRStation.push('5101');
TRStation.push('長榮大學');
TRStation.push('Chang Jung Christian University');
TRStation.push('18');
TRStation.push('5102');
TRStation.push('沙崙');
TRStation.push('Shalun');
TRStation.push('2');
TRStation.push('1021');
TRStation.push('湖口');
TRStation.push('Hukou');
TRStation.push('2');
TRStation.push('1022');
TRStation.push('新豐');
TRStation.push('Xinfeng');
TRStation.push('2');
TRStation.push('1023');
TRStation.push('竹北');
TRStation.push('Zhubei');
TRStation.push('2');
TRStation.push('1024');
TRStation.push('北新竹');
TRStation.push('North Hsinchu');
TRStation.push('2');
TRStation.push('1025');
TRStation.push('新竹');
TRStation.push('Hsinchu');
TRStation.push('2');
TRStation.push('1026');
TRStation.push('香山');
TRStation.push('Xiangshan');
TRStation.push('2');
TRStation.push('1033');
TRStation.push('北湖');
TRStation.push('Beihu(China University of Technology)');
TRStation.push('3');
TRStation.push('1027');
TRStation.push('崎頂');
TRStation.push('Qiding');
TRStation.push('3');
TRStation.push('1028');
TRStation.push('竹南');
TRStation.push('Zhunan');
TRStation.push('3');
TRStation.push('1102');
TRStation.push('談文');
TRStation.push('Tanwen');
TRStation.push('3');
TRStation.push('1104');
TRStation.push('大山');
TRStation.push('Dashan');
TRStation.push('3');
TRStation.push('1105');
TRStation.push('後龍');
TRStation.push('Houlong');
TRStation.push('3');
TRStation.push('1106');
TRStation.push('龍港');
TRStation.push('Longgang');
TRStation.push('3');
TRStation.push('1107');
TRStation.push('白沙屯');
TRStation.push('Baishatun');
TRStation.push('3');
TRStation.push('1108');
TRStation.push('新埔');
TRStation.push('Xinpu');
TRStation.push('3');
TRStation.push('1109');
TRStation.push('通霄');
TRStation.push('Tongxiao');
TRStation.push('3');
TRStation.push('1110');
TRStation.push('苑裡');
TRStation.push('Yuanli');
TRStation.push('3');
TRStation.push('1302');
TRStation.push('造橋');
TRStation.push('Zaoqiao');
TRStation.push('3');
TRStation.push('1304');
TRStation.push('豐富');
TRStation.push('Fengfu');
TRStation.push('3');
TRStation.push('1305');
TRStation.push('苗栗');
TRStation.push('Miaoli');
TRStation.push('3');
TRStation.push('1307');
TRStation.push('南勢');
TRStation.push('Nanshi');
TRStation.push('3');
TRStation.push('1308');
TRStation.push('銅鑼');
TRStation.push('Tongluo');
TRStation.push('3');
TRStation.push('1310');
TRStation.push('三義');
TRStation.push('Sanyi');
TRStation.push('4');
TRStation.push('1111');
TRStation.push('日南');
TRStation.push('Rinan');
TRStation.push('4');
TRStation.push('1112');
TRStation.push('大甲');
TRStation.push('Dajia');
TRStation.push('4');
TRStation.push('1113');
TRStation.push('臺中港');
TRStation.push('Taichung Port');
TRStation.push('4');
TRStation.push('1114');
TRStation.push('清水');
TRStation.push('Qingshui');
TRStation.push('4');
TRStation.push('1115');
TRStation.push('沙鹿');
TRStation.push('Shalu');
TRStation.push('4');
TRStation.push('1116');
TRStation.push('龍井');
TRStation.push('Longjing');
TRStation.push('4');
TRStation.push('1117');
TRStation.push('大肚');
TRStation.push('Dadu');
TRStation.push('4');
TRStation.push('1118');
TRStation.push('追分');
TRStation.push('Zhuifen');
TRStation.push('4');
TRStation.push('1314');
TRStation.push('泰安');
TRStation.push('Taian');
TRStation.push('4');
TRStation.push('1315');
TRStation.push('后里');
TRStation.push('Houli');
TRStation.push('4');
TRStation.push('1317');
TRStation.push('豐原');
TRStation.push('Fengyuan');
TRStation.push('4');
TRStation.push('1318');
TRStation.push('潭子');
TRStation.push('Tanzi');
TRStation.push('4');
TRStation.push('1323');
TRStation.push('太原');
TRStation.push('Taiyuan');
TRStation.push('4');
TRStation.push('1319');
TRStation.push('臺中');
TRStation.push('Taichung');
TRStation.push('4');
TRStation.push('1322');
TRStation.push('大慶');
TRStation.push('Daqing');
TRStation.push('4');
TRStation.push('1320');
TRStation.push('烏日');
TRStation.push('Wuri');
TRStation.push('4');
TRStation.push('1324');
TRStation.push('新烏日');
TRStation.push('Xinwuri');
TRStation.push('4');
TRStation.push('1321');
TRStation.push('成功');
TRStation.push('Chenggong');
TRStation.push('5');
TRStation.push('1120');
TRStation.push('彰化');
TRStation.push('Changhua');
TRStation.push('5');
TRStation.push('1202');
TRStation.push('花壇');
TRStation.push('Huatan');
TRStation.push('5');
TRStation.push('1240');
TRStation.push('大村');
TRStation.push('Dacun');
TRStation.push('5');
TRStation.push('1203');
TRStation.push('員林');
TRStation.push('Yuanlin');
TRStation.push('5');
TRStation.push('1204');
TRStation.push('永靖');
TRStation.push('Yongjing');
TRStation.push('5');
TRStation.push('1205');
TRStation.push('社頭');
TRStation.push('Shetou');
TRStation.push('5');
TRStation.push('1206');
TRStation.push('田中');
TRStation.push('Tianzhong');
TRStation.push('5');
TRStation.push('1207');
TRStation.push('二水');
TRStation.push('Ershui');
TRStation.push('7');
TRStation.push('1208');
TRStation.push('林內');
TRStation.push('Linnei');
TRStation.push('7');
TRStation.push('1209');
TRStation.push('石榴');
TRStation.push('Shiliu');
TRStation.push('7');
TRStation.push('1210');
TRStation.push('斗六');
TRStation.push('Douliu');
TRStation.push('7');
TRStation.push('1211');
TRStation.push('斗南');
TRStation.push('Dounan');
TRStation.push('7');
TRStation.push('1212');
TRStation.push('石龜');
TRStation.push('Shigui');
TRStation.push('8');
TRStation.push('1213');
TRStation.push('大林');
TRStation.push('Dalin');
TRStation.push('8');
TRStation.push('1214');
TRStation.push('民雄');
TRStation.push('Minxiong');
TRStation.push('8');
TRStation.push('1241');
TRStation.push('嘉北');
TRStation.push('Jiabei');
TRStation.push('8');
TRStation.push('1215');
TRStation.push('嘉義');
TRStation.push('Chiayi');
TRStation.push('8');
TRStation.push('1217');
TRStation.push('水上');
TRStation.push('Shuishang');
TRStation.push('8');
TRStation.push('1218');
TRStation.push('南靖');
TRStation.push('Nanjing');
TRStation.push('9');
TRStation.push('1219');
TRStation.push('後壁');
TRStation.push('Houbi');
TRStation.push('9');
TRStation.push('1220');
TRStation.push('新營');
TRStation.push('Xinying');
TRStation.push('9');
TRStation.push('1221');
TRStation.push('柳營');
TRStation.push('Liuying');
TRStation.push('9');
TRStation.push('1222');
TRStation.push('林鳳營');
TRStation.push('Linfengying');
TRStation.push('9');
TRStation.push('1223');
TRStation.push('隆田');
TRStation.push('Longtian');
TRStation.push('9');
TRStation.push('1224');
TRStation.push('拔林');
TRStation.push('Balin');
TRStation.push('9');
TRStation.push('1225');
TRStation.push('善化');
TRStation.push('Shanhua');
TRStation.push('9');
TRStation.push('1244');
TRStation.push('南科');
TRStation.push('Nanke');
TRStation.push('9');
TRStation.push('1226');
TRStation.push('新市');
TRStation.push('Xinshi');
TRStation.push('9');
TRStation.push('1227');
TRStation.push('永康');
TRStation.push('Yongkang');
TRStation.push('9');
TRStation.push('1239');
TRStation.push('大橋');
TRStation.push('Daqiao');
TRStation.push('9');
TRStation.push('1228');
TRStation.push('臺南');
TRStation.push('Tainan');
TRStation.push('9');
TRStation.push('1229');
TRStation.push('保安');
TRStation.push('Baoan');
TRStation.push('9');
TRStation.push('1243');
TRStation.push('仁德');
TRStation.push('Rende');
TRStation.push('9');
TRStation.push('1230');
TRStation.push('中洲');
TRStation.push('Zhongzhou');

jQuery(document).ready(function () {
	if (location.pathname === mainPathname || location.pathname === mainPathname2) {
		var link = jQuery('<link>');
		link.attr('rel', 'stylesheet');
		link.attr('type', 'text/css');
		link.attr('href', 'chrome-extension://' + extId + '/css/general.css');
		document.head.appendChild(link[0]);
		
		var contentframe = jQuery('#contentframe');
		var offset = contentframe.offset();
		var width = contentframe.width();
		var height = contentframe.height();
		
		var historyDiv = jQuery('<div></div>').attr({
			'id': 'history',
		})
		.css({
			'width': '255px',
			'height': height + 'px',
			'position': 'absolute',
			'top': offset.top + 'px',
			'left': (offset.left + width + 5) + 'px'
		})
		.append('<span class="historyItemSpan historyHeader">查 詢 紀 錄</span>');
		
		chrome.storage.sync.get('TRA_Sync_Data', function (syncData) {
			appendDataToHistory(historyDiv, syncData);
		});
		
		
		jQuery('body').append(historyDiv);
	} else if (location.pathname === searchIfrPathname) {
		var link = jQuery('<link>');
		link.attr('rel', 'stylesheet');
		link.attr('type', 'text/css');
		link.attr('href', 'chrome-extension://' + extId + '/css/general.css');
		document.head.appendChild(link[0]);
		
		var script = document.createElement('script');
		script.setAttribute('src', 'chrome-extension://' + extId + '/js/TRA_contentScript.js');
		document.head.appendChild(script);
		searchIfrDocReady();
		addPersonalConfigPanel();
	} else if (location.pathname === serachResultPathname) {
		var seartchIsEnable = getCookie('TRA_searchIsEnable');
		if (seartchIsEnable === 'true') {
			
			var searchChtInfo = {};
			searchChtInfo.searchDate		= getCookie('TRA_searchDate');
			searchChtInfo.fromCityCht 		= getCookie('TRA_fromCityCht');
			searchChtInfo.toCityCht 		= getCookie('TRA_toCityCht');
			searchChtInfo.fromStationCht 	= getCookie('TRA_fromStationCht');
			searchChtInfo.toStationCht 		= getCookie('TRA_toStationCht');
			searchChtInfo.trainClassCht 	= getCookie('TRA_trainClassCht');
			searchChtInfo.fromTime 			= getCookie('TRA_fromTime');
			searchChtInfo.toTime 			= getCookie('TRA_toTime');
			searchChtInfo.href 				= location.href;	
			
			chrome.storage.sync.get('TRA_Sync_Data', function (syncData) {
				//syncData = {};
				var TRA_Sync_Data;
				if (isEmpty(syncData)) {
					TRA_Sync_Data = {};
					TRA_Sync_Data.searchHistory = [];
					TRA_Sync_Data.searchHistory.push(searchChtInfo);
				} else {
					TRA_Sync_Data = syncData.TRA_Sync_Data;
					if (isEmpty(TRA_Sync_Data.searchHistory)) {
						TRA_Sync_Data.searchHistory = [];
					}
					if (TRA_Sync_Data.searchHistory.length === 5) {
						TRA_Sync_Data.searchHistory.reverse();
						TRA_Sync_Data.searchHistory.pop();
						TRA_Sync_Data.searchHistory.reverse();
					}
					TRA_Sync_Data.searchHistory.push(searchChtInfo);
				}
				chrome.storage.sync.set({'TRA_Sync_Data': TRA_Sync_Data}, function () {
					createCookie("TRA_searchIsEnable", 'false', 0.0069);
				});
			});
		} else {
			//  TODO Delete Cookie
		}
	}
});

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function removeCookie() {
	
}

function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

function appendDataToHistory(historyDiv, syncData) {
	if (!isEmpty(syncData)) {
		var TRA_Sync_Data = syncData.TRA_Sync_Data;
		var searchHistory = TRA_Sync_Data.searchHistory;
		for (var i=searchHistory.length-1; i>=0; i--) {
			var history = searchHistory[i];
			var fromCityCht = history.fromCityCht;
			var toCityCht = history.toCityCht;
			var fromStationCht = history.fromStationCht;
			var toStationCht = history.toStationCht;
			var searchDate = history.searchDate;
			var fromTime = history.fromTime;
			var toTime = history.toTime;
			var trainClassCht = history.trainClassCht;
			var href = history.href;
			
			var itemDiv = jQuery('<div></div>').addClass('historyItemDiv').attr('data-href', href);
			var span = '<span class="historyItemSpan  fromToStationInfo">';
			if (fromCityCht === '' && toCityCht === '') {
				span += fromStationCht + ' <到> ' + toStationCht;
			} else if (fromCityCht !== '' && toCityCht === '') {
				span += fromCityCht + '(' + fromStationCht + ') <到> ' + toStationCht;
			} else if (fromCityCht === '' && toCityCht !== '') {
				span += fromStationCht + ' <到> ' + toCityCht + '(' + toStationCht + ')';
			} else {
				span += fromCityCht + '(' + fromStationCht + ') <到> ' + toCityCht + '(' + toStationCht + ')';
			}
			span += '</span>';
			
			span += '<span class="historyItemSpan fromToTimeInfo">';
			span += searchDate + ' ' + fromTime + ' ~ ' +  toTime;
			span += '</span>';
			
			span += '<span class="historyItemSpan trainClass">'
			span += trainClassCht;
			span += '</span>';
			
			itemDiv.on('click', function (e) {historyDivClickHandler(this);});
			itemDiv.append(span);
			historyDiv.append(itemDiv);
		}
	}
}

function historyDivClickHandler (e) {
	var href = jQuery(e).attr('data-href');
	var contentframe = jQuery('#contentframe');
	contentframe.attr('src', href);
}

/**
 * inject個人設定的快速載入面板
 */
function addPersonalConfigPanel() {
	var jqPsPanel = jQuery('<div></div>');
	jqPsPanel.attr('id', 'quickPersonalConfigPanel');
	
	chrome.storage.sync.get('TRA_Sync_Data', function (syncData) {
        var personalConfigSerial = syncData.TRA_Sync_Data.personalConfigSerial;
        for (var i = personalConfigSerial.length-1 ; i >= 0 ; i--) {
            var personalConfig = personalConfigSerial[i];
            var timestamp = personalConfig.timestamp;
            var fromCity = personalConfig.fromCity;
            var fromCityCht = personalConfig.fromCityCht;
            var fromStation = personalConfig.fromStation;
            var fromStationCht = personalConfig.fromStationCht;
            var toCity = personalConfig.toCity;
            var toCityCht = personalConfig.toCityCht;
            var toStation = personalConfig.toStation;
            var toStationCht = personalConfig.toStationCht;
            var trainClass = personalConfig.trainClass;
            var trainClassCht = personalConfig.trainClassCht;
            
            var template = '<div class="quickPersonalConfigTile"'
                         + ' data-Timestamp="' + timestamp + '"'
                         + ' data-fromCity="' + fromCity + '"'
                         + ' data-fromCityCht="' + fromCityCht + '"'
                         + ' data-fromStation="' + fromStation + '"'
                         + ' data-fromStationCht="' + fromStationCht + '"'
                         + ' data-toCity="' + toCity + '"'
                         + ' data-toCityCht="' + toCityCht + '"'
                         + ' data-toStation="' + toStation + '"'
                         + ' data-toStationCht="' + toStationCht + '"'
                         + ' data-trainClass="' + trainClass + '"'
                         + ' data-trainClassCht="' + trainClassCht + '">'
                         + '    <span class="historyItemSpan  quickFromToStationInfo">';
			if (fromCityCht === '' && toCityCht === '') {
				template += fromStationCht + ' <img src="chrome-extension://' + extId + '/images/arrowrb.gif" class="quickArrowRB" /> ' + toStationCht;
			} else if (fromCityCht !== '' && toCityCht === '') {
				template += fromCityCht + '(' + fromStationCht + ') <img src="chrome-extension://' + extId + '/images/arrowrb.gif" class="quickArrowRB" /> ' + toStationCht;
			} else if (fromCityCht === '' && toCityCht !== '') {
				template += fromStationCht + ' <img src="chrome-extension://' + extId + '/images/arrowrb.gif" class="quickArrowRB" /> ' + toCityCht + '(' + toStationCht + ')';
			} else {
				template += fromCityCht + '(' + fromStationCht + ') <img src="chrome-extension://' + extId + '/images/arrowrb.gif" class="quickArrowRB" /> ' + toCityCht + '(' + toStationCht + ')';
			}
			if (trainClass === 'trnType1') {
				template += ' ﹝對號﹞';
			} else if (trainClass === 'trnType2') {
				template += ' ﹝非對號﹞';
			} else if (trainClass === 'trnType3') {
				template += ' ﹝所有﹞';
			}
			template += '    </span>'
            template += '</div>';
			jqPsPanel.append(template);
        }
    });
	jQuery('#abgneBlock').after(jqPsPanel);
}

/**
 * 搜尋面板ready function
 */
function searchIfrDocReady() {
	jQuery(document).ready(function () {
		jQuery('div').on('click', '.quickPersonalConfigTile', function (event) {
			var objPersonalConfig = getActivePersonalConfig(event.currentTarget);
			quickSetting4Search(objPersonalConfig);
		});
	});
}

/**
 * 將 Active 的個人設定轉換為物件
 */
function getActivePersonalConfig(e) {
    var jqPersonalConfig = jQuery('#isActive');
    if (e !== undefined) {
        jqPersonalConfig = jQuery(e);
    }
    var timestamp        = jqPersonalConfig.attr('data-Timestamp');
    var fromCity         = jqPersonalConfig.attr('data-FromCity');
    var fromCityCht      = jqPersonalConfig.attr('data-FromCityCht');
    var fromStation      = jqPersonalConfig.attr('data-FromStation');
    var fromStationCht   = jqPersonalConfig.attr('data-FromStationCht');
    var toCity           = jqPersonalConfig.attr('data-ToCity');
    var toCityCht        = jqPersonalConfig.attr('data-ToCityCht');
    var toStation        = jqPersonalConfig.attr('data-ToStation');
    var toStationCht     = jqPersonalConfig.attr('data-ToStationCht');
    var trainClass       = jqPersonalConfig.attr('data-TrainClass');
    var trainClassCht    = jqPersonalConfig.attr('data-TrainClassCht');
    return {
        timestamp: timestamp || '',
        fromCity: fromCity || '',
        fromCityCht: fromCityCht || '',
        fromStation: fromStation || '',
        fromStationCht: fromStationCht || '',
        toCity: toCity || '',
        toCityCht: toCityCht || '',
        toStation: toStation || '',
        toStationCht: toStationCht || '',
        trainClass: trainClass || '',
        trainClassCht: trainClassCht || ''
    };
}

/**
 * 將個人設定物件快速帶入搜尋面板
 */
function quickSetting4Search(objPersonalConfig) {
	if (objPersonalConfig.fromCity === '' && objPersonalConfig.fromStation !== '') {
		setFromSelectEnabled(true);
		jQuery('#lbf_' + objPersonalConfig.fromStation).attr('checked', 'checked');
	} else if (objPersonalConfig.fromCity !== '' && objPersonalConfig.fromStation !== '') {
		setFromSelectEnabled(false);
		jQuery('#FromCity').val(objPersonalConfig.fromCity);
		ChangeCity('FromCity', 'FromStation');
		jQuery('#FromStation').val(objPersonalConfig.fromStation);
		jQuery('#lbf_0').attr('checked', 'checked');
	}
    if (objPersonalConfig.toCity === '' && objPersonalConfig.toStation !== '') {
		setToSelectEnabled(true);
		jQuery('#lbt_' + objPersonalConfig.toStation).attr('checked', 'checked');
	} else if (objPersonalConfig.toCity !== '' && objPersonalConfig.toStation !== '') {
		setToSelectEnabled(false);
		jQuery('#ToCity').val(objPersonalConfig.toCity);
		ChangeCity('ToCity', 'ToStation');
		jQuery('#ToStation').val(objPersonalConfig.toStation);
		jQuery('#lbt_0').attr('checked', 'checked');
	}
	jQuery('#' + objPersonalConfig.trainClass).attr('checked', 'checked');
}

/**
 * From 地區 / 站名 下拉選單Enabled function
 */
function setFromSelectEnabled(b) {
    if (b) {
        jQuery('#FromCity').attr("disabled", true);
        jQuery('#FromStation').attr("disabled", true);
    } else {
        jQuery('#FromCity').removeAttr("disabled");
        jQuery('#FromStation').removeAttr("disabled");
    }
}

/**
 * To 地區 / 站名 下拉選單Enabled function
 */
function setToSelectEnabled(b) {
    if (b) {
        jQuery('#ToCity').attr("disabled", true);
        jQuery('#ToStation').attr("disabled", true);
    } else {
        jQuery('#ToCity').removeAttr("disabled");
        jQuery('#ToStation').removeAttr("disabled");
    }
}

/**
 * 覆寫原網站function
 */
function ChangeCity(srccity, deststation) {
    jQuery("#" + deststation).find('option').remove();
    jQuery("#" + deststation).append("<option value='-1'>請選擇</option>");
    var citycode = jQuery("#" + srccity).val();

    if (citycode == "16")  {
        var stationcname;
        var stationcname2;
        if (language == 1) {
            stationcname = "新竹";
            stationcname2 = "北新竹";
        } else {
            stationcname = "Hsinchu";
            stationcname2 = "North Hsinchu";
        }
        jQuery("#" + deststation).append("<option value='1025'>" + stationcname + "</option>");
        jQuery("#" + deststation).append("<option value='1024'>" + stationcname2 + "</option>");
    }

    if (citycode == "17") {
        var stationcname;
        if (language == 1) {
            stationcname = "二水";
        } else {
            stationcname = "Ershui";
        }
        jQuery("#" + deststation).append("<option value='1207'>" + stationcname + "</option>");
    }
    
    for (i = 0; i < TRStation.length; i = i + 4) {
        if (citycode == "6")
            citycode = "17";

        if (TRStation[i] == citycode) {
            jQuery("#" + deststation).append("<option value='" + TRStation[i + 1] + "'>" + TRStation[i + language + 1] + "</option>");
        }
    }

    switch (citycode) {
        case "0":
            jQuery("#" + deststation).val("1008");
            break;
        case "1":
            jQuery("#" + deststation).val("1015");
            break;
        case "2":
            jQuery("#" + deststation).val("1025");
            break;
        case "3":
            jQuery("#" + deststation).val("1305");
            break;
        case "4":
            jQuery("#" + deststation).val("1319");
            break;
        case "5":
            jQuery("#" + deststation).val("1120");
            break;
        case "6":
            jQuery("#" + deststation).val("2705");
            break;
        case "7":
            jQuery("#" + deststation).val("1210");
            break;
        case "8":
            jQuery("#" + deststation).val("1215");
            break;
        case "9":
            for (i = 0; i < TRStation.length; i = i + 4)  {
                if (TRStation[i] == "18")  {
                    jQuery("#" + deststation).append("<option value='" + TRStation[i + 1] + "'>" + TRStation[i + language + 1] + "</option>");
                }
            }

            jQuery("#" + deststation).val("1228");
            break;
        case "10":
            jQuery("#" + deststation).val("1238");
            break;
        case "11":
            jQuery("#" + deststation).val("1406");
            break;
        case "12":
            jQuery("#" + deststation).val("1632");
            break;
        case "13":
            jQuery("#" + deststation).val("1715");
            break;
        case "14":
            jQuery("#" + deststation).val("1820");
            break;
        case "15":
            var stationcname1;
            var stationcname2;
            if (language == 1)  {
                stationcname1 = "三貂嶺";
                stationcname2 = "海科館";
            } else {
                stationcname1 = "Sandiaoling";
                stationcname2 = "NMMST";
            }

            jQuery("#" + deststation + " option[value='6103']").remove();
            jQuery("#" + deststation).append("<option value='1806'>" + stationcname1 + "</option>");
            jQuery("#" + deststation).append("<option value='6103'>" + stationcname2 + "</option>");
            jQuery("#" + deststation).val("1907");
            break;
        case "16":
            jQuery("#" + deststation).val("2210");
            break;
        case "17":
            jQuery("#" + deststation).val("2705");
            break;
        case "18":
            jQuery("#" + deststation).val("5102");
            break;
        default:
            break;
    }
}