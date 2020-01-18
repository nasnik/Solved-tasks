/*
Will you survive the zombie onslaught?
I'm afraid you're in a rather unfortunate situation. You've injured your leg, and are unable to walk, and a number of zombies are shuffling towards you, intent on eating your brains. Luckily, you're a crack shot, and have your trusty rifle to hand.

The zombies start at range metres, and move at 0.5 metres per second. Each second, you first shoot one zombie, and then the remaining zombies shamble forwards another 0.5 metres.

If any zombies manage to get to 0 metres, you get eaten. If you run out of ammo before shooting all the zombies, you'll also get eaten. To keep things simple, we can ignore any time spent reloading.

Write a function that accepts the total number of zombies, a range in metres, and the number of bullets you have.

If you shoot all the zombies, return "You shot all X zombies."
If you get eaten before killing all the zombies, and before running out of ammo, return "You shot X zombies before being eaten: overwhelmed."
If you run out of ammo before shooting all the zombies, return "You shot X zombies before being eaten: ran out of ammo."

(If you run out of ammo at the same time as the remaining zombies reach you, return "You shot X zombies before being eaten: overwhelmed.".)

Good luck! (I think you're going to need it.)
Test.assertEquals(zombie_shootout(3, 10, 10), "You shot all 3 zombies.");
  Test.assertEquals(zombie_shootout(100, 8, 200), "You shot 16 zombies before being eaten: overwhelmed.");
  Test.assertEquals(zombie_shootout(50, 10, 8), "You shot 8 zombies before being eaten: ran out of ammo.");
 */
function zombie_shootout(zombies, range, ammo) {
    let slots = range * 2;
    if(zombies > ammo && ammo >= slots) return `You shot ${slots} zombies before being eaten: overwhelmed.`;
    else if(zombies > ammo && ammo < slots) return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
    else if(zombies > slots && ammo >= slots) return `You shot ${slots} zombies before being eaten: overwhelmed.`;
    else if(zombies > slots && ammo < slots) return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
    else return `You shot all ${zombies} zombies.`;
}
