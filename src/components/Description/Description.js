export const Description = (props) => {
    const textSize = 450
    return (
        <p>
            {props.noticeDescription.substring(0, textSize)}
            {props.noticeDescription.length > textSize ? "..." : ""}</p>
    );
}