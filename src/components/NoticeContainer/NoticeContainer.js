import { Container, NoticeTitle } from "./styled"
import { Description } from "../Description/Description";
import { Button } from "../Atomic/Button"

export const NoticeContainer = (props) => {
    const handleNoticeClick = () => {
        props.handleClick(props.notice.noticeId);
    }

    return (
        <Container 
        onClick={handleNoticeClick}>
            <NoticeTitle>{props.notice.noticeTitle}</NoticeTitle>

            <Description noticeDescription={props.notice.noticeDescription}>{props.notice.noticeDescription}</Description>
            {/* <p>{props.notice.noticeOpeningDate}</p> */}

            <p>{props.notice.noticeStatus}</p>
            <Button
                text=
                {props.notice.noticeStatus ? "Encerrado" : "Ver mais"}
            />
        </Container>
    );
}