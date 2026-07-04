import { useState } from 'react'
function Product(props) {

    const [price, setTotal] = useState(Number(props.price) * Number(props.qta))
    const [qta, setQta] = useState(Number(props.qta))
    function decreaseQta() {
        setQta(qta - 1)
        calcTotalPrice(qta - 1);
    }
    function increaseQta() {
        setQta(qta + 1)
        calcTotalPrice(qta + 1);
    }
    function calcTotalPrice(newQta) {
        const result = props.price * newQta;
        setTotal(result);
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.price}</p>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={decreaseQta}>-</button>
                    <button type="button" className="btn btn-primary">{qta}</button>
                    <button type="button" className="btn btn-primary" onClick={increaseQta}>+</button>
                </div>
                <p>Il totale è {price}</p>
            </div>
        </div>
    )
}

export default Product;