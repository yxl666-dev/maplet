var bubu ={ s64:"13151",s65:"10366",s11:"23812",s12:"17483",s13:"12195",s14:"10617",s15:"14323",s21:"14786",s22:"12085",s23:"10784",s31:"28428",s32:"15965",s33:"21204",s34:"11301",s35:"15662",s36:"9833",s37:"16027",s41:"11884",s42:"12080",s43:"13000",s44:"20852",s45:"12585",s46:"10215",s50:"13417",s51:"11701",s52:"11945",s53:"11585",s54:"9862",s61:"12232",s62:"10765",s63:"10845" };
var title = "2009年各地区城镇居民消费水平";
var unit = "元";
function getColor(d) {
    return d > 21000 ? '#800026' :
           d > 16000  ? '#BD0026' :
           d > 14300  ? '#E31A1C' :
           d > 13000  ? '#FC4E2A' :
           d > 11800   ? '#FD8D3C' :
           d > 11000  ? '#FEB24C' :
           d > 10300   ? '#FED976' :
           d > 9800   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [9800, 10300, 11000, 11800, 13000, 14300, 16000, 21000];