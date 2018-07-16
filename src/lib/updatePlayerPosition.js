export const updatePlayerPosition = (position, direction) => {
  switch (direction.toLowerCase()) {
    case 'north':
      return [position[0], position[1] + 1];
      break;
    case 'south':
      return [position[0], position[1] - 1];
      break;
    case 'east':
      return [position[0] + 1, position[1]];
      break;
    case 'west':
      return [position[0] - 1, position[1]];
      break;
    default:
      return position;
  }
};
