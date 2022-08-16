import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout(){

    const navigate = useNavigate();

    const [formdata, setFormData] = useState({
        address: ""
    })

    const [error, setError] = useState({
        address: "",
    });


    const handleChange = (e) => {
        let newFormData = {...formdata};
        switch(e.target.name){
        case 'address':
            newFormData['address'] = e.target.value;
            break;
        default:
            console.log('error');

        }
        setFormData(newFormData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newError = {...error};
        let isFormValid = true;


        if(formdata.address===""){
            newError['address'] = "Cannot be empty";
            isFormValid = false;
        }
        // else if(formdata.title.length<3||formdata.title.length>10){
        //     newError['title'] = "Character length should be between 3 and 10";
        //     isFormValid = false;
        // }
        else{
            newError['address'] = "";
        }

        // if(formdata.imageurl===""){
        //     newError['imageurl'] = "Cannot be empty";
        //     isFormValid = false;
        // }
        // else{
        //     newError['imageurl'] = "";
        // }

        // if(formdata.description===""){
        //     newError['description'] = "Cannot be empty";
        //     isFormValid = false;
        // }
        // else if(formdata.description.length<10||formdata.description.length>100){
        //     newError['description'] = "Character length should be between 10 and 100";
        //     isFormValid = false;
        // }
        // else{
        //     newError['description'] = "";
        // }

        setError(newError);

        if(isFormValid){
            alert('Order Placed');
            // if(id){
            //     let newBlogs = [...blogs];
            //     let itemIndex = newBlogs.findIndex(x => x.id == id);
            //     newBlogs[itemIndex] = {id: id, title: formdata.title, imageurl: formdata.imageurl, description: formdata.description}
            //     setBlogs(newBlogs);
            //     navigate('/');
            // }
            // else{
            //     var dt = new Date().getTime();
            //     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            //         var r = (dt + Math.random()*16)%16 | 0;
            //         dt = Math.floor(dt/16);
            //         return (c==='x' ? r :(r&0x3|0x8)).toString(16);
            //     });
            //     let newBlogs = [...blogs];
            //     newBlogs.push({id: uuid, title: formdata.title, imageurl: formdata.imageurl, description: formdata.description});
            //     setBlogs(newBlogs);
            //     navigate('/');
            // }

        }
    }

    return(
        <div>
            <br/>
            <div className="form-container">
                <div className="formtitle" style={{color: 'white', fontSize: '150%', textAlign: 'center'}}>
                    Checkout
                </div>
                <br/>
                <br/>
                <form onSubmit={handleSubmit}>
                    <div className="inputfieldcontainer">
                        <textarea placeholder="Enter Address" className="inputfield" style={{'height': '70px'}} name="address" value={formdata['address']} onChange={handleChange}/>
                        {error.address!=="" && <span className="error">{error.address}</span>}
                    </div>                
                    <br/>
                    <br/>
                    <div className="btn-container">
                        <button type="submit" className="btn">Place Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
}