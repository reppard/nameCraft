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
