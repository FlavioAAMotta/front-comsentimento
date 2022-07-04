import styled from "styled-components";
import { descriptionWordCount } from "../../constants/variables";
export const DescriptionStyled = styled.p`
  text-align: justify;
  text-justify: inter-word;
  font-size: 18px;
`;

export const Description = (props) => {
  const words = props.noticeDescription && props.noticeDescription.split(/( )/);
  const wordsToPrint = words.slice(0, descriptionWordCount);
  return (
    <DescriptionStyled>
      {props.noticeDescription && wordsToPrint}
      {props.noticeDescription &&
      props.noticeDescription.split(" ").length > descriptionWordCount
        ? "[...]"
        : ""}
    </DescriptionStyled>
  );
};
