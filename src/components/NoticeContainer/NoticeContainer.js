import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid black;
    width: 80%;
    margin-bottom: 8px;
    cursor: pointer;
    :hover{
        background-color: lightgray;
    }
`

export const NoticeContainer = (props) => {
    const handleNoticeClick = () => {
        props.handleClick(props.notice.noticeId);
    }

    return(
        <Container onClick={handleNoticeClick}>
            <p>{props.notice.noticeTitle}</p>
            <p>{props.notice.noticeDescription}</p>
            <p>{props.notice.noticeOpeningDate}</p>
            <p>{props.notice.noticePDFDetailsPath}</p>
            <p>{props.notice.noticeStatus}</p>
        </Container>
    );
}