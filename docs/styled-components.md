# Styled Components

- Styles components é uma biblioteca responsável pela estilização de componentes. Ela se utiliza do css-in-js, ou seja, nos permitindo escrever código `CSS` dentro de arquivos `js | ts`.

- Uma ferramenta poderosa para a criação de _Design Systems_, tornando possivel a modularização de temas, e, por sua vez, a adição de lógica e interpolação de variáveis, sendo possível a integração de codigo `Javascript` ou `TypeScript`.

Sintaxe principal:

```ts
import styled from "styled-components";

interface ButtonProps {
  variant: "primary" | "secondary" | "neutral";
}

const variants = {
  primary: "yellow",
  secondary: "green",
  neutral: "white",
};

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 5%;
  cursor: pointer;
  padding: 1rem;

  ${(props) => `background-color: ${variants[props.variant]};`}

  &:hover {
    background-color: #ccc;
    color: #080808;
  }
`;
```
