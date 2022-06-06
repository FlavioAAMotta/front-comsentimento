import { FormContainer, FieldContainer, CheckField } from './styled-form'

export const NoticeForm = (props) => {
    return (
        <FormContainer onSubmit={props.onSubmit}>
            <FieldContainer>
                <input
                    type="text"
                    name="title"
                    placeholder="Título"
                    value={props.form.title}
                    onChange={props.onChange}
                />
                <p onClick={props.onCancel}>X</p>
            </FieldContainer>
            <FieldContainer>
                <textarea
                    name="description"
                    cols="40" rows="5"
                    value={props.form.description}
                    onChange={props.onChange} placeholder="Descrição"/>
            </FieldContainer>
            <FieldContainer>
                <input
                    type="date"
                    name="date"
                    value={props.form.date}
                    onChange={props.onChange}
                />
                <CheckField><p>Ativo: </p>
                    <input
                        type="checkbox"
                        name="status"
                        value={props.form.status}
                        onChange={props.onChangeStatus}
                    />
                </CheckField>
            </FieldContainer>
            <FieldContainer>
                <input
                    type="file"
                    name="filePath"
                    value={props.form.filePath}
                    onChange={props.onChange}
                    accept="application/pdf"
                />
            </FieldContainer>
            <FieldContainer>
                <button>ENVIAR</button>
            </FieldContainer>
        </FormContainer>
    )
}