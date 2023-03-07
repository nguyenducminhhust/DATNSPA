import React, { useContext, useState, useEffect } from "react";
import { Cart2 } from "../GlobalState";
import Header from "../components/headers/Header";
//import ProductItem from "../utils/dpuItem/ProductItem";
//import Loading from "../utils/loading/Loading";
//import "./dpus.css";
import axios from "axios";
//import Filter from "./Filters";
//import LoadMore from "./LoadMore";
//import Footer from "../../../Home/Footer/Footer";
//import img from "../../../../assets/images/spa3.jpg";
//import HeaderNode from "../HeaderNode/HeaderNode";
//import Slider from "./Slider/Slider";
//DataProcessUser-DPU
//dataprocesscustomer-dpu

export default function DisplayDataProcessUser() {
  const state = useContext(Cart2);
  
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;
  const [callback, setCallback] = state.dataprocesscustomerAPI.callback;
  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [timecheck, setTimeCheck] = useState({timecheck1: "",});
  const [dpulistcheck, setDpuListCheck] = useState([]);
  const [dpus, setDPUs] = state.dataprocesscustomerAPI.dataprocesscustomer;
//   const handleCheck = (id) => {
//     dpus.forEach((dpu) => {
//       if (dpu._id === id) dpu.checked = !dpu.checked;
//     });
//     setDPUs([...dpus]);
//   };
useEffect(() => {
    
    const res = dpus.filter((dpulist) =>
    dpulist.daymake === timecheck.timecheck1
    )
    setDpuListCheck(res)
  }, [isCheck])
const handleChangeInputDate = (e) => {
    const { name, value } = e.target;
    
    //let value = value.toString();
    setTimeCheck({ [name]: value.toString() });
    //console.log(booking);
    //console.log(staffcheck);
    setIsCheck(!isCheck);
  };
  console.log( timecheck.timecheck1)
  //console.log(dpus)

//   const checkAll = () => {
//     dpus.forEach((dpu) => {
//       dpu.checked = !isCheck;
//     });
//     setDPUs([...dpus]);
//     setIsCheck(!isCheck);
//   };

//   const deleteAll = () => {
//     dpus.forEach((dpu) => {
//       if (dpu.checked) deleteProduct(dpu._id, dpu.images.public_id);
//     });
//   };

//   if (loading)
//     return (
//       <div>
//         <Loading />
//       </div>
//     );
    return (
        <>
            <Header />      
            <div className="col-12 mb-5">
                <h1 className="display-6 fw-bolder text-center"> Service </h1>
                <hr />
            </div>
            {/* {isAdmin && (
                <div className="delete-all">
                    <span>Select all</span>
                    <input type="checkbox" checked={isCheck} onChange={checkAll} />
                    <button onClick={deleteAll}>Delete ALL</button>
                </div>
            )} */}
            <input
            type="date"
            name="timecheck1"
            required
            onChange={handleChangeInputDate}
          />
            <div className="dpus">
                {dpulistcheck.map((dpu) => {
                    return (
                        <div className="dpu_card" key={dpu._id}>
                            <img src={dpu.images.url} alt="" />

                            <div className="dpu_box">

                                <p>{dpu.staff}</p>
                                <p>{dpu.daymake}</p>
                                <p>{dpu.service}</p>
                                <p>Session:</p>
                                <p>{dpu.session}</p>
                            </div>


                        </div>
                    );
                })}
            </div>
         
        </>
    );
}
