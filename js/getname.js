//////////////////////
//Random Name Builder
/////////////////////

var ent_array = ["Experience", "Orb", "Lead", "Knot", "Painting", "Arrow", "Snowball", "Ghast",
                 "Fireball", "Blaze", "Ender", "Pearl", "Eye", "Splash", "Potion", "Bottle",
                 "Enchanting", "Frame", "Wither", "Skull", "Primed", "TNT", "Falling", "Block",
                 "Firework", "Rocket", "Minecart", "Command", "Boat", "Storage", "Powered", "Hopper",
                 "Spawner", "Creeper", "Skeleton", "Spider", "Giant", "Zombie", "Slime", "Pigman",
                 "Enderman", "Cave", "Silverfish", "Magma", "Cube", "Dragon", "Bat", "Witch", "Endermite",
                 "Guardian", "Pig", "Sheep", "Cow", "Chicken", "Squid", "Wolf", "Mooshroom", "Snow", "Golem",
                 "Ocelot", "Iron", "Horse", "Rabbit", "Villager", "Crystal"];

function getName() {
  var syls = document.getElementById('syl_count').options.selectedIndex + 2;
  var name = ""
  for(i = 0; i < syls; i++){
    name = name + ent_array[Math.floor((Math.random() * ent_array.length))];
  }
  return name;
}

var button = document.getElementsByTagName("button")[0];

button.onclick = function () {
  var div = document.getElementById("name");
  div.innerHTML = "";
  div.innerHTML = getName();
}

////////////////////////
//Craft Table...crafter.
////////////////////////

//block matrixs'
  var colors = {
    0: 'black',
    1: '#1F140A', //darkest-brown
    2: '#DBB84D', //tan
    3: '#D6AD33',//dark-tan
    4: '#A37547',//light-brown
    5: '#5C3D1F',//dark-brown
    6: '#5C1F00'//red-brown
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
var w = document.getElementsByClassName('container')[0].offsetWidth;
tableDiv.style.height = w + 'px';
