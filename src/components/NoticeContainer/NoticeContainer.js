import { Container, NoticeTitle, DisabledContainer, ContainerRow } from "./styled"
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
                        <ContainerRow>
                            <p>{props.notice.noticeOpeningDate}</p>
                            <NoticeTitle>{props.notice.noticeTitle}</NoticeTitle>
                            <div />
                        </ContainerRow>
                        <Description noticeDescription={props.notice.noticeDescription}>{props.notice.noticeDescription}</Description>
                        <ContainerRow>
                            <div/>
                            <Button onClick={handleNoticeClick}
                                status={props.notice.noticeStatus}
                            />
                            <div />
                        </ContainerRow>
                    </Container>
                    :
                    <DisabledContainer>
                        <ContainerRow>
                            <p>{props.notice.noticeOpeningDate}</p>
                            <NoticeTitle>{props.notice.noticeTitle}</NoticeTitle>
                            <div />
                        </ContainerRow>
                        <Description noticeDescription={props.notice.noticeDescription}>{props.notice.noticeDescription}</Description>
                        <ContainerRow>
                            <div />
                            <Button
                                status={props.notice.noticeStatus}
                            />
                            <div />
                        </ContainerRow>
                    </DisabledContainer>}
        </>
    );
}