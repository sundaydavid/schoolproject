import React from "react";
import Header from "../components/Header";
import { FooterWithSitemap } from "../components/FooterWithSitemap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseHelper";

const Payment = () => {
  const paymentCollectionRef = collection(db, "payment");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productname = e.target[0].value;
    const price = e.target[1].value;
    const qty = e.target[2].value;
    const staff = e.target[3].value;
    const customer = e.target[4].value;
    const totalPrice = e.target[5].value;

    await addDoc(paymentCollectionRef, {
      name: productname,
      price: price,
      qty: qty,
      staff: staff,
      customer: customer,
      totalPrice: totalPrice,
    })
      .then(() => {
        alert("successful");
        e.target.reset();
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div className="bg-blue-gray-100">
      <Header />
      <div className="my-6">
        <div className="flex justify-center items-center">
          <form
            className="flex flex-col w-2/5 gap-4 shadow-sm bg-white p-7"
            onSubmit={handleSubmit}
          >
            <h2 className="text-center text-gray-700">
              What are you paying for?
            </h2>
            <input
              type="text"
              placeholder="Name of item"
              className="py-3 px-4 border-none rounded-sm outline-blue-gray-300"
            />
            <input
              type="number"
              placeholder="Price of item"
              className="py-3 px-4 border-none rounded-sm outline-blue-gray-300"
            />
            <input
              type="number"
              placeholder="Quantity of item"
              className="py-3 px-4 border-none rounded-sm outline-blue-gray-300"
            />
            <input
              type="text"
              placeholder="Staff incharge"
              className="py-3 px-4 border-none rounded-sm outline-blue-gray-300"
            />
            <input
              type="text"
              placeholder="Customer name"
              className="py-3 px-4 border-none rounded-sm outline-blue-gray-300"
            />
            <input
              type="number"
              placeholder="Total Price"
              className="py-3 px-4 border-none rounded-sm outline-blue-gray-300"
            />
            <button className="p-3 bg-blue-800 text-white font-semibold rounded-lg mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
      <FooterWithSitemap />
    </div>
  );
};

export default Payment;
