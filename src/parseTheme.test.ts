import { parseTheme } from "./parseTheme";

it("can parse colors", () => {
  const result = parseTheme({
    md_theme_light_primary: "0xFF552fff",
    md_theme_light_secondary: "0xFF006874",
    md_theme_light_onError: "0xFFFFFFFF",
    md_theme_dark_primary: "0xFFc7bfff",
    md_theme_dark_shadow: "0xFF000000",
  });

  expect(result).toMatchInlineSnapshot(`
    Array [
      Object {
        "dark": "#c7bfff",
        "key": "primary",
        "light": "#552fff",
      },
      Object {
        "dark": "",
        "key": "secondary",
        "light": "#006874",
      },
      Object {
        "dark": "",
        "key": "onError",
        "light": "#FFFFFF",
      },
      Object {
        "dark": "#000000",
        "key": "shadow",
        "light": "",
      },
    ]
  `);
});
