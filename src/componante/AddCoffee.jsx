

import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();
        const form =e.target;
        const name =form.name.value;
        const Quantity =form.Quantity.value;
        const Supplier =form.Supplier.value;
        const Taste =form.Taste.value;
        const Category =form.Category.value;
        const Details =form.Details.value;
        const PhotoURL =form.PhotoURL.value;
        const newCoffee ={name,Quantity,Supplier,Taste,Category,Details,PhotoURL}
        console.log(newCoffee)

        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)


        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'user Added Successfully',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className='bg-orange-50 w-1/2 p-10 mx-auto'>
            <h2>Add a coffee</h2>
            <form onSubmit={handleAddCoffee} >
                <div>
                    <div className='grid grid-cols-2 gap-6'>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Coffee name</span>

                            </div>
                            <input type="text" name='name' placeholder="Coffee name" className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Quantity</span>

                            </div>
                            <input type="text"name='Quantity'  placeholder="Quantity" className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Supplier</span>

                            </div>
                            <input type="text" name='Supplier' placeholder="Supplier" className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Taste</span>

                            </div>
                            <input type="text" 
                            name='Taste' placeholder="Taste" className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Category</span>

                            </div>
                            <input type="text" 
                            name='Category' placeholder="Category" className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Details</span>

                            </div>
                            <input type="text" 
                            name='Details' placeholder="Details" className="input input-bordered w-full max-w-xs" />

                        </label>


                    </div>
                    <div >
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Photo url</span>

                            </div>
                            <input type="text"
                            name='PhotoURL'  placeholder="Photo url" className="input input-bordered w-full " />

                        </label>
                        <label className="form-control w-full ">
                            <div className="label">


                            </div>
                            <input type="submit" value="Add coffee" className="input input-bordered w-full bg-gray-400 " />

                        </label>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddCoffee;