const parseColor = (color = "") =>
  color.replace(/0x(..)(..)(..)(..)/, "#$2$3$4$1").replace(/FF$/, "");

export const parseTheme = (colors: Record<string, string>) => {
  const keys = Array.from(
    new Set(
      Object.keys(colors).map((value) => value.replace(/md_theme_[^_]+_/, ""))
    )
  ); // get a unique list of all keys

  return keys.map((key) => ({
    key,
    dark: parseColor(colors[`md_theme_dark_${key}`]),
    light: parseColor(colors[`md_theme_light_${key}`]),
  }));
};
