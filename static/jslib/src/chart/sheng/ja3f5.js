var bubu ={ s64:"1719",s65:"6187",s11:"1887",s12:"1984",s13:"18523",s14:"7946",s15:"6324",s21:"9816",s22:"6935",s23:"10011",s31:"2251",s32:"19809",s33:"14588",s34:"17313",s35:"11445",s36:"14951",s37:"24377",s41:"22770",s42:"15311",s43:"19157",s44:"25865",s45:"14696",s46:"2045",s50:"10345",s51:"31263",s52:"14169",s53:"17830",s54:"1039",s61:"9837",s62:"7867",s63:"1754" };
var title = "2006年教育程度-小学";
var unit = "人";
function getColor(d) {
    return d > 25000 ? '#800026' :
           d > 20000  ? '#BD0026' :
           d > 18000  ? '#E31A1C' :
           d > 15000  ? '#FC4E2A' :
           d > 14000   ? '#FD8D3C' :
           d > 10000  ? '#FEB24C' :
           d > 7000   ? '#FED976' :
           d > 1000   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [1000, 7000, 10000, 14000, 15000, 18000, 20000, 25000];