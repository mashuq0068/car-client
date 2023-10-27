

const AddService = () => {
    return (
        <div>
             <div className="w-[100%] mx-auto">
            <div className="hero  w-[50%] mx-auto min-h-screen bg-base-200">
  <div className="hero-content w-full flex-col lg:flex-row-reverse">
   
    <div className="card 
     flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form className="card-body w-full">
        <div className="flex gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" placeholder="Service Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Price</span>
          </label>
          <input type="text" placeholder="Service Price" className="input input-bordered" required />
       
        </div>
        </div>
       <div className="flex gap-5">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Service Type</span>
          </label>
          <input type="text" placeholder="Service Type" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Text here</span>
          </label>
          <input type="text" placeholder="Text here" className="input input-bordered" required />
          
        </div>
       </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service description</span>
          </label>
          
          <textarea className="w-full border input h-[25vh] input-bordered  border-gray-300 py-2 px-4" placeholder="Service Description" name="" id="" cols="35"  required rows="10"></textarea>
        
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

export default AddService;