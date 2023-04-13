export default function sortPlayers(players) {
  let result = players.sort((a, b) => (a.health > b.health ? -1 : 1));
  return result;
}
