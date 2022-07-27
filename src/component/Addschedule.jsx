import React, { useState,useEffect } from 'react';
import { PlusSquare } from 'react-bootstrap-icons';
import axios from 'axios';

const Addschedule = () => {

    const [taskName, settaskName] = useState();
    const [cateName, setcateName] = useState();
    const [date, setdate] = useState();
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

    const submitHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            taskName,cateName, date
        }
        console.log(dataObj);
        axios.post("http://localhost:4000/task", dataObj);
        window.location.reload();

    }

    return (
        <>
            <button type="submit" className='PlusSquare' data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ marginTop: "0px" }} ><PlusSquare className='Squre' />
            </button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Add Task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={submitHandler}>
                            <div class="modal-body">
                                <div className='row g-3'>
                                    <div className='col' style={{display:"grid",justifyContent:"center"}}>
                                        <input type="text" className='form-control' placeholder='Enter Task Name' onChange={e => settaskName(e.target.value)} value={taskName} /><br />
                                        <input type="datetime-local" className='form-control' style={{ }} placeholder='Enter Catogory Name' onChange={e => setdate(e.target.value)} value={date} /><br/>
                                        <select className='form-select form-select-mb' aria-label='.form-select-sm example' style={{}} onChange={(e)=>setcateName(e.target.value)} value={cateName}>
                                        <option>Select Category</option>
                                            {
                                                userData.map(row=>{return(<option>{row.categoryName}</option>)})
                                            }
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer" style={{justifyContent:"center"}}>
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

export default Addschedule;