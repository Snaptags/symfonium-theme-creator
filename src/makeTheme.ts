export type Color = {
  key: string;
  dark: string;
  light: string;
};

const parseColor = (color = "") =>
  color
    .replace(/(#......$)/, "$1FF")
    .replace(/#(..)(..)(..)(..)/, "0x$4$1$2$3");

const reduceColors = (colors: Array<Color>, theme: string) =>
  colors.reduce<Record<string, string>>(
    (previousValue, { key, dark, light }) => ({
      ...previousValue,
      [`md_theme_${theme}_${key}`]: parseColor(theme === "dark" ? dark : light),
    }),
    {}
  );

const makeColors = (colors: Array<Color>) => ({
  ...reduceColors(colors, "light"),
  ...reduceColors(colors, "dark"),
});

export const makeTheme = (colors: Array<Color>) =>
  JSON.stringify(
    {
      description: "Symfonik theme",
      id: "custom.symfonik.theme",
      formatVersion: "1",
      themeVersion: "1",
      darkMode: "Auto",
      colors: makeColors(colors),
    },
    null,
    "  "
  );
