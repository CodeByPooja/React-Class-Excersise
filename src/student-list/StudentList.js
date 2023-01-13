import React from "react";
import "./Style.css";
import studentsInfo from "../data/students.json";

export const StudentList = (props) => {
const getStudentInfo = (student) => {
    return studentsInfo.find(
      (item) => item.id === student["student-id"]
    );
  };
  return (
    <ul className="student-list">
      {props.students.map((item, i) => (
        <li key={item["student-id"]}>
          {i === 0 && (
            <div className="student-header">
              <div className="col-width">Student Id</div>
              <div className="col-width">First Name</div>
              <div className="col-width">Last Name</div>
              <div className="col-width">Date Of Joining</div>
            </div>
          )}
          <div className="student-content">
            <div className="col-width student-first-col">{item["student-id"]}</div>
            <div className="col-width">{getStudentInfo(item).firstname}</div>
            <div className="col-width">{getStudentInfo(item).lastname}</div>
            <div className="col-width">{getStudentInfo(item).dateOfJoining}</div>
        
          </div>
        </li>
      ))}
    </ul>
  );
};
