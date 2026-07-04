import { useState } from 'react'
function Product(props) {

    const [price, setTotal] = useState(Number(props.price))
    const [qta, setQta] = useState(Number(props.qta))
    function counterMinus() {
        setQta(qta - 1)
        calcTotalPrice(qta - 1);
    }
    function counterPlus() {
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
                    <button type="button" className="btn btn-primary" onClick={counterMinus}>-</button>
                    <button type="button" className="btn btn-primary">{qta}</button>
                    <button type="button" className="btn btn-primary" onClick={counterPlus}>+</button>
                </div>
                <p>Il totale è {price}</p>
            </div>
        </div>
    )
}

export default Product;