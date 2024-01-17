import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const image_token_api_key = '3cde4e55b35ec3ed8080086cc4be7349'
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token_api_key}`
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(imgRes => {
                const imgUrl = imgRes.data.display_url;
                const { name, price, category, recipe } = data;
                const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl }
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                    .then(data => {
                        console.log('after posting new menu item', data.data);
                        if (data.data.insertedId) {
                            reset()
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Item Added Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
    }
    // console.log(errors);
    return (
        <div className="">
            <Helmet>
                <title>Add Item</title>
            </Helmet>
            <SectionTitle
                subHeading={"what's are new?"}
                heading={'ADD AN ITEM'}
            ></SectionTitle>
            <div className="w-[680px] mx-auto bg-white px-6 py-3 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name" className="input input-bordered"
                            {...register("name", { required: true, maxLength: 30 })}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register("category", { required: true })} className="select select-bordered">
                                <option disabled selected>pick one</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>salad</option>
                                <option>drinks</option>
                                <option>dessert</option>
                            </select>

                        </label>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true, maxLength: 30 })} type="number" placeholder="Price" className="input input-bordered" required />

                        </div>
                    </div>
                    <label className="form-control mb-2">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea {...register("recipe", { required: true, maxLength: 300 })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </label>
                    <input {...register("image", { required: true, maxLength: 300 })} type="file" className="file-input rounded-none w-full  border-0 mt-2" />
                    <div className="w-48 mx-auto mt-5">
                        <input className="btn btn-block border-0 bg-[#D49E4C] hover:bg-[#EFAB43] text-white font-bold " type="submit" value='Add Item' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;