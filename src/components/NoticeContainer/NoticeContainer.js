import { Container, NoticeTitle, DisabledContainer } from "./styled"
import { Description } from "../Description/Description";
import { Button } from "../Atomic/Button"

export const NoticeContainer = (props) => {
    const handleNoticeClick = () => {
        props.handleClick(props.notice.noticeId);
    }
    return (
        <>
            {
                props.notice.noticeStatus == 1 ?
                    <Container>
                        <NoticeTitle>{props.notice.noticeTitle}</NoticeTitle>

                        <Description noticeDescription={props.notice.noticeDescription}>{props.notice.noticeDescription}</Description>
                        {/* <p>{props.notice.noticeOpeningDate}</p> */}
                        <Button onClick={handleNoticeClick}
                            status={props.notice.noticeStatus}
                        />
                    </Container> 
                    :
                    <DisabledContainer>
                        <NoticeTitle>{props.notice.noticeTitle}</NoticeTitle>

                        <Description noticeDescription={props.notice.noticeDescription}>{props.notice.noticeDescription}</Description>
                        {/* <p>{props.notice.noticeOpeningDate}</p> */}
                        <Button
                            status={props.notice.noticeStatus}
                        />
                    </DisabledContainer>}
        </>
    );
}