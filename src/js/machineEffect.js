export function machineEffect(str) {
  let arrStr = str.split("");
  let i = 0;
  let text = "";
  let interval = setInterval(() => {
    text += arrStr[i];
    i++;
    return text;
  }, 1000);
  if (i === arrStr.length) clearInterval(interval);
}
