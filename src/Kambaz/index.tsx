import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";

export default function Kambaz() {
  return (
    <div>
      <h1>Kambaz</h1>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <KambazNavigation />
            </td>
            <td>
              <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Courses/:cid/*" element={<Courses />} />
                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                <Route path="/Inbox" element={<h1>Inbox</h1>} />
                <Route path="/Help" element={<h1>Help</h1>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
