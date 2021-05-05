const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = (objeto) => {
  let min = 15;
  return (Math.random() * (objeto.strength - min) + min);
}

const warriorDmg = (objeto) => {
  return (Math.random() * (objeto.strength * objeto.weaponDmg - objeto.strength) + objeto.strength);
}

const mageDmg = (objeto) => {
  
}
