import { TitleStyle } from "../../pages/Main/styled";
import smallIcon from "../../images/comsentimento_simbolo-01.png"
import {SmallIco} from "./styled"

export const Title = (props) => {
  return (
    <TitleStyle>
      <SmallIco src={smallIcon}/>
      <h1>Editais</h1>
      <p> {props.opened} abertos | {props.closed} fechados</p>
    </TitleStyle>
  );
};
