import React from "react";
import "./Style.css";
import schoolsInfo from "../data/schools.json";
import { StudentList } from "../student-list/StudentList";
export const ClassCard = (props) => {
  const getSchoolName = () => {
    const school = schoolsInfo.find(
      (item) => item.id === props.cardDetail[["school-id"]]
    );
    return school?.name || "No School Asigned";
  };
  return (
    <div className="card-container">
      <h4 className="card-header">
        <label>Class ID:</label>
        <span>{props.cardDetail.id}</span>
      </h4>
      <hr />
      <div className="card-content">
        <h4 className="card-header">
          <label>School Name:</label>
          <span>{getSchoolName()}</span>
        </h4>
      </div>
      {props.cardDetail.students.length > 0 && (
        <>
          <label>List of student in school:</label>
          <StudentList students={props.cardDetail.students} />
        </>
      )}
    </div>
  );
};