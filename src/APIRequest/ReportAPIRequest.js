import store from "../Redux/Store/Store";
import {HideLoader, ShowLoader} from "../Redux/State-slice/Settings-Slice";
import axios from "axios";
import {ErrorToast} from "../Helper/FormHelper";
import {getToken} from "../Helper/SessionHelper";

import {BaseURL} from "../Helper/Config";
import { SetExpensesByDateList, SetPurchaseByDateList, SetReturnByDateList, SetSalesByDateList } from "../Redux/State-slice/Report-Slice";
const AxiosHeader={headers:{"token":getToken()}}




export async function ExpensesByDateRequest(FormData,ToDate) {
    try {
        store.dispatch(ShowLoader())
        let PostBody={"FormDate":FormData+"T00:00:00.000+00:00","ToDate":ToDate+"T00:00:00.000+00:00"}
        let URL = BaseURL+"/ExpensesByDate";
        const result = await axios.post(URL,PostBody,AxiosHeader);
        store.dispatch(HideLoader());
        if (result.status === 200 && result.data['status']==="success") {
            store.dispatch(SetExpensesByDateList(result.data['data']))

        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}


export async function SalesByDateRequest(FormData,ToDate) {
    try {
        store.dispatch(ShowLoader())
        let PostBody={"FormDate":FormData+"T00:00:00.000+00:00","ToDate":ToDate+"T00:00:00.000+00:00"}
        let URL = BaseURL+"/SalesByDate";
        const result = await axios.post(URL,PostBody,AxiosHeader);
        store.dispatch(HideLoader());
        if (result.status === 200 && result.data['status']==="success") {
            store.dispatch(SetSalesByDateList(result.data['data']))

        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}

export async function PurchaseByDateRequest(FormData,ToDate) {
    try {
        store.dispatch(ShowLoader())
        let PostBody={"FormDate":FormData+"T00:00:00.000+00:00","ToDate":ToDate+"T00:00:00.000+00:00"}
        let URL = BaseURL+"/PurchaseByDate";
        const result = await axios.post(URL,PostBody,AxiosHeader);
        store.dispatch(HideLoader());
        if (result.status === 200 && result.data['status']==="success") {
            store.dispatch(SetPurchaseByDateList(result.data['data']))
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}

export async function ReturnByDateRequest(FormData,ToDate) {
    try {
        store.dispatch(ShowLoader())
        let PostBody={"FormDate":FormData+"T00:00:00.000+00:00","ToDate":ToDate+"T00:00:00.000+00:00"}
        let URL = BaseURL+"/ReturnByDate";
        const result = await axios.post(URL,PostBody,AxiosHeader);
        store.dispatch(HideLoader());
        if (result.status === 200 && result.data['status']==="success") {
            store.dispatch(SetReturnByDateList(result.data['data']))
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}