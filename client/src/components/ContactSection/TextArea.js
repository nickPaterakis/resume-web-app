import React from 'react'
import {
    TextArea as TextAreaStyledComponent,
    FormGroup,
    Label,
    Error,
    ErrorMessage
} from './ContactElements';

const TextArea = (props) => {
    return (
        <FormGroup>
            <Label htmlFor={props.name}>{props.name}*</Label>
            <TextAreaStyledComponent
                type="text"
                {...props}
            />
            {!props.valid ? <Error><ErrorMessage>{props.errorMessage}</ErrorMessage></Error> : null}
        </FormGroup>
    )
}

export default TextArea
