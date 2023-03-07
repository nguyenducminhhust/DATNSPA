import React, { useContext, useEffect } from "react";
import { Cart2 } from "../../GlobalState";
import { Link } from "react-router-dom";
import Header from "../headers/Header";
import "./history.css";
import axios from "axios";
import Footer from "../../../Home/Footer/Footer";
export default function OrderHistory() {
  const state = useContext(Cart2);
  const [history, setHistory] = state.userAPI.history;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;
  useEffect(() => {
    if (token) {
      const getHistory = async () => {
        if (isAdmin) {
          const res = await axios.get("/api/payment", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
        } else {
          const res = await axios.get("/user/history", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
        }
      };
      getHistory();
    }
  }, [token, isAdmin, setHistory]);

  return (
    <>
      <Header />
      <div className="history-page">
        <h2>LỊCH SỬ MUA DỊCH VỤ</h2>

        <h4>BẠN CÓ {history.length} ĐƠN HÀNG</h4>

        <table>
          <thead>
            <tr>
              <th>Mã Thanh Toán ID</th>
              <th>Ngày Mua</th>
              <th> Xem Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            {history.map((items) => (
              <tr key={items._id}>
               {/* {isAdmin && (
              <select id="statusorder">
                
  <option value="accepted">accepted</option>
  <option value="cancel">cancel</option>
  <option value="delivery">delivery</option>
  <option value="success">success</option>
                </select>
)}   */}
  {/* {!isAdmin && (
             <td>accepted</td>
)} */}
                  
                <td>{items.paymentID}</td>
                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                <td>
                  <Link to={`/history/${items._id}`}>Xem</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br/>
      <br/>
      {!isAdmin && (
        <>
          <Footer />
        </>
      )}
    </>
  );
}
