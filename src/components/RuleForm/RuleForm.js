import { FormContainer, FieldContainer, CheckField } from './styled-form'

export const RuleForm = (props) =>{
    return(
        <FormContainer onSubmit={props.onCancel}>
            <FieldContainer>
                <input type="text" placeholder="Título" />
                <p onClick={props.onCancel}>X</p>
            </FieldContainer>
            <FieldContainer>
                <input type="text" placeholder="Descrição" />
            </FieldContainer>
            <FieldContainer>
                <input type="date" placeholder="Data" />
                <CheckField><p>Ativo: </p><input type="checkbox" placeholder="Status"/></CheckField>
            </FieldContainer>
            <FieldContainer>
                <input type="file" placeholder="PDF" accept="application/pdf"/>
            </FieldContainer>
            <FieldContainer>
                <button>ENVIAR</button>
            </FieldContainer>
        </FormContainer>
    )
}