import React from "react";
import styled from "@emotion/styled";

const Center = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const App = () => (
  <Center>
    <Header>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </Header>
  </Center>
);
