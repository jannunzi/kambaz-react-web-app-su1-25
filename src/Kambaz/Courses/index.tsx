import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import * as db from "../Database";
import Home from "./Home";
import PeopleTable from "./People/Table";

export default function Courses() {
  const { cid } = useParams();
  const course = db.courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation />
            </td>
            <td valign="top">
              <h2>{course && course.name}</h2>
              {!course && <h2>No Course Found</h2>}
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<h3>Assignments</h3>} />
                <Route
                  path="Assignments/:aid"
                  element={<h3>Assignment Editor</h3>}
                />
                <Route path="People" element={<PeopleTable />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
      <pre>{JSON.stringify(course, null, 2)}</pre>
    </div>
  );
}
