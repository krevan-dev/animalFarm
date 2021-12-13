import { Anteater } from "../Models/Anteater.js";
import { Bat } from "../Models/Bat.js";
import { Clownfish } from "../Models/Clownfish.js";
import { Dragon } from "../Models/Dragon.js";
import { Eagle } from "../Models/Eagle.js";
import { FlyingFish } from "../Models/FlyingFish.js";
import { Gibbon } from "../Models/Gibbon.js";
import { Hamster } from "../Models/Hamster.js";

let Bill = new Anteater(Bill, Green, Male, 300);
let Batty = new Bat(Batty, Black, Male, 10);
let Nemo = new Clownfish(Nemo, Orange, Male, 1);
let Alduin = new Dragon(Alduin, Grey, Male, 1000);
let Eleanor = new Eagle(Eleanor, Silver, Female, 40);
let Limpett = new FlyingFish(Limpett, Blue, Male, 20);
let Alex = new Gibbon(Alex, Brown, Female, 200);
let Herbert = new Hamster(Herbert, Orange, Male, 5);

export class ZooController {}

console.log("Zoo Controller Loaded..");
