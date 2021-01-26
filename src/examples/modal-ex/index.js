import React,{useState} from 'react'
import Modal,{ModalFooter,ModalButton} from 'share/components/organisms/modal'

const ModalExamples = () => {
    const [activeModal, setActiveModal] = useState('')
    return (
        <div style={{width:"200px",margin:"auto",marginTop:"100px"}}>
            <Modal open={activeModal==="logout"} handleClose={setActiveModal} headerText="Logout" body="Are you sure you want to log out?"/>
            <Modal open={activeModal==="info"} handleClose={setActiveModal} headerText="Information" 
            body={<div>Contact your school administration if you are <br/>unable to login"</div>}
            btnSet={{ok:{
                show:true,
                type:"primary"
            },cancel:{
                show:false,
                type:"outline"
            }}}
            />
            <Modal open={activeModal==="custom"} handleClose={setActiveModal} >
                Write Our own modal content 
                <ModalButton onClick={()=>setActiveModal('')}>Close</ModalButton>
            </Modal>

            <ModalButton  variant="primary" onClick={()=>setActiveModal('info')} >Info Modal</ModalButton>
            <ModalButton onClick={()=>setActiveModal('logout')} >Logout Modal</ModalButton>
            <ModalButton onClick={()=>setActiveModal('custom')} >Custom Modal</ModalButton>
        </div>
    )
}

export default ModalExamples
