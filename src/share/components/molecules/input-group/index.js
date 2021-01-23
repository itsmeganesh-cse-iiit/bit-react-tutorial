import React from 'react'
import Input from 'share/components/atoms/input'
import {Wrap,InputLabel,ErrText} from './styles'

const InputGroup = ({inputLabel,type,size,block,disabled,error,errorText,value,className,...rest}) => {
    return (
        <Wrap className={className} {...rest}>
            <InputLabel>{inputLabel}</InputLabel>
            <Input
                type={type} 
                size={size} 
                block={block} 
                disabled={disabled} 
                error={error} 
                {...rest} 
                value={value}
                className={className}
                {...rest}
            />
            {(error && errorText )&& <ErrText size={size} block={block}>{errorText}</ErrText>}
        </Wrap>
    )
}


InputGroup.defaultProps={
    type:"text",
    size:"md",
    disabled:false,
    error:false,
    block:false,
    inputLabel:"Input Label"
}

export default InputGroup
