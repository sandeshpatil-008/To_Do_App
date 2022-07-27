import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PlusSquare } from 'react-bootstrap-icons';

const Addcategory = () => {

    const [categoryName, setcategoryName] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            categoryName,
        }
        console.log(dataObj);
        axios.post("http://localhost:4000/category", dataObj);
        window.location.reload();

    }


    return (
        <>
            <button type="submit" className='PlusSquare' data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ marginTop: "px" }} ><PlusSquare className='Squre' />
            </button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Add Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={submitHandler}>
                            <div class="modal-body">
                                <div className='row g-3'>
                                    <div className='col'>
                                        <input type="text" className='form-control' placeholder='Enter Category Name' onChange={e => setcategoryName(e.target.value)} value={categoryName} />
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Addcategory;