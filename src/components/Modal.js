import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components"
function Modals(){
    const [show, setShow] = useState(false);
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <Wrapper>
                <Button variant="primary" onClick={handleShow}>
                    Add Product
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add Product
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form method="POST">
                            <div className="form-group">
                                <label>Upload your Product image here</label>
                                <div className="upload-image">
                                    <span>
                                        <i className="bx bxs-image-add">
                                        </i>
                                        Click here or drop files to upload
                                    </span>
                                    <input 
                                    value={image}
                                    type="file" 
                                    className="form-control-file" 
                                    name="productImage" 
                                    accept="image/*"
                                    onChange={(e)=> setImage(e.target.value)}
                                    />
                                </div>
                            </div>
                            <h5 className="title">Add your Product description and necessary information from here</h5>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" 
                                className="form-control" 
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                value={category}
                                onChange={(e)=> setCategory(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input 
                                type="number" 
                                className="form-control" 
                                value={price}
                                onChange={(e)=> setPrice(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control" rows="3"></textarea>
                            </div>
                            
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={  handleClose }>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
        </Wrapper>
    )
}
const Wrapper = styled.div`
margin-left:45%;
width:500px;
color:#0099ff;
.bx{
    font-family: boxicons!important;
    font-weight: 400;
    font-style: normal;
    font-feature-settings: normal;
    font-variant: normal;
    line-height: 1;
    display: inline-block;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
}




`
export default Modals;