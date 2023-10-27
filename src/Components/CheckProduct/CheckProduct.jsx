

const CheckProduct = ({service}) => {
    const {date , email , img , phone , message, title  } = service
    return (
        <div className="flex justify-between">
              <div className="space-y-5">
                <img src={img} alt="" />
                <p className="text-3xl">{title}</p>

              </div>
              <div className="space-y-3">
                <p>{date}</p>
                <p>{phone}</p>
                <p>{email}</p>
                <p>{message}</p>

              </div>
        </div>
    );
};

export default CheckProduct;