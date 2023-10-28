export function generateRandomRGBAColor(alpha?: string): string {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 120);
  const blue = Math.floor(Math.random() * 100);
  alpha = alpha ? alpha : Math.random().toFixed(1);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

