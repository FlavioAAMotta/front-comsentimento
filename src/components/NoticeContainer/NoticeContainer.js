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
                    <Container onClick={handleNoticeClick}>
                        <NoticeTitle>{props.notice.noticeTitle}</NoticeTitle>

                        <Description noticeDescription={props.notice.noticeDescription}>{props.notice.noticeDescription}</Description>
                        {/* <p>{props.notice.noticeOpeningDate}</p> */}
                        <Button
                            status={props.notice.noticeStatus}
                        />
                    </Container> :
                    <DisabledContainer onClick={handleNoticeClick}>
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