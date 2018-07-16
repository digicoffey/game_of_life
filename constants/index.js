export const API_URL = 'http://localhost:8080/room';

export const state = {
  lives: 5,
  gold: 0,
  position: [0, 0]
};

export const messages = {
  gameTitle: 'Game Of Life\n',
  gameInstructions: '\nWelcome to the Game Of Life! As we all know, life is all about MONSTERS and GOLD.\nYou are in a room with 4 doors facing North, South, East & West. To go through a door,\ninput which direction you want to go. Once you have entered a new room, you will\neither be eaten by a monster, or you will find yourself some gold!!!\n\nYou only have 5 lives, so choose wisely grasshopper.\n',
  instruction: '\nEnter a direction: North | East | South | West\n\n',
  fail: '\nComputer says no, please enter one of: North | East | South | West\n',
  monster: '\nMonster! You were delicious!!\n',
  gold: '\nShenanigans! You got me gold!\n',
  gameOver: '\nGAME OVER\n'
};

export const validDirections = ['north', 'south', 'east', 'west'];

export const difficulty = ['GOLD', 'GOLD', 'GOLD', 'MONSTER', 'MONSTER'];
