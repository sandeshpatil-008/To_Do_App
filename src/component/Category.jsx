import React, { useEffect, useState } from 'react';
import './Category.css'
import { CardChecklist, RecordCircle, ThreeDotsVertical, PencilSquare, XLg } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom'
import category1 from './img/category1.png'
import Addcategory from './Addcategory';
import axios from 'axios'

const Category = () => {

    const navigate = useNavigate();
    const [userData, setuserData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/category")
            .then(async (res) => {
                const rawData = await res.data;
                console.log(rawData)
                setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);
    console.log(userData);

    const deletHandler = async (userID) => {
        await axios.delete(`http://localhost:4000/category/${userID}`);

        window.location.reload();

    }

    return (
        <>
            <div className='toDoMain'>
                <CardChecklist className='CardChecklist' onClick={() => navigate("/schedule")} />
                <div className='heading'>Category
                </div>
                <Addcategory/>
            </div>
            <div className='mainImg'>
                <div className='bgColor'>
                {/* <img className='categortImg' src={category1} alt="" /> */}
                <h1 className='heading1 cateCenter'>50+<br/>Categories</h1>
                </div>
            </div>
            {
                userData.map(row => {
                    return (
                        <div className='catSection'>
                            <div><RecordCircle className='RecordCircle' /></div>
                            <div>
                                <h1 style={{ fontSize: "2rem", marginBottom: "0px", marginTop: "5px" }}>{row.categoryName}</h1>
                                <h3 style={{ fontSize: "1rem", color: "rgb(174, 174, 174)" }}>Tasks</h3>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="threeDot" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <ThreeDotsVertical className='ThreeDotsVertical' />
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ backgroundColor: "transparent" }}>
                                        <li><button className='dropdown-item ' onClick={() => navigate(`/editcategory/${row._id}`)}><PencilSquare className='PencilSquare' />  Edit</button></li>
                                        <li><button className='dropdown-item ' onClick={() => deletHandler(row._id)}><XLg className='XLg' />  Delete</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }



        </>
    );
};

export default Category;