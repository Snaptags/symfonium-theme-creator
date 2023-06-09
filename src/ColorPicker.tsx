import React from "react";
import { ColorResult, SketchPicker } from "react-color";
import styled from "@emotion/styled";
import { PresetColor } from "react-color/lib/components/sketch/Sketch";

const presetColors: Array<PresetColor> = [
  "#002b36",
  "#073642",
  "#586e75",
  "#657b83",
  "#839496",
  "#93a1a1",
  "#eee8d5",
  "#fdf6e3",
  "#b58900",
  "#cb4b16",
  "#dc322f",
  "#d33682",
  "#6c71c4",
  "#268bd2",
  "#2aa198",
  "#859900",
];

const Input = styled.div`
  --border: rgba(0, 0, 0, 0.1);
  display: flex;
  > input {
    border: 1px solid var(--border);
  }
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Popover = styled.div`
  position: absolute;
  padding-top: 8px;
  z-index: 2;
`;

const Swatch = styled.div`
  padding: 4px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px var(--border);
  display: inline-block;
  cursor: pointer;
`;

const Color = styled.div<{ color: string }>`
  width: 80px;
  height: 16px;
  borderradius: 2px;
  background: ${({ color }) => color};
`;

export interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}
export const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const [show, setShow] = React.useState(false);

  const onClick = () => setShow(!show);
  const onClose = () => setShow(false);

  const handleChange = ({ hex, rgb }: ColorResult) => {
    const alpha =
      rgb.a === 0 ? "" : Math.round((rgb.a ?? 1) * 255).toString(16);
    onChange(hex + alpha);
  };

  return (
    <Input>
      <Swatch onClick={onClick}>
        <Color color={color} />
        {!show ? null : (
          <Popover>
            <Cover onClick={onClose} />
            <SketchPicker
              color={color}
              onChange={handleChange}
              presetColors={presetColors}
            />
          </Popover>
        )}
      </Swatch>
      <input
        type={"text"}
        size={10}
        value={color}
        onChange={({ target }) => onChange(target.value)}
      />
    </Input>
  );
};
