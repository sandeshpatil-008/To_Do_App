import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
const Editcategory = () => {

    const navigate = useNavigate();
    const { userID } = useParams();
    const [userData, setuserData] = useState([]);
    const [categoryName, setcategoryName] = useState();

    useEffect(() => {
        axios.get(`http://localhost:4000/category/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];
                console.log(rawData);
                setcategoryName(rawData.categoryName);
                setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);
    console.log(userData);

    const editHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            categoryName,
        }
        console.log(dataObj);
        axios.put(`http://localhost:4000/category/${userID}`, dataObj)//send dataObject
            .then(() => {
                alert("Update Succesfully");
                navigate("/category");
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <form onSubmit={editHandler}>
                <div class="modal-body">
                    <div className='row g-3'>
                        <div className='col'>
                            <input type="text" className='form-control' placeholder='Enter Category Name' onChange={e => setcategoryName(e.target.value)} value={categoryName} />
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style={{justifyContent:"center"}}>
                <button type="submit" className="btn btn-primary">Update</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>navigate("/category")}>Close</button>
                </div>
            </form>

        </>
    );
};

export default Editcategory;