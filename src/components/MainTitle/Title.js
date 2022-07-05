import { TitleStyle } from "../../pages/Main/styled";

export const Title = (props) => {
  return (
    <TitleStyle>
      <h1>Editais</h1>
      <p> {props.opened} abertos | {props.closed} fechados</p>
    </TitleStyle>
  );
};
