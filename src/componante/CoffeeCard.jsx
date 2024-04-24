import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const { _id, name, Quantity, Supplier, Taste, Category, Details, PhotoURL } = coffee;
    // console.log(PhotoURL)
    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });

                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })

                
            }
        });

    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <div className="w-2/5">
                    <figure><img src={PhotoURL} alt="Movie" /></figure>
                </div>
                <div className="flex justify-between w-4/5">
                    <div>
                        <h2 className="card-title">Name :{name}</h2>
                        <p>{Quantity}</p>
                        <p>{Supplier}</p>
                        <p>{Taste}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <div className="join join-vertical flex gap-3">
                            <button className="btn btn-primary">viwe</button>
                           <Link to={`updateCoffee/${_id}`}>
                           <button className="btn join-item bin-active">Edit</button>
                           </Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item bg-orange-300">X</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;