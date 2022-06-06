import styled from 'styled-components';
export const DescriptionStyled = styled.p`
text-align: justify;
text-justify: inter-word;
`

export const Description = (props) => {
    const textSize = 450
    return (
        <DescriptionStyled>
            {props.noticeDescription && props.noticeDescription.substring(0, textSize)}
            {props.noticeDescription && props.noticeDescription.length > textSize ? "..." : ""}
        </DescriptionStyled>
    );
}