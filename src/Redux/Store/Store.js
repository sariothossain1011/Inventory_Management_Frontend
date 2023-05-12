import {configureStore} from "@reduxjs/toolkit";
import settingsResucer from "../State-slice/Settings-Slice";
import profileReducer from "../State-slice/Profile-Slice";
import dashboardReducer from "../State-slice/Dashboard-Slice";
import brandReducer from "../State-slice/Brand-Slice";
import supplierReducer from "../State-slice/Supplier-Slice";
import categoryReducer from "../State-slice/Category-Slice";
import customerReducer from "../State-slice/Customer-Slice";
import expenseReducer from "../State-slice/Expense-Slice";
import expensetypeReducer from "../State-slice/ExpenseType-Slice";
import productReducer from "../State-slice/Product-Slice";
import purchaseReducer from "../State-slice/Purchase-Slice";
import reportReducer from "../State-slice/Report-Slice";
import returnReducer from "../State-slice/Return-Slice"
import saleReducer from "../State-slice/Sales-Slice"
export default configureStore ({
    reducer:{
        settings:settingsResucer,
        profile:profileReducer,
        dashboard:dashboardReducer,
        brand:brandReducer,
        supplier:supplierReducer,
        category:categoryReducer,
        customer:customerReducer,
        expense:expenseReducer,
        expensetype:expensetypeReducer,
        purchase:purchaseReducer,
        report:reportReducer,
        product:productReducer,
        return:returnReducer,
        sale:saleReducer,
    }
})