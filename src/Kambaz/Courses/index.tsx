import { Navigate, Route, Routes } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";

export default function Courses() {
  return (
    <div id="wd-courses">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation />
            </td>
            <td valign="top">
              <h2>Course 1234</h2>
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<h3>Home</h3>} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<h3>Assignments</h3>} />
                <Route
                  path="Assignments/:aid"
                  element={<h3>Assignment Editor</h3>}
                />
                <Route path="People" element={<h3>People</h3>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
