import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    console.log(newCoffee);

    //send data to the server
    fetch("https://coffee-store-server-one-lilac.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-[#F4F3F0] p-8 shadow-md rounded-md max-w-4xl w-full">
          <Link to="/">Back to home</Link>
          <h1 className="text-3xl font-bold text-center mb-4">
            Add New Coffee
          </h1>
          <p className="text-gray-600 text-center mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form
            onSubmit={handleAddCoffee}
            className="grid md:grid-cols-2 grid-cols-1 gap-4"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Details
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
              />
            </div>
            <div className="col-span-2 mt-4">
              <button
                type="submit"
                className="btn w-full bg-yellow-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-700"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
