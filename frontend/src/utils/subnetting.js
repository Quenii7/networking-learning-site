export function getSubnetChallenge() {
  const prefixes = [24, 25, 26, 27, 28, 29, 30];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const blockSize = 2 ** (32 - prefix);
  const usableHosts = Math.max(blockSize - 2, 0);

  return {
    network: `192.168.${Math.floor(Math.random() * 10)}.0/${prefix}`,
    prefix,
    blockSize,
    usableHosts
  };
}

export function checkSubnetAnswer(challenge, answer) {
  return Number(answer) === challenge.usableHosts;
}
