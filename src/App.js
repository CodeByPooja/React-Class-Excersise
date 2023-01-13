import { useState } from "react";
import "./App.css";
import { ClassList } from "./class-list/ClassList";
import { CreateClass } from "./create-class/CreateClass";
import Data from "./data/class-list.json";
// const fs = require('fs');
function App() {
  const [classData, setClassData] = useState(Data);

  const onCreateNewClass = () => {
    console.log("onCreateNewClass called!!");

    const classInfo = {
      id: classData.length + 1,
      "school-id": classData.length + 1,
      students: [],
      status: "ACTIVE",
    };
    setClassData([classInfo, ...classData]);
  };
  return (
    <div className="App">
      <CreateClass createNew={() => onCreateNewClass()} />
      <ClassList list={classData} />
    </div>
  );
}

export default App;
