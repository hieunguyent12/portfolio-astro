const labelColors = [
  {
    bg: "bg-blue-200",
    text: "text-blue-700",
  },
  {
    bg: "bg-gray-300",
    text: "text-gray-800",
  },
  {
    bg: "bg-pink-200",
    text: "text-pink-700",
  },
];

export function getRandomLabelColor() {
  return labelColors[Math.floor(Math.random() * labelColors.length)];
}

export function hyphenate(str: string) {
  return str.replace(/ +/g, "-");
}
