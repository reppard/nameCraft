//////////////////////
//Random Name Builder
/////////////////////

var ent_array = ["Acacia", "Activator", "Anvil", "Arrow", "Banner", "Barrier", "Bars",
                "Bat", "Beacon", "Bed", "Bedrock", "Birch", "Blaze", "Block", "Boat",
                "Bookshelf", "Bottle", "Brewing", "Brick", "Brown", "BrownMushroomCap",
                "Bush", "Button", "Cactus", "Cake", "Canes", "Carpet", "Carrot", "Cauldron",
                "Cave", "Chest", "Chicken", "Clay", "Coal", "Cobblestone", "Cocoa", "Command",
                "Comparator", "Cow", "Crafting", "Creeper", "Crops", "Crystal", "Cube", "Dandelion",
                "Dark", "Daylight", "Dead", "Detector", "Diamond", "Dirt", "Dispenser", "Door",
                "Double", "Dragon", "Dropper", "Egg", "Emerald", "Enchanting", "Enchantment", "End",
                "Ender", "Enderman", "Endermite", "Experience", "Eye", "Falling", "Fence", "Fire",
                "Fireball", "Firework", "Flower", "Frame", "Free-standing", "Furnace", "Gate", "Ghast",
                "Giant", "Glass", "Glowstone", "Gold", "Golem", "Grass", "Gravel", "Guardian", "Hardened",
                "Hay", "Hook", "Hopper", "Horse", "Ice", "Inverted", "Iron", "Jack", "Jukebox", "Jungle",
                "Knot", "Ladders", "Lamp", "Lantern", "Lapis", "Lava", "Lazuli", "Lead", "Leaves", "Lever",
                "Lily", "Magma", "Melon", "Minecart", "Monster", "Mooshroom", "Moss", "Mushroom", "Mycelium",
                "Nether", "Netherrack", "Note", "Oak", "Oak-Wood", "Obsidian", "Ocelot", "Orb", "Ore", "Packed",
                "Pad", "Painting", "Pane", "Pearl", "Pig", "Pigman", "Piston", "Planks", "Plant", "Plate",
                "Poppy", "Portal", "Pot", "Potatoes", "Potion", "Powered", "Pressure", "Primed", "Prismarine",
                "Pumpkin", "Quartz", "Rabbit", "Rail", "Rails", "Red", "RedMushroomCap", "Redstone", "Rocket",
                "Sand", "Sandstone", "Sapling", "Sea", "Seed", "Sensor", "Sheep", "Sign", "Silverfish", "Skeleton",
                "Skull", "Slab", "Slime", "Snow", "Snowball", "Soul", "Spawner", "Spider", "Splash", "Sponge",
                "Spruce", "Squid", "Stained", "Stairs", "Stand", "Stem", "Sticky", "Stone", "Storage", "Sugar",
                "Sunflower", "TNT", "Table", "Tall", "Torch", "Trapdoor", "Trapped", "Tripwire", "Villager", "Vine",
                "Wall", "Wall-mounted", "Wart", "Water", "WebBlock", "Weighted", "White", "Witch", "Wither", "Wolf",
                "Wood", "Wooden", "Wool", "Zombie"];

function scrollNames(field,count = 0){
  field.innerHTML = ent_array[Math.floor((Math.random() * ent_array.length))];
  if(count < 50){
    setTimeout(function(){
      scrollNames(field,count + 1);
    },10);
  }
}

function getSyls() {
  return document.getElementById('syl_count').options.selectedIndex + 2;
}

function getName() {
  var syls = getSyls();
  var name = ""
  for(i = 0; i < syls; i++){
    name = name + ent_array[Math.floor((Math.random() * ent_array.length))];
  }
  return name;
}

var button = document.getElementsByTagName("button")[0];

button.onclick = function () {
  var div = document.getElementById("name");
  scrollNames(div);
  setTimeout(function(){
    div.innerHTML = "";
    div.innerHTML = getName();
  },600);
}

////////////////////////
//Craft Table...crafter.
////////////////////////

//block matrixs'
  var colors = {
    0: 'black',
    1: '#1F140A',//darkest-brown
    2: '#DBB84D',//tan
    3: '#D6AD33',//dark-tan
    4: '#A37547',//light-brown
    5: '#5C3D1F',//dark-brown
    6: '#5C1F00' //red-brown
  }
  var craftTableTop = [
    [0,0,0,0,0,6,6,6,6,6,6,0,0,0,0,0],
    [0,2,2,1,4,4,4,4,4,4,4,4,1,2,3,0],
    [0,2,1,4,4,4,4,4,4,4,4,4,4,1,3,0],
    [0,1,4,5,5,5,5,5,5,5,5,5,5,4,1,0],
    [0,4,4,5,4,4,5,4,4,5,4,4,5,4,4,0],
    [0,4,4,5,4,4,5,4,4,5,4,4,5,4,4,0],
    [0,4,4,5,5,5,5,5,5,5,5,5,5,4,4,0],
    [0,4,4,5,4,4,5,4,4,5,4,4,5,4,4,0],
    [0,4,4,5,4,4,5,4,4,5,4,4,5,4,4,0],
    [0,4,4,5,5,5,5,5,5,5,5,5,5,4,4,0],
    [0,4,4,5,4,4,5,4,4,5,4,4,5,4,4,0],
    [0,4,4,5,4,4,5,4,4,5,4,4,5,4,4,0],
    [0,1,4,5,5,5,5,5,5,5,5,5,5,4,1,0],
    [0,2,1,4,4,4,4,4,4,4,4,4,4,1,2,0],
    [0,2,2,1,4,4,4,4,4,4,4,4,1,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
////////////////////////////////////////

var tableDiv = document.getElementById('craftTable');
for(i=0;i<16;i++){
  tableDiv.innerHTML = tableDiv.innerHTML + '<div class="tabRows"></div>';
}
for(i=0;i<16;i++){
  var node = tableDiv.childNodes[i];
  for(n=0;n<16;n++){
    node.innerHTML = node.innerHTML + '<div class="cell" style="background:' + colors[craftTableTop[i][n]] + ';"></div>';
  }
}

function sizeCraftTable() {
  var w = document.getElementsByClassName('container')[0].offsetWidth;
  tableDiv.style.height = w + 'px';
}

window.addEventListener('resize', function(event){
  sizeCraftTable();
});

sizeCraftTable();
