import store from "../Redux/Store/Store";
import {HideLoader, ShowLoader} from "../Redux/State-slice/Settings-Slice";
import axios from "axios";
import {ErrorToast, SuccessToast} from "../Helper/FormHelper";
import {getToken} from "../Helper/SessionHelper";
import {BaseURL} from "../Helper/Config";
import { OnChangeExpenseTypeInput, ResetExpenseTypeFormValue, SetExpenseTypeList, SetExpenseTypeListTotal } from "../Redux/State-slice/ExpenseType-Slice";
const AxiosHeader={headers:{"token":getToken()}}

export async function ExpenseTypeListRequest(pageNo, perPage, searchKeyword) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/ListExpenseType/"+pageNo+"/"+perPage+"/"+searchKeyword;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetExpenseTypeList(result.data['data'][0]['Rows']))
                store.dispatch(SetExpenseTypeListTotal(result.data['data'][0]['Total'][0]['count']))
            } else {
                store.dispatch(SetExpenseTypeList([]))
                store.dispatch(SetExpenseTypeListTotal(0))
                ErrorToast("No Data Found")
            }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}

export async function CreateExpenseTypeRequest(PostBody,ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/CreateExpenseType"
        if(ObjectID!==0){
            URL = BaseURL+"/UpdateExpenseType/"+ObjectID;
        }
        const result = await axios.post(URL,PostBody,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            SuccessToast("Request Successful");
            store.dispatch(ResetExpenseTypeFormValue())
            return  true;
        }
        else if(result.status === 200 && result.data['status'] === "fail") {
            if(result.data['data']['keyPattern']['Name']===1){
                ErrorToast("Expense Type Name Already Exist")
                return false;
            }
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}

export async function FillExpenseTypeFormRequest(ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/ExpenseTypeDetailsByID/"+ObjectID;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            let FormValue=result.data['data'][0];
            store.dispatch(OnChangeExpenseTypeInput({Name:"ExpenseTypeName",Value:FormValue['ExpenseTypeName']}));
            return  true;
        } else {
            debugger;
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        debugger;
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}






export async function DeleteExpenseTypeRequest(ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/DeleteExpenseType/"+ObjectID;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "associate") {
            ErrorToast(result.data['data'])
            return  false;
        }
        if (result.status === 200 && result.data['status'] === "success") {
            SuccessToast("Request Successful");
            return  true
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}