import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const Quantity = form.Quantity.value;
        const Supplier = form.Supplier.value;
        const Taste = form.Taste.value;
        const Category = form.Category.value;
        const Details = form.Details.value;
        const PhotoURL = form.PhotoURL.value;
        const UpdateCoffee = { name, Quantity, Supplier, Taste, Category, Details, PhotoURL }
        console.log(UpdateCoffee)

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateCoffee)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'coffee updated Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    const coffee = useLoaderData();
    const { _id, name, Quantity, Supplier, Taste, Category, Details, PhotoURL } = coffee;

    return (
        <div className='bg-orange-50 w-1/2 p-10 mx-auto'>
            <h2 className="font-bold text-4xl">update a coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee} >
                <div>
                    <div className='grid grid-cols-2 gap-6'>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Coffee name</span>

                            </div>
                            <input type="text" name='name' defaultValue={name} placeholder="Coffee name" className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Quantity</span>

                            </div>
                            <input type="text" name='Quantity' defaultValue={Quantity} placeholder="Quantity" className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Supplier</span>

                            </div>
                            <input type="text" name='Supplier' defaultValue={Supplier} placeholder="Supplier" className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Taste</span>

                            </div>
                            <input type="text"
                                name='Taste' defaultValue={Taste} placeholder="Taste" className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Category</span>

                            </div>
                            <input type="text"
                                name='Category' defaultValue={Category} placeholder="Category" className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Details</span>

                            </div>
                            <input type="text"
                                name='Details' placeholder="Details" defaultValue={Details} className="input input-bordered w-full max-w-xs" />

                        </label>


                    </div>
                    <div >
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Photo url</span>

                            </div>
                            <input type="text"
                                name='PhotoURL' defaultValue={PhotoURL} placeholder="Photo url" className="input input-bordered w-full " />

                        </label>
                        <label className="form-control w-full ">
                            <div className="label">


                            </div>
                            <input type="submit" value="Update coffee" className="input input-bordered w-full bg-gray-400 " />

                        </label>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default UpdateCoffee;