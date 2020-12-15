import styled from 'styled-components/macro'

export default function Todo({ text, checked, onToggleTodo }) {

    return (
        <Label> 
            <input 
                type="checkbox"
                name="toDo"
                checked={checked}
                onChange={onToggleTodo}/>
            <span>{text}</span>
        </Label>
    )
}

const Label = styled.label`
    display: flex;
    align-items: baseline;

    span {
        margin: 0.3em 0.5em;
        padding-bottom: 0.5em;
        border-bottom: 0.5px solid #ececec;
        width: 300px;
        font-size: 16px;
    }
`