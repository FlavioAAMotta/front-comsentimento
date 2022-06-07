import { FormContainer, CancelContainer, SendContainer, CheckField, TitleContainer, DescriptionContainer, FileField, ButtonsContainer } from './styled-form'

export const NoticeForm = (props) => {
    return (
        <FormContainer>
            <TitleContainer
                type="text"
                name="title"
                placeholder="Título"
                value={props.form.title}
                onChange={props.onChange}
            />
            <DescriptionContainer
                name="description"
                cols="40" rows="5"
                value={props.form.description}
                onChange={props.onChange} placeholder="Descrição"
            />

            <input
                type="date"
                name="date"
                value={props.form.date}
                onChange={props.onChange}
            />
            <CheckField>
                <p>Ativo: </p>
                <input
                    type="checkbox"
                    name="status"
                    value={props.form.status}
                    onChange={props.onChangeStatus}
                />
            </CheckField>
            <FileField
                type="file"
                name="filePath"
                value={props.form.filePath}
                onChange={props.onChange}
                accept="application/pdf"
            />
            <ButtonsContainer>
                <SendContainer onClick={props.onSubmit}>ENVIAR</SendContainer>
                <CancelContainer onClick={props.onCancel}>CANCELAR</CancelContainer>
            </ButtonsContainer>
        </FormContainer>
    )
}