import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Apis/config";
import './carddetails.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/splices/shoppingcard";
const Carddetails = () => {
    const params = useParams()
    const [productdetails, setproductdetails] = useState()
    const [userquantity,setuserquantity]=useState(0)
    const navigate=useNavigate()
    useEffect(() => {
        console.log(params.id)
        axiosInstance.get(`/products/${params.id}`)
            .then((res) => {
                setproductdetails(res.data)
                console.log(res.data)
            })
            .catch((err) => { console.log(err) })
    }, [])
    const dispatch = useDispatch();

    const handleAddToCart = (productprice) => {
        if(userquantity >0)
        {
            dispatch(addToCart({...productdetails,userquantity,productprice:userquantity*productprice}));
            navigate('/shoppingcard')
        }

    };
    const handelincreaseQuantity=()=>{
        setuserquantity(userquantity+1)
    }
    const handeldecreaseQuantity=()=>{
        if(userquantity!=0)
        {
            setuserquantity(userquantity-1)
        }
        else
        {
            setuserquantity(0)
        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img src={productdetails?.thumbnail} className="w-75" />
                    </div>
                    <div className="col">
                        <h3>{productdetails?.title}</h3>
                        <p>{productdetails?.description}</p>
                        <hr />
                        <h4>{productdetails?.price}$</h4>
                        <hr />
                        {productdetails?.stock > 0 ? <p className="badge bg-success">in stock</p> : <p className="badge bg-danger">out stock</p>}
                        <h5>More Information</h5>
                        <span className="me-3 bg-card rounded p-1">Category</span>
                        <span className="bg-card rounded p-1">{productdetails?.category}</span>
                        <br />
                        <div className="bg-card rounded p-1 mt-3" style={{ width: '80px' }}>
                            <span className="mx-2" style={{ cursor: "pointer" }} onClick={handeldecreaseQuantity}>-</span>
                            <span className="mx-2">{userquantity}</span>
                            <span className="mx-2" style={{ cursor: "pointer" }} onClick={handelincreaseQuantity}>+</span>
                        </div>
                        <button type="button" className="btn btn-primary mt-3 w-100" onClick={()=>{handleAddToCart(productdetails?.price)}}>Add to card</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Carddetails;