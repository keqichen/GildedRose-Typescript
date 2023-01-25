import { Item, GildedRose } from '../app/gilded-rose';

// Add a master test here

//Create a list of item

const item1 = new Item("Aged Brie", 10, 50)
const item2 = new Item("Aged Brie", 20, 20)
const item3 = new Item("Aged Brie", 19, 60)
const item4 = new Item("Aged Brie", 3, 23)
const item5 = new Item("Aged Brie", 5, 11)
const item6 = new Item("Aged Brie", 80, 46)
const item7 = new Item("Aged Brie", 12, 23)
const item8 = new Item("Aged Brie", 1, 25)

const bStage1 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50)
const bStage2 = new Item("Backstage passes to a TAFKAL80ETC concert", 20, 20)
const bStage3 = new Item("Backstage passes to a TAFKAL80ETC concert", 19, 60)
const bStage4 = new Item("Backstage passes to a TAFKAL80ETC concert", 3, 23)
const bStage5 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 11)
const bStage7 = new Item("Backstage passes to a TAFKAL80ETC concert", 80, 46)
const bStage8 = new Item("Backstage passes to a TAFKAL80ETC concert", 12, 23)
const bStage9 = new Item("Backstage passes to a TAFKAL80ETC concert", 1, 25)

const s1 = new Item("Sulfuras, Hand of Ragnaros", 10, 50)
const s2 = new Item("Sulfuras, Hand of Ragnaros", 20, 20)
const s3 = new Item("Sulfuras, Hand of Ragnaros", 19, 60)
const s4 = new Item("Sulfuras, Hand of Ragnaros", 3, 23)
const s5 = new Item("Sulfuras, Hand of Ragnaros", 5, 11)
const s6 = new Item("Sulfuras, Hand of Ragnaros", 80, 46)
const s7 = new Item("Sulfuras, Hand of Ragnaros", 12, 23)
const s8 = new Item("Sulfuras, Hand of Ragnaros", 1, 25)

let G1 = new GildedRose([item1, item2, item3, item4, item5, item6, item7, item8])
G1.updateQuality()
//console.log(G1);
G1.updateQuality()
//console.log(G1);
G1.updateQuality()
//console.log(G1);

const G2 = new GildedRose([bStage1, bStage2, bStage3, bStage4, bStage5, bStage7, bStage8, bStage9])
G2.updateQuality()
//console.log(G2);
G2.updateQuality()
//console.log(G2);
G2.updateQuality()
//console.log(G2);


const G3 = new GildedRose([s1, s2, s3, s4, s5, s6, s7, s8])
G3.updateQuality()
console.log(G3)

G3.updateQuality()
console.log(G3)

G3.updateQuality()
console.log(G3)

