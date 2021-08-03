import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
const Structure = () => {
    const [data, setData] = useState([]);
    const [item, setItem] = useState([]);



    useEffect(() => {

        const data = async () => {

            const url = 'https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json'
            const response = await fetch(url);

            const res = await response.json();
            setData(res);

            console.log(res);

        }
        data();

    }, [])


    const addtocart = (pro) => {
        console.log(pro);
        setItem([...item, pro]);

    }

    const remaining = (data1) => {
        setItem(
            item.filter((data) => data !== data1)
        )
    }

const Checkoutitem=()=>{

}

    return (
        <div className="main">
            <div>
                <h3>brands</h3>
                <ul>

                    {data.map((brands, ind) => {
                        return (<li key={ind}>{brands.brand}</li>)

                    }
                    )}
                </ul>
            </div>

            <div className="cards">
<h3>Product Name</h3>
                {data.map((a, id) => {


                    return (

                        <div key={id}>
                            <div className="card">

                                <img src={a.icon} />
                                <p>{a.name}</p>
                                <h6>Price:₹{a.price}</h6>
                                <h6>Weigth{a.weight}</h6>
                                <h4>{a.brand}</h4>
                                <button onClick={() => addtocart(a)}>Add to cart</button>
                            </div>
                        </div>


                    )
                })}


            </div>
            <div>
                <ul>
                    cart Items:{item.length}
                    {
                        item.map((cartitem, indexitem) => {
                            return (
                                <div key={indexitem}>

                                    <img src={cartitem.icon} />
                                    <p>{cartitem.name}</p>
                                    <h6>Price:₹{cartitem.price}</h6>
                                    <h6>Weigth{cartitem.weight}</h6>
                                    <h4>
                                        {cartitem.brand}
                                    </h4>
                                    <button onClick={() => remaining(cartitem)}>remove</button>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
  <div className="Customerdetails">
            <h6>Total No. of Items: {item.length}</h6>
            <h6>Grand Total  {item.map((ab)=>{
                let aa=0;
                aa+=ab.price;
                return aa;
            })}</h6>
           
            <input type="text" placeholder="Enter Your Name"/><br/>

            <input type="email" placeholder="Enter Your Email Id"/><br/>

            <input type="number" placeholder="Enter Your Phone Number"/>
 <button>Checkout </button>
        </div>

        </div>
    )
}
export default Structure;