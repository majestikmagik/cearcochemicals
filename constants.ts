import { NavLinkItem, Product } from './types'; // Assuming 'types' is where Product is defined

export const NAV_LINKS: NavLinkItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Our History" },
  { href: "#products", label: "Products & Services" },
  { href: "#contact", label: "Contact" },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: "1",
    name: "Freedom 1 Degreaser / Tire Prep",
    description: "Freedom 1 Degreaser / Tire Prep is a powerful concentrated liquid detergent that can be used in a variety of cleaning applications, including the cleaning of tires and fenderwells during detailing of personal vehicles.",
    imageUrl: "images/freedom1_combo.jpg",
    contact: "Contact for pricing",
    fullScribe: "The product is also widely used in truck washing, restaurant hood cleaning, heavy equipment cleaning and general degreasing.",
    subDescription: "Freedom 1 Tire Prep",
    directions: "Apply Freedom 1 using a pressure washer or hand sprayer. Dilute 1 part Freedom 1 with 10-20 parts water, depending on the level of cleaning required. Apply the solution to the surface, allow it to dwell for a few minutes, and then rinse thoroughly with water.",
  },
  {
    id: "2",
    name: "Irish Orange Citrus Wash",
    description: "Irish Orange is a mild, citrus-based cleaning solution suitable for wiping down various surfaces in the interior of an auto, truck or SUV. It works well as a shampoo for all rugs and carpets in the floorboard of your vehicles. ",
    imageUrl: "images/irishorange_citruswashlabel.jpg",
    contact: "Contact for pricing",
    fullScribe: "It can also be used to wash exterior painted or polished surfaces with excellent results. Also available as Citrus 113 Light Duty Truck Wash and Citrus 212 Medium Duty Truck Wash. This product is free rinsing and will not cause any issues with dulling the luster of the surface being washed. ",
    subDescription: "Citrus 41 is a polish safe non-caustic formula with a nice sudsy blend for cars & trucks, motorcycles to big rigs. This product is free rinsing and will not cause any issues with dulling the luster of the surface being washed. ",
    directions: "Apply Irish Orange by spray bottle or wipe / pad. Because this product is mild and is a blend of surfactants along with non-corrosive additives, some agitation and rubbing may be needed during application. This product leaves behind a pleasant scent after cleaning.",
    caution: "Wear rubber gloves when using this product as it contains D-Limonene, a citrus solvent made from processing grapefruit, oranges and other citrus fruits."
  },
  {
    id: "3",
    name: "Ruby Red Tire Shine",
    description: "An excellent, long lasting tire dressing and vinyl conditioner. This is a product designed to enhance the fenderwell area and plastic bumpers that are scratched or hard to keep clean.",
    imageUrl: "images/rubyred_tireshinelabel.jpg",
    contact: "Contact for pricing",
    fullScribe: "Ruby Red leaves tires and vinyl with a beautiful glossy surface that will not crack or dull.",
    subDescription: "FenderWell is a product designed to enhance the fenderwell area and plastic bumpers that are scratched or hard to keep clean. This product will assist with providing a lusterous finish.",
    directions: "Apply to clean surface. Spray Ruby Red on surface and smooth out application with a soft cloth or sponge. Allow surface to dry for 10 to 15 minutes.",
    caution: "Flammable Liquid, contains petroleum solvent. Keep away from heat, sparks or open flames. Harmful or fatal if swallowed. Avoid prolonged exposure to skin and lungs. Do not induce vomiting, get medical attention immediately. Keep out of reach of children. Precaución: Liquido inflamable, contiene solventes derivados del petróleo. Mantener alejado del calor, chispas o llamas abiertas. Daino o fatal si se pulmones. No provocar el vómito, busque atención médica inmediatmente. Mantener fuera del alcance de los niños.",
    guarantee: "Satisfaction Guaranteed, manufacturer’s liability is limited to refund of purchase contact when unused. Proof of Purchase is required and must be returned within 30 days. This product will assist with providing a lustrous finish."
  },
  {
    id: "4",
    name: "Aluminum Brightener (AB-230)",
    description: "AB-230 is a strong blend of different acids designed to clean non-polished aluminum surfaces and removal of rust.",
    imageUrl: "images/aluminum_brighter.jpg",
    contact: "Contact for pricing",
    fullScribe: "AB-230 can also be used to clean concrete and aggregate surfaces.",
    directions: "Apply AB-230 by spray bottle, pump sprayer, tank injector or brush. Depending on the requirements this product can be diluted up to 25 to 1 and remain effective in the application.",
    caution: "Avoid contact with skin, proper PPE should be worn. Avoid contact with polished surfaces. If the products comes in contact with polished surfaces rinse immediately."
  },
  {
    id: "5",
    name: "BRC-549 (Roof & Deck Cleaner)",
    description: "Our most aggressive cleaner is used in any application that doesn't necessarily allow high-pressure washing, as in roofs and other surfaces that could be damaged by high pressure.",
    imageUrl: "images/brc-549_washlabel.jpg",
    contact: "Contact for pricing",
    fullScribe: "BRC-549 is also effective in any type of heavy-duty degreasing and may be used in graffiti removal.",
    caution: "When attempting to remove graffiti or any other material from a surface always do a test spot to ensure the product will do the job and not damage the surface."
  },
  {
    id: "6",
    name: "SCC-44 (Red Soap)",
    description: "Heavy-duty corrosive material used in degreasing heavy equipment and floors. It's not recommended for use on surfaces that are polished or have a high finish.",
    imageUrl: "images/CEARCO_label.jpg",
    contact: "Contact for pricing",
  },
  {
    id: "7",
    name: "TW-23-C (Floor Soap)",
    description: "Medium duty alkaline based soap is used primarily by floor machine to clean various surfaces of floors.",
    imageUrl: "images/CEARCO_label.jpg",
    contact: "Contact for pricing"
  },
  {
    id: "8",
    name: "TW-23 (Truck Wash)",
    description: "Medium duty alkaline based truck wash used in the cleaning of vehicles & equipment that requires brushing.",
    imageUrl: "images/CEARCO_label.jpg",
    contact: "Contact for pricing"
  },
  {
    id: "9",
    name: "Muriatic Acid",
    description: "This product is a highly corrosive material used in cleaning newly poured concrete or brick. It's used in the removal of excess mortar from freshly-layed brick.",
    imageUrl: "images/CEARCO_label.jpg",
    contact: "Contact for pricing",
    fullScribe: "It can also be used in the removal of alkaline build up's created by the use of calcium hypochlorite, in maintenance of pools. This is not a shippable product."
  },
  {
    id: "10",
    name: "Commercial Grade Bleach (12.5%)",
    description: "This product is double the strength of household bleach it can be used for swimming pools and disinfecting any equipment and surfaces.",
    imageUrl: "images/CEARCO_label.jpg",
    contact: "Contact for pricing"
  },
  {
    id: "11",
    name: "HW 15 (House Wash)",
    description: "This product is an alkaline blend of a general-purpose cleaner and sodium hypochlorite used in the cleaning of surfaces with mold & mildew build-up.",
    imageUrl: "images/CEARCO_label.jpg",
    contact: "Contact for pricing"
  },
  {
    id: "12",
    name: "Tar & Asphalt Remover (T & A 67)",
    description: "Product info coming soon...",
    imageUrl: "images/CEARCO_label.jpg",
    contact: "Contact for pricing"
  },
];


export const COMPANY_INFO = {
  address: "117 W 21st St, Richmond, VA. United States",
  email: "cearcochemicals@gmail.com",
  shopPhone: "(804) 232-4895",
  raymondPhone: "(804) 588-8943",
  sarahPhone: "(804) 332-3438",
  instagramUrl: "https://www.instagram.com/cearco_chemicals",
  facebookUrl: "https://www.facebook.com/profile.php?id=100092584929609",
  copyrightYear: new Date().getFullYear(),
};