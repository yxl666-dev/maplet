var bubu ={ s64:"1203.92",s65:"4183.21",s11:"11115",s12:"6719.01",s13:"1601.97",s14:"7315.4",s15:"8496.2",s21:"13668.58",s22:"6426.1",s23:"8314.37",s31:"14069.87",s32:"30981.98",s33:"21462.69",s34:"8851.66",s35:"10823.01",s36:"6971.05",s37:"30933.28",s41:"18018.53",s42:"11328.92",s43:"11555",s44:"36796.71",s45:"7021",s46:"1503.06",s50:"5793.66",s51:"12601.23",s52:"3561.56",s53:"5692.12",s54:"394.85",s61:"7314.58",s62:"3166.82",s63:"1018.62" };
var title = "2008年分省GDP总值";
var unit = "元";
function getColor(d) {
    return d > 22000 ? '#800026' :
           d > 14000  ? '#BD0026' :
           d > 11200  ? '#E31A1C' :
           d > 8400  ? '#FC4E2A' :
           d > 7000   ? '#FD8D3C' :
           d > 5700  ? '#FEB24C' :
           d > 3000   ? '#FED976' :
           d > 300   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [300, 3000, 5700, 7000, 8400, 11200, 14000, 22000];