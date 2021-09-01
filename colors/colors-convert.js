// hex 转 rgb
function hexRgb(hex, options = {}) {
  const number = Number.parseInt(hex, 16);
  const red = number >> 16;
  const green = (number >> 8) & 255;
  const blue = number & 255;

  if (options.format === "array") {
    return [red, green, blue];
  }

  if (options.format === "css") {
    return `rgb(${red}, ${green}, ${blue})`;
  }
  return { red, green, blue };
}

// rgb 转 hex
function rgbHex(red, green, blue) {
  if (typeof red === "string") {
    [red, green, blue] = red
      .match(/(0?\.?\d{1,3})%?\b/g)
      .map((component) => Number(component));
  }
  return (blue | (green << 8) | (red << 16) | (1 << 24)).toString(16).slice(1);
}
