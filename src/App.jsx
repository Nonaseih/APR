/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 13/11/2025 - 11:08:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * App.jsx — Router wrapper
 */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* placeholder pages – add real ones later */}
      <Route path="/international-routes" element={<div>International Routes Page</div>} />
      <Route path="/domestic-routes" element={<div>Domestic Routes Page</div>} />
      <Route path="/regional-routes" element={<div>Regional Routes Page</div>} />
      <Route path="/regional-connections" element={<div>Regional Connections Page</div>} />
    </Routes>
  );
}
