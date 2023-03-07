import React, { useState, useContext, useEffect } from "react";
import { Cart2 } from "../../GlobalState";
import "./ManageStaff.css"
export default function ReadOnlyStaff({ index,stafflist, handleEditClick,handleDeleteClick }) {
    return(
        // <div>
            <tr>
                <td>{index+1}</td>
                <td>{stafflist.email}</td>
                <td>{stafflist.name}</td>
                <td>{stafflist.phonenumber}</td>
                <td>{stafflist.role}</td>
                <td>{stafflist.kindofstaff}</td>
                <td>{stafflist.service}</td>
                <td>{stafflist.salary}</td>
                <td>
                    <button className="editstaffbut" type="button" onClick={(event)=> handleEditClick(event, stafflist)}
                    > Sửa </button>
                    <button className="deletestaffbut" type="button" onClick={()=> handleDeleteClick(stafflist)}
                    > Xóa</button>
                </td>
            </tr>
        // </div> 
    )
}
