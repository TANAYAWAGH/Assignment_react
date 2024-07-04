import male from "./images/male.avif";
import female from "./images/female.avif";
import kids from "./images/kids.avif";
import Vooter from "./images/Vooter.avif"
import kurti from './images/kurti.avif'
import Poipet from "./images/Poipet.avif"
import HM from "./images/HM.avif"
import KG from "./images/KG.avif"
import JP from "./images/JP.avif"
const cloths = [
  {
    id: 1,
    brand: "MISCHIEF MONKEY",
    fabric_type: "Cotton",
    type: "Shirt",
    price: 4000,
    color: "Brown",
    size: "Large",
    collection: "male",
    image: male
  },
  {
    id: 2,
    brand: "Poipet",
    fabric_type: "Cotton",
    type: "Shirt",
    price: 2500,
    color: "red",
    size: "32",
    collection: "male",
    image: Poipet
  },
  {
    id: 3,
    brand: "Vooter",
    fabric_type: "Cotton",
    type: "T-Shirt",
    price: 1200,
    color: "Gray",
    size: "Large",
    collection: "male",
    image: Vooter
  },
  {
    id: 4,
    brand: "FeryLondon",
    fabric_type: "Linen",
    type: "Short Kurti",
    price: 2000,
    color: "Mix",
    size: "Medium",
    collection: "female",
    image: female
  },
  {
    id: 5,
    brand: "H&M",
    fabric_type: "Satin",
    type: "Floral Dress",
    price: 3000,
    color: "Blck",
    size: "Small",
    collection: "female",
    image: HM
  },
  {
    id: 6,
    brand: "Kimayra",
    fabric_type: "Pure Cotton",
    type: "Straight Kurta With Patiala & Dupatta",
    price: 1000,
    color: "Red",
    size: "Large",
    collection: "female",
    image: kurti
  },
  {
    id: 7,
    brand: "DEKLOOK",
    fabric_type: "Crep",
    type: "Flare Dress",
    price: 400,
    color: "Pitch",
    size: "small",
    collection: "kids",
    image: kids
  },
  {
    id: 8,
    brand: "KG FRENDZ",
    fabric_type: "Cotton",
    type: "T-Shirt",
    price: 300,
    color: "White",
    size: "Small",
    collection: "kids",
    image: KG
  },
  {
    id: 9,
    brand: "J & JP",
    fabric_type: "Cotton",
    type: "Shirt",
    price: 400,
    color: "White",
    size: "Medium",
    collection: "kids",
    image: JP
  }
];

export default cloths;