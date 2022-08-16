import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import './AddProduct.css';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { setData, setCardsData } from '../../Store/shopcartSlice';

export default function AddProduct(){

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [formdata, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        discountPercentage: "",
        rating: "",
        stock: "",
        brand: "",
        category: "",
        thumbnail: "",
        images: "",
        imagelist: []
    })

    const [error, setError] = useState({
        // title: "",
        // description: "",
        // price: "",
        // discountPercentage: "",
        // rating: "",
        // stock: "",
        // brand: "",
        // category: "",
        // thumbnail: "",
        images: ""
    });


    const handleChange = (e) => {
        let newFormData = {...formdata};
        switch(e.target.name){
        case 'title':
            newFormData['title'] = e.target.value;
            break;
        case 'description':
            newFormData['description'] = e.target.value;
            break;
        case 'price':
            newFormData['price'] = e.target.value;
            break;
        case 'discountPercentage':
            newFormData['discountPercentage'] = e.target.value;
            break;
        case 'rating':
            newFormData['rating'] = e.target.value;
            break;
        case 'stock':
            newFormData['stock'] = e.target.value;
            break;
        case 'brand':
            newFormData['brand'] = e.target.value;
            break;
        case 'category':
            newFormData['category'] = e.target.value;
            break;
        case 'thumbnail':
            newFormData['thumbnail'] = e.target.value;
            break;
        case 'images':
            newFormData['images'] = e.target.value;
            // if (e.key === 'Enter') {
            //     newFormData['images'] = "";
            //     if(newFormData['imagelist'].includes(e.target.value)){
            //         let arr = newFormData['imagelist'].filter((image) => image!==e.target.value);
            //         newFormData['imagelist'] = arr;
            //     }
            //     else{
            //         newFormData['imagelist'].push(e.target.value);
            //     }
            // }

            break;
        default:
            console.log('error');

        }
        setFormData(newFormData);
    }

    const handleImageChange = () => {
        let newFormData = {...formdata};
        let imageurl = newFormData['images'];
        if(imageurl!==""){
            newFormData['images'] = "";
            if(!(newFormData['imagelist'].includes(imageurl))){
                newFormData['imagelist'].push(imageurl);
                // let arr = newFormData['imagelist'].filter((image) => image!==imageurl);
                // newFormData['imagelist'] = arr;
            }
            // else{
            //     newFormData['imagelist'].push(imageurl);
            // }
            setFormData(newFormData);
        }

    }

    const handleImageDelete = (imagetodelete) => {
        let newFormData = {...formdata};
        let arr = newFormData['imagelist'].filter((image) => image!==imagetodelete);
        newFormData['imagelist'] = arr;
        setFormData(newFormData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();



        // console.log('product added');

        let newError = {...error};
        let isFormValid = true;


        if(formdata.imagelist.length===0){
            newError['images'] = "Cannot be empty";
            isFormValid = false;
        }
        // else if(formdata.title.length<3||formdata.title.length>10){
        //     newError['title'] = "Character length should be between 3 and 10";
        //     isFormValid = false;
        // }
        else{
            newError['images'] = "";
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
            fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: formdata.title,
                description: formdata.description,
                price: parseInt(formdata.price),
                discountPercentage: parseFloat(formdata.discountPercentage),
                rating: parseFloat(formdata.rating),
                stock: parseInt(formdata.stock),
                brand: formdata.brand,
                category: formdata.category,
                thumbnail: formdata.thumbnail,
                images: formdata.imagelist
            })
            })
            .then(res => {
                console.log(res.json());
                // res.json();
                // dispatch(setData(null));
                // dispatch(setCardsData(null));
                // navigate('/products')
            })
            .then(console.log('...'));
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

    console.log(formdata);

    return(
        <div>
            <br/>
                <div className="form-container">
                    <div className="formtitle" style={{color: 'white', fontSize: '150%', textAlign: 'center'}}>
                        Add Product
                    </div>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <div className="inputfieldcontainer">
                            <input type="text" placeholder="Enter Title" className="inputfield" name="title" value={formdata['title']} onChange={handleChange} required/>
                            {/* {error.title!=="" && <span className="error">{error.title}</span>} */}
                        </div>
                        <br/>
                        <div className="inputfieldcontainer">
                        <textarea placeholder="Enter Description" className="inputfield" style={{'height': '70px'}} name="description" value={formdata['description']} onChange={handleChange} required/>
                            {/* {error.description!=="" && <span className="error">{error.description}</span>} */}
                        </div>
                        <br/>
                        <div style={{display: 'flex'}}>
                            <div className="inputfieldcontainer">
                                <input type="number" placeholder="Enter Price" className="inputfield" name="price" value={formdata['price']} onChange={handleChange} min="0" step="1" required/>
                                {/* {error.price!=="" && <span className="error">{error.price}</span>} */}
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className="inputfieldcontainer">
                                <input type="number" placeholder="Enter Discount %" className="inputfield" name="discountPercentage" value={formdata['discountPercentage']} onChange={handleChange} min="0" step=".01" required/>
                                {/* {error.discountPercentage!=="" && <span className="error">{error.discountPercentage}</span>} */}
                            </div>
                        </div>
                        <br/>
                        <div style={{display: 'flex'}}>
                            <div className="inputfieldcontainer">
                                <input type="number" placeholder="Enter Rating" className="inputfield" name="rating" value={formdata['rating']} onChange={handleChange} min="0" max="5" step=".01" required/>
                                {/* {error.rating!=="" && <span className="error">{error.rating}</span>} */}
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className="inputfieldcontainer">
                                <input type="number" placeholder="Enter Stock No." className="inputfield" name="stock" value={formdata['stock']} onChange={handleChange} min="0" pattern="[0-9]" required/>
                                {/* {error.stock!=="" && <span className="error">{error.stock}</span>} */}
                            </div>
                        </div>        
                        <br/>
                        <div className="inputfieldcontainer">
                            <input type="text" placeholder="Enter Brand" className="inputfield" name="brand" value={formdata['brand']} onChange={handleChange} required/>
                            {/* {error.brand!=="" && <span className="error">{error.brand}</span>} */}
                        </div>
                        <br/>
                        <div className="inputfieldcontainer">
                            <input type="text" placeholder="Enter Category" className="inputfield" name="category" value={formdata['category']} onChange={handleChange} required/>
                            {/* {error.category!=="" && <span className="error">{error.category}</span>} */}
                        </div>
                        <br/>
                        <div className="inputfieldcontainer">
                            <input type="text" placeholder="Enter Thumbnail URL" className="inputfield" name="thumbnail" value={formdata['thumbnail']} onChange={handleChange} required />
                            {/* {error.thumbnail!=="" && <span className="error">{error.thumbnail}</span>} */}
                        </div>
                        <br/>
                        <div style={{display: 'flex'}}>
                            <div className="inputfieldcontainer">
                                <input type="text" placeholder="Enter Images" className="inputfield" name="images" value={formdata['images']} onChange={handleChange} />
                                {error.images!=="" && <span className="error">{error.images}</span>}

                            </div>
                            &nbsp;&nbsp;
                            <Button variant="contained" onClick={handleImageChange} style={{backgroundColor: 'green'}}>Add</Button>
                        </div>
                        {formdata['imagelist'].map((image, index) => {
                            return(
                                <div key={index} className="imagelist">
                                    {image}
                                    <IconButton onClick={() => handleImageDelete(image)} >
                                        <CancelIcon />
                                    </IconButton>
                                </div>
                            );
                        })}
                        <br/>
                        <div className="btn-container">
                            <button type="submit" className="btn">Add Product</button>
                        </div>
                    </form>
                </div>
        </div>
    );
}