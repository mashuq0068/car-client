import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {title , img, price , _id} = service

    return (
        <div>
            <div className="card w-96 bg-base-100 drop-shadow-xl shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  text-left">
    <h2 className="card-title text-left">{price}</h2>
    <p className="text-left">{title}</p>
    <div className="card-actions text-left">
    <Link to={`/checkout/${_id}`}>  <button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;