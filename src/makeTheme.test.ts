import { makeTheme } from "./makeTheme";

it("can make a theme", () => {
  const result = makeTheme([
    {
      dark: "#c7bfffFF",
      key: "primary",
      light: "#552fffFF",
    },
    {
      dark: "",
      key: "secondary",
      light: "#006874FF",
    },
    {
      dark: "",
      key: "onError",
      light: "#FFFFFFFF",
    },
    {
      dark: "#000000FF",
      key: "shadow",
      light: "",
    },
  ]);

  expect(result).toMatchInlineSnapshot(`
    "{
      \\"description\\": \\"Symfonik theme\\",
      \\"id\\": \\"custom.symfonik.theme\\",
      \\"formatVersion\\": \\"1\\",
      \\"themeVersion\\": \\"1\\",
      \\"darkMode\\": \\"Auto\\",
      \\"colors\\": {
        \\"md_theme_light_primary\\": \\"0xFF552fff\\",
        \\"md_theme_light_secondary\\": \\"0xFF006874\\",
        \\"md_theme_light_onError\\": \\"0xFFFFFFFF\\",
        \\"md_theme_light_shadow\\": \\"\\",
        \\"md_theme_dark_primary\\": \\"0xFFc7bfff\\",
        \\"md_theme_dark_secondary\\": \\"\\",
        \\"md_theme_dark_onError\\": \\"\\",
        \\"md_theme_dark_shadow\\": \\"0xFF000000\\"
      }
    }"
  `);
});
