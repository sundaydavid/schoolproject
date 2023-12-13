import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { FooterWithSitemap } from "../components/FooterWithSitemap";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebaseHelper";
import {
  Button,
  Card,
  CardBody,
  Dialog,
  Typography,
} from "@material-tailwind/react";
import ReactToPrint from "react-to-print";

const Settlement = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [staff, setStaff] = useState("");
  const [customer, setCustomer] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const paymentCollectionRef = collection(db, "payment");

  const getPaymentRecords = async () => {
    const data = await getDocs(paymentCollectionRef);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPaymentRecords();
  }, data);

  const deleteData = async (id) => {
    const floodData = doc(db, "payment", id);
    await deleteDoc(floodData);
    getPaymentRecords();
  };

  const getPaymentDetail = async (id) => {
    const docRef = doc(db, "payment", id);
    const flood = await getDoc(docRef);
    if (!flood.exists) {
      console.log("No such document!");
    } else {
      setName(flood.data().name);
      setPrice(flood.data().price);
      setQty(flood.data().qty);
      setStaff(flood.data().staff);
      setCustomer(flood.data().customer);
      setTotalPrice(flood.data().totalPrice);
    }
  };

  const ref = useRef();

  return (
    <div className="bg-blue-gray-100">
      <Header />
      <div className="flex justify-center items-cente p-6">
        <table className="w-full border-collapse border-2 border-white">
          <tr>
            <th className="border-2 border-white p-4">Name of item</th>
            <th className="border-2 border-white p-4">Price of item</th>
            <th className="border-2 border-white p-4">Quantity of item</th>
            <th className="border-2 border-white p-4">Staff incharge</th>
            <th className="border-2 border-white p-4">Customer name</th>
            <th className="border-2 border-white p-4">Total Price</th>
            <th className="border-2 border-white p-4">Action</th>
          </tr>
          {data ? (
            data.map((item) => {
              return (
                <tr>
                  <td className="border-2 border-white p-2 text-center">
                    {item.name}
                  </td>
                  <td className="border-2 border-white p-2 text-center">
                    {item.price}
                  </td>
                  <td className="border-2 border-white p-2 text-center">
                    {item.qty}
                  </td>
                  <td className="border-2 border-white p-2 text-center">
                    {item.staff}
                  </td>
                  <td className="border-2 border-white p-2 text-center">
                    {item.customer}
                  </td>
                  <td className="border-2 border-white p-2 text-center">
                    {item.totalPrice}
                  </td>
                  <td className="border-2 border-white p-2 text-center cursor-pointer">
                    <div className="flex justify-between items-center px-5">
                      <span
                        onClick={() => {
                          handleOpen();
                          getPaymentDetail(item.id);
                        }}
                      >
                        👁️
                      </span>
                      <span
                        onClick={() => {
                          deleteData(item.id);
                        }}
                      >
                        🗑️
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <div>
              <span>loading...</span>
            </div>
          )}
        </table>
      </div>
      <FooterWithSitemap />

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <div className="flex flex-col gap-4" ref={ref}>
              <Typography variant="h4" color="blue-gray">
                Receipt
              </Typography>
              <div className="flex flex-wrap gap-5">
                <Typography variant="small">
                  Product Name: {name} ||{" "}
                </Typography>
                <Typography>Sale Price: {price} || </Typography>
                <Typography>Quantity: {qty} || </Typography>
                <Typography>Staff: {staff} || </Typography>
                <Typography>Customer: {customer} || </Typography>
                <Typography>Total Price: {totalPrice} </Typography>
              </div>
            </div>

            <ReactToPrint
              bodyClass="print-agreement"
              content={() => ref.current}
              trigger={() => <Button type="primary">Print</Button>}
            />
          </CardBody>
        </Card>
      </Dialog>
    </div>
  );
};

export default Settlement;
