import { Link } from "react-router-dom";

const Card = (props) => {
    console.log(props)
    return (
        <>

            <div className="col-4" style={{ width: '18rem' }}>
                <Link to={`productsdetails/${props.prd.id}`} className="text-decoration-none">
                    <div className="card mb-2">
                        <div>
                            {props.prd.stock > 0 ? <span className="badge bg-success ms-2 mt-2">in stock</span> : <span className="badge bg-danger ms-2 mt-2">out stock</span>}
                            <img src={props.prd.thumbnail} class="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">{props.prd.title}</h5>
                                <h5 className="card-title ms-5">{props.prd.price}</h5>
                            </div>
                            <p className="card-text">{props.prd.description}</p>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}
export default Card;