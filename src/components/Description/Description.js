import styled from 'styled-components';
export const DescriptionStyled = styled.p`
text-align: justify;
text-justify: inter-word;
`

export const Description = (props) => {
    const words = props.noticeDescription && props.noticeDescription.split(/( )/);
    const descriptionWordCount = 16
    const wordsToPrint = words.slice(0, descriptionWordCount)
    return (
        <DescriptionStyled>
            {props.noticeDescription && wordsToPrint}
            {props.noticeDescription && props.noticeDescription.split(' ').length > descriptionWordCount ? "..." : ""}
        </DescriptionStyled>
    );
}