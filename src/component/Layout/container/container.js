import React from 'react';
import './container.scss';
import ListItems from '../../listCourse/listItems';
import InputForm from '../../InputForm/InputForm';


function Container({children,...props }){
    return(
        <div className="container">
            <div>{children}</div>
        </div>
    )

}

export default Container;