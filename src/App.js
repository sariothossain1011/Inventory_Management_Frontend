import React,{Fragment} from 'react';
import { Toaster } from 'react-hot-toast';

import {getToken} from "./Helper/SessionHelper";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import FullscreenLoader from "./Components/MasterLayout/FullscreenLoder";
import LoginPage from "./Pages/Users/LoginPage";
import RegistrationPage from "./Pages/Users/RegistrationPage";
import SendOTPPage from "./Pages/Users/SendOTPPage";
import VerifyOTPPage from "./Pages/Users/VerifyOTPPage";
import CreatePasswordPage from "./Pages/Users/CreatePasswordPage";
import ProfilePage from "./Pages/Users/ProfilePage";
import BrandCreateUpdatePage from "./Pages/Brand/BrandCreateUpdatePage";
import BrandListPage from "./Pages/Brand/BrandListPage";
import CategoryCreateUpdatePage from "./Pages/Category/CategoryCreateUpdatePage";
import CategoryListPage from "./Pages/Category/CategoryListPage";
import CustomerCreateUpdatePage from "./Pages/Customer/CustomerCreateUpdatePage";
import CustomerListPage from "./Pages/Customer/CustomerListPage";
import ExpenseTypeCreateUpdatePage from "./Pages/ExpenseType/ExpenseTypeCreateUpdatePage";
import ExpenseListPage from "./Pages/Expense/ExpenseListPage";
import ExpenseCreateUpdatePage from "./Pages/Expense/ExpenseCreateUpdatePage";
import ProductCreateUpdatePage from "./Pages/Product/ProductCreateUpdatePage";
import ProductListPage from "./Pages/Product/ProductListPage";
import PurchaseCreateUpdatePage from "./Pages/Purchase/PurchaseCreateUpdatePage";
import PurchaseListPage from "./Pages/Purchase/PurchaseListPage";
import PurchaseReportPage from "./Pages/Report/PurchaseReportPage";
import ReturnReportPage from "./Pages/Report/ReturnReportPage";
import SaleReportPage from "./Pages/Report/SalesReportPage";
import ExpenseReportPage from "./Pages/Report/ExpenseReportPage";
import ReturnCreateUpdatePage from "./Pages/Return/ReturnCreateUpdatePage";
import ReturnListPage from "./Pages/Return/ReturnListPage";
import SalesCreateUpdatePage from "./Pages/Sales/SalesCreateUpdatePage";
import SalesListPage from "./Pages/Sales/SalesListPage";
import SupplierCreateUpdatePage from "./Pages/Supplier/SupplierCreateUpdatePage";
import SupplierListPage from "./Pages/Supplier/SupplierListPage";
import ExpenseTypeList from "./Components/ExpenseType/ExpenseTypeList";
import ExpenseTypeListPage from "./Pages/ExpenseType/ExpenseTypeListPage";
const App = () => {
    if(getToken()){
        return (
            <Fragment>
                <BrowserRouter>
                <Toaster />
                    <Routes>
                        <Route exact path="/BrandCreateUpdatePage" element={<BrandCreateUpdatePage />}/>
                        <Route exact path="/BrandListPage" element={<BrandListPage />}/>

                        <Route exact path="/CategoryCreateUpdatePage" element={<CategoryCreateUpdatePage />}/>
                        <Route exact path="/CategoryListPage" element={<CategoryListPage />}/>

                        <Route exact path="/CustomerCreateUpdatePage" element={<CustomerCreateUpdatePage />}/>
                        <Route exact path="/CustomerListPage" element={<CustomerListPage />}/>

                        <Route exact path="/ExpenseTypeCreateUpdatePage" element={<ExpenseTypeCreateUpdatePage />}/>
                        <Route exact path="/ExpenseTypeListPage" element={<ExpenseTypeListPage />}/>

                        <Route exact path="/ExpenseCreateUpdatePage" element={<ExpenseCreateUpdatePage />}/>
                        <Route exact path="/ExpenseListPage" element={<ExpenseListPage />}/>

                        <Route exact path="/ProductCreateUpdatePage" element={<ProductCreateUpdatePage />}/>
                        <Route exact path="/ProductListPage" element={<ProductListPage />}/>

                        <Route exact path="/PurchaseCreateUpdatePage" element={<PurchaseCreateUpdatePage />}/>
                        <Route exact path="/PurchaseListPage" element={<PurchaseListPage />}/>

                        <Route exact path="/ReturnCreateUpdatePage" element={<ReturnCreateUpdatePage />}/>
                        <Route exact path="/ReturnListPage" element={<ReturnListPage />}/>

                        <Route exact path="/SalesCreateUpdatePage" element={<SalesCreateUpdatePage />}/>
                        <Route exact path="/SalesListPage" element={<SalesListPage />}/>

                        <Route exact path="/SupplierCreateUpdatePage" element={<SupplierCreateUpdatePage />}/>
                        <Route exact path="/SupplierListPage" element={<SupplierListPage />}/>

                        <Route exact path="/PurchaseReportPage" element={<PurchaseReportPage />}/>
                        <Route exact path="/ReturnReportPage" element={<ReturnReportPage />}/>
                        <Route exact path="/SaleReportPage" element={<SaleReportPage />}/>
                        <Route exact path="/ExpenseReportPage" element={<ExpenseReportPage />}/>

                        <Route exact path="/" element={<DashboardPage />}/>
                        <Route exact path="/Profile" element={<ProfilePage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </BrowserRouter>
                {/* <FullscreenLoader/> */}
            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
                <BrowserRouter>
                    <Toaster />
                    <Routes>
                        <Route path="/" element={<Navigate to="/Login" replace />}/>
                        <Route exact path="/Login" element={<LoginPage />}/>
                        <Route exact path="/Registration" element={<RegistrationPage />}/>
                        <Route exact path="/SendOTP" element={<SendOTPPage/>}/>
                        <Route exact path="/VerifyOTP" element={<VerifyOTPPage/>}/>
                        <Route exact path="/CreatePassword" element={<CreatePasswordPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </BrowserRouter>
                {/* <FullscreenLoader/> */}
            </Fragment>
        );
    }
};
export default App;