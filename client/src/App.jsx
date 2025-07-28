import Login from './authComponents/login.jsx';
import Register from './authComponents/register.jsx';
import Home from './components/home.jsx';
import OtpModal from './authComponents/otpModal.jsx';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// admin sidebar components 
import Products from './authComponents/products.jsx';
import Customers from './authComponents/customers.jsx';
import Setting from './authComponents/setting.jsx';
import AdminDasboard from './authComponents/adminDashboard.jsx';
import Order from './authComponents/order.jsx';
import Sidebar from './authComponents/sidebar.jsx';
import ManageProducts from './authComponents/manageProducts.jsx';
import AddProducts from './authComponents/addProduct.jsx';
import CategoryManagement from './authComponents/categoryManagement.jsx';
import AddCategory from './authComponents/addCategory.jsx';
import UpdateCategory from './authComponents/updateCategory.jsx';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/otp" element={<OtpModal/>} />
      <Route path='/adminProducts' element={<Products/>}/>
      <Route path='/adminCustomers' element= {<Customers/>}/>
      <Route path='/adminSetting' element = {<Setting />}/>
      <Route path='/adminDashboard' element = {<AdminDasboard />}/>
      <Route path='/adminOrder' element = {<Order />}/>
      <Route path='/adminSidebar' element = {<Sidebar/>}/>
      <Route path='/adminManageProducts' element = {<ManageProducts/>}/>
      <Route path='/addProduct' element = {<AddProducts/>}/>
      <Route path='/catManagement' element = {<CategoryManagement/>}/>
      <Route path='/addCategory' element = {<AddCategory/>}/>
      <Route path='/updateCategory' element = {<UpdateCategory/>}/>


    </Routes>
    <ToastContainer position="top-right" autoClose={4000} limit={1} />
    </>

  );
}

export default App;

