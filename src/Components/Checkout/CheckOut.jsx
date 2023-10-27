
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const data = useLoaderData()
   const {img , description , title} = data
   const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const firstName = form.fName.value 
    const lastName = form.lName.value
    const email = form.email.value
    const date = form.date.value
    const phone = form.phone.value 
    const message = form.message.value 
    const CheckOutDetails = {firstName , lastName , email , phone , message , date , img , title}
    console.log(CheckOutDetails)
    fetch('http://localhost:5000/checkOutServices',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(CheckOutDetails)
    })
    .then(res => res.json())
    .then(data => console.log(data))

   }
    return (
        <div>
            <div className="space-y-7">
              <img src={img} alt="" />
              <p>{description}</p>
            </div>
            <div className="w-[100%] mx-auto">
            <div className="hero  w-[50%] mx-auto min-h-screen bg-base-200">
  <div className="hero-content w-full flex-col lg:flex-row-reverse">
   
    <div className="card 
     flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body w-full">
        <div className="flex gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="First Name" name="fName" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="Last Name" name="lName" className="input input-bordered" required />
       
        </div>
        </div>
       <div className="flex gap-5">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Your Phone</span>
          </label>
          <input type="text" placeholder="Your Phone" name="phone" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="Your Email" name="date" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
         
        </div>
       </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          
          <textarea className="w-full border input h-[25vh]  input-bordered  border-gray-300 py-2 px-4" placeholder="Your Message" name="message" id="" cols="35"  required rows="10"></textarea>
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-orange-700 border-none hover:bg-orange-700">Checkout</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default CheckOut;