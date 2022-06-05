import { FormContainer, FieldContainer, CheckField } from './styled-form'

export const RuleForm = (props) => {
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
                <textarea name="Text1" cols="40" rows="5" value={props.form.description}
                    onChange={props.onChange} placeholder="Descrição"></textarea>
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
                        name="checkbox"
                        value={props.form.status}
                        onChange={props.onChange}
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