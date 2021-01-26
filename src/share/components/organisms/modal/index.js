import React from 'react'
import {ModalContainer,ModalHeader,ModalBody,ModalFooter,ModalContent,H2,Button} from './styles'

const Modal = ({open,handleClose,body,centered,size,onSubmit,btnSet,children,header,headerText,footer,...rest}) => {
    const closeModal=()=>{
        handleClose()
    }
    const handleSubmit=()=>{
        onSubmit()
        handleClose()
    }
    return (
        <>
        {open && 
            <ModalContainer {...rest} centered={centered}>
                <ModalContent size={size} {...rest}>
                    {children ? children : 
                    <>
                    {header ? header : 
                    <ModalHeader>
                            <H2>{headerText}</H2>
                        </ModalHeader>}
                        
                        <ModalBody>{body}</ModalBody>
                        {footer ? footer : 
                        <ModalFooter>
                            {btnSet.ok && <Button variant="outline" onClick={handleSubmit}>Yes</Button>}
                            {btnSet.cancel  && <Button variant="primary" size={size} onClick={closeModal}>Cancel</Button>}</ModalFooter>}
                    </>
                    }
                </ModalContent>
            </ModalContainer>
        }
        </>
    )
}
Modal.defaultProps={
    open:false,
    handleClose:()=>{},
    onSubmit:()=>{},
    size:"md",
    btnSet:{
        ok:true,
        cancel:true
    },
    headerText:"Header"
    
}
export default Modal

export {Button,ModalFooter,ModalHeader,ModalBody}
