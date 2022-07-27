import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Addcategory from './component/Addcategory';
import Addschedule from './component/Addschedule';
import Category from './component/Category';
import Editcategory from './component/Editcategory';
import Edittask from './component/Edittask';
import Schedule from './component/Schedule';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/app" element={<App />} />
                <Route exact path="/category" element={<Category />} />
                <Route exact path="/schedule" element={<Schedule />} />
                <Route exact path='/addcategory' element={<Addcategory/>}/>
                <Route exact path="/editcategory/:userID" element={<Editcategory/>}/>
                <Route exact path="/edittask/:userID" element={<Edittask/>}/>
                <Route exact path='/addschedule' element={<Addschedule/>}/>

            </Routes>
        </>
    );
};

export default Routing;