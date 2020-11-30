import React from 'react'
import {
    Input,
    FormGroup,
    Label,
    Error,
    ErrorMessage
} from './ContactElements';

const TextInput = (props) => {
    return (
        <FormGroup>
            <Label htmlFor={props.name}>{props.name}*</Label>
            <Input
                type="text"
                {...props}
            />
            {!props.valid ? <Error><ErrorMessage>{props.errorMessage}</ErrorMessage></Error> : null}
        </FormGroup>
    )
}

export default TextInput
