import React,{useState} from 'react'
import Modal,{ModalFooter,Button} from 'share/components/organisms/modal'

const ModalExamples = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div style={{width:"200px",margin:"auto",marginTop:"100px"}}>
            {/* <Modal open={openModal} handleClose={()=>setOpenModal(false)} headerText="Logout" body="Are you sure you want to log out?"/> */}
            <Modal open={openModal} handleClose={()=>setOpenModal(false)} headerText="Information" 
            body={<div>Contact your school administration if you are <br/>unable to login"</div>}
            btnSet={{ok:true,cancel:false}}
            />

            <button onClick={()=>setOpenModal(true)} >Click to open modal</button>
        </div>
    )
}

export default ModalExamples
