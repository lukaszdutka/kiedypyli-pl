const allAllergens = [
  // {name: 'tymotka łąkowa', from: 13, to: 25},
  // {name: 'kupkówka pospolita', from: 13, to: 25},
  // {name: 'życica trwała', from: 13, to: 25},
  // {name: 'tomka wonna', from: 13, to: 25},
  // {name: 'wiechlina łąkowa', from: 13, to: 25},
  // {name: 'żyto', from: 13, to: 25},
  {name: 'leszczyna', from: 1, to: 12},
  {name: 'olsza', from: 5, to: 10},
  {name: 'brzoza', from: 11, to: 13},
  {name: 'topola', from: 9, to: 10},
  {name: 'dąb', from: 10, to: 15},
  {name: 'trawy', from: 13, to: 25},
  {name: 'parietaria', from: 16, to: 27},
  {name: 'cladosporium', from: 13, to: 24},
  {name: 'alternaria', from: 16, to: 28},
  {name: 'szczaw', from: 19, to: 24},
  {name: 'pokrzywa', from: 16, to: 24},
  {name: 'komosa', from: 12, to: 24},
  {name: 'bylica', from: 20, to: 24},
  {name: 'ambrozja', from: 23, to: 28}

  //not enough info
  // {name: 'babka', from: 1, to: 1},

]
const byFromDateThenByToDate = (a, b) => a.from - b.from === 0 ? a.to - b.to : a.from - b.from;
allAllergens.sort(byFromDateThenByToDate);

export default allAllergens;


/*
źródła:
https://alergiczne.info/kalendarz-pylenia-cz-1-leszczyna/
https://alergiczne.info/kalendarz-pylenia-cz-2-olcha/
https://alergiczne.info/kalendarz-pylenia-cz-3-brzoza/
https://alergiczne.info/kalendarz-pylenia-cz-4-topola/
https://aptekazawiszy.pl/artykuly/w-jakich-miesiacach-najmocniej-pyli-brzoza-topola-i-dab-sprawdz.html
https://alergiczne.info/kalendarz-pylenia-cz-5-trawy/
https://www.mp.pl/pacjent/alergie/chorobyalergiczne/alergeny/wziewne/62824,pylek-ambrozji
https://www.mp.pl/pacjent/alergie/chorobyalergiczne/alergeny/wziewne/62823,pylek-parietarii
https://www.medonet.pl/zdrowie,cladosporium--alergia--grzyb--plesn--skutki--dzialanie--leczenie,artykul,1731230.html
https://www.medme.pl/artykuly/alternaria-co-to-jest-alergia-pylenie,73655.html
https://portal.abczdrowie.pl/kalendarze-pylenia-roslin
http://www.alergen.info.pl/Alergeny/Pylek_bylicy
 */
