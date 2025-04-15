import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart, updateQuantity } from "../Redux/splices/shoppingcard";
const Shoppingcard = () => {
    const items = useSelector(state => state.cart.items)
    const productprice = useSelector(state => state.cart.productprice)
    const totalprice = useSelector(state => state.cart.totalPrice)
    console.log(items)
    const dispatch = useDispatch()
    function handeldelete(id) {
        dispatch(removeFromCart(id))
    }
    function handelupdateincresequantity(id, quantity) {
        dispatch(updateQuantity({ id, quantity }))
    }
    function handelupdatedecresequantity(id, quantity,item) {
        if (item.userquantity > 0) {
            dispatch(updateQuantity({ id, quantity}))
        }
        
    }
    return (
        <>
            <div className="container-fluid">
                <h3>Card</h3>
                <div className="col-12">
                    <table className="table w-100">
                        <thead>
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Remove</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => {
                                return <tr key={item.id} style={{ verticalAlign: 'middle' }}>
                                    <td scope="row" className="d-flex align-items-center">
                                        <img src={item.images[0]} style={{ height: '100px' }} />
                                        <p>{item.title}</p>
                                    </td>
                                    <td>
                                        <div className="bg-card rounded p-1 mt-3" style={{ width: '80px' }}>
                                            <span className="mx-2" onClick={() => handelupdatedecresequantity(item.id, -1, item)} style={{ cursor: "pointer" }}>-</span>
                                            <span className="mx-2">{item.userquantity}</span>
                                            <span className="mx-2" onClick={() => handelupdateincresequantity(item.id, 1)} style={{ cursor: "pointer" }}>+</span>
                                        </div>
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faTrash} size="xl" onClick={() => handeldelete(item.id)} />
                                    </td>
                                    <td >{item.productprice}</td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
                <h3 className="text-end px-2 rounded" style={{marginTop:'30px',backgroundColor:'#EEEEEE',width:'fit-content'}}>total price:{totalprice}</h3>
            </div>
        </>
    )
}
export default Shoppingcard;