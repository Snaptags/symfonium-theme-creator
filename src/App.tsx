import React from "react";
import styled from "@emotion/styled";

import { Color, makeTheme } from "./makeTheme";
import { ColorPicker } from "./ColorPicker";
import { parseTheme } from "./parseTheme";

const Center = styled.div``;

export const App = () => {
  const [colors, setColors] = React.useState<Array<Color>>([]);
  const [theme, setTheme] = React.useState(`{
  "description": "Symfonik theme",
  "id": "custom.symfonik.theme",
  "formatVersion": "1",
  "themeVersion": "1",
  "darkMode": "Auto",
  "colors": {
    "md_theme_light_primary": "0xFF268bd2",
    "md_theme_light_onPrimary": "0xFF93a1a1",
    "md_theme_light_primaryContainer": "0xFFeee8d5",
    "md_theme_light_onPrimaryContainer": "0xFF93a1a1",
    "md_theme_light_secondary": "0xFF2aa198",
    "md_theme_light_onSecondary": "0xFF073642",
    "md_theme_light_secondaryContainer": "0xFF93a1a1",
    "md_theme_light_onSecondaryContainer": "0xFF073642",
    "md_theme_light_tertiary": "0xFFd33682",
    "md_theme_light_onTertiary": "0xFF6c71c4",
    "md_theme_light_tertiaryContainer": "0xFF93a1a1",
    "md_theme_light_onTertiaryContainer": "0xFF073642",
    "md_theme_light_error": "0xFFdc322f",
    "md_theme_light_errorContainer": "0xFFeee8d5",
    "md_theme_light_onError": "0xFFcb4b16",
    "md_theme_light_onErrorContainer": "0xFFeee8d5",
    "md_theme_light_background": "0xFFfdf6e3",
    "md_theme_light_onBackground": "0xFF073642",
    "md_theme_light_surface": "0xFFeee8d5",
    "md_theme_light_onSurface": "0xFF073642",
    "md_theme_light_surfaceVariant": "0xFFeee8d5",
    "md_theme_light_onSurfaceVariant": "0xFF073642",
    "md_theme_light_outline": "0xFF839496",
    "md_theme_light_inverseOnSurface": "0xFFFFFFFF",
    "md_theme_light_inverseSurface": "0xFF313033",
    "md_theme_light_inversePrimary": "0xFFb58900",
    "md_theme_light_shadow": "0xFF586e75",
    "md_theme_dark_primary": "0xFF268bd2",
    "md_theme_dark_onPrimary": "0xFF586e75",
    "md_theme_dark_primaryContainer": "0xFF073642",
    "md_theme_dark_onPrimaryContainer": "0xFFfdf6e3",
    "md_theme_dark_secondary": "0xFF2aa198",
    "md_theme_dark_onSecondary": "0xFF073642",
    "md_theme_dark_secondaryContainer": "0xFF93a1a1",
    "md_theme_dark_onSecondaryContainer": "0xFF073642",
    "md_theme_dark_tertiary": "0xFFd33682",
    "md_theme_dark_onTertiary": "0xFF6c71c4",
    "md_theme_dark_tertiaryContainer": "0xFF93a1a1",
    "md_theme_dark_onTertiaryContainer": "0xFF073642",
    "md_theme_dark_error": "0xFFdc322f",
    "md_theme_dark_errorContainer": "0xFF93a1a1",
    "md_theme_dark_onError": "0xFFcb4b16",
    "md_theme_dark_onErrorContainer": "0xFF93a1a1",
    "md_theme_dark_background": "0xFF002b36",
    "md_theme_dark_onBackground": "0xFFeee8d5",
    "md_theme_dark_surface": "0xFF073642",
    "md_theme_dark_onSurface": "0xFFfdf6e3",
    "md_theme_dark_surfaceVariant": "0xFF586e75",
    "md_theme_dark_onSurfaceVariant": "0xFFfdf6e3",
    "md_theme_dark_outline": "0xFF93a1a1",
    "md_theme_dark_inverseOnSurface": "0xFF1C1B1F",
    "md_theme_dark_inverseSurface": "0xffffffff",
    "md_theme_dark_inversePrimary": "0xFFb58900",
    "md_theme_dark_shadow": "0xFF586e75"
  }
}`);

  React.useEffect(() => {
    if (theme && theme !== "") {
      try {
        const { colors } = JSON.parse(theme);
        setColors(parseTheme(colors));
      } catch (e) {
        console.error(e);
      }
    }
  }, [theme]);

  const handleChange = (key: string, theme: string) => (value: string) => {
    const nextColor = value.trim();
    const nextColors = colors.map((color) =>
      color.key !== key
        ? color
        : {
            key,
            dark: theme === "dark" ? nextColor : color.dark,
            light: theme === "light" ? nextColor : color.light,
          }
    );
    setColors(nextColors);
    nextColor.match(/#....../) && setTheme(makeTheme(nextColors));
  };

  return (
    <Center>
      <textarea
        rows={10}
        cols={60}
        spellCheck={false}
        value={theme}
        onChange={({ target }) => setTheme(target.value)}
      />
      <table style={{ borderSpacing: 4 }}>
        <thead>
          <tr>
            <th></th>
            <th>dark</th>
            <th>light</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {colors.map(({ key, dark, light }) => (
            <tr key={key}>
              <td style={{ textAlign: "right" }}>{key}</td>
              <td style={{ paddingLeft: 16 }}>
                <div style={{ whiteSpace: "nowrap" }}>
                  <ColorPicker
                    color={dark}
                    onChange={handleChange(key, "dark")}
                  />
                </div>
              </td>
              <td style={{ paddingLeft: 16 }}>
                <ColorPicker
                  color={light}
                  onChange={handleChange(key, "light")}
                />
              </td>
              <td style={{ paddingLeft: 16 }}>{key}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Center>
  );
};
