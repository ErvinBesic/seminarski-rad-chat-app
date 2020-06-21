export function randomName() {
  const users = [
    "violet",
    "water",
    "wildflower",
    "wave",
    "water",
    "resonance",
    "sun",
    "wood",
    "dream",
    "cherry",
    "tree",
    "fog",
    "frost",
    "voice",
    "paper",
    "frog",
    "smoke",
    "star",
  ];

  const nickName = users[Math.floor(Math.random() * users.length)];
  return nickName;
}
