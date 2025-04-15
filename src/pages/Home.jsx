import { useEffect, useState } from "react";
import Card from "../components/Card/card";
import axios from "axios";
import axiosInstance from "../Apis/config";

const Home = () => {
    const [products,setProducts]=useState()
    useEffect(()=>{
        axiosInstance.get('products')
        .then((res)=>setProducts(res.data.products))
        .catch((err)=>console.log(err))
    },[])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        products?.map((product,index)=>{
                            return <Card key={index} prd={product}/>
                        })
                    }
                </div>

            </div>
        </>
    )
}
export default Home;