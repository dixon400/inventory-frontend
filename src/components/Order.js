import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./Wrapper"

export const Order = () =>{
    const [ product_id, setName ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ quantity, setQuantity ] = useState("");
    const navigate = useNavigate()
    const submit = async e => {
        e.preventDefault();

        await fetch('http://localhost:8000/orders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                product_id: product_id,
                price: price,
                fee: 0.2 * price,
                total: 1.2 * price,
                quantity: quantity,
            })
        })

        await navigate(-1);
    };

    return(
       <Wrapper>
            <form onSubmit={submit} className="mt-3">
            <div className="form-floating pb-3">
                <input className="form-control" placeholder="Name" type="text"
                    onChange={e=> setName(e.target.value)}
                />
                <label htmlFor="Name">Name</label>
            </div>

            <div className="form-floating pb-3">
                <input className="form-control" placeholder="Price" type="text"
                onChange={e=> setPrice(e.target.value)}
                />
                <label htmlFor="price">price</label>
            </div>

            <div className="form-floating pb-3">
                <input className="form-control" placeholder="quantity" type="text" 
                onChange={e=> setQuantity(e.target.value)}
                />
                <label htmlFor="quantity">Quantity</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Submit
            </button>
        </form>
       </Wrapper>
    );
}