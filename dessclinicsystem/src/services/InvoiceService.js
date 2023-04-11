import axios from "axios"
import http from "../http-common";


const INVOICE_API = 'http://localhost:8080/api/invoices'

class InvoiceService{
    getInvoices(){
        return axios.get(INVOICE_API);
    }

    createInvoice(newInvoice){
        return axios.post(INVOICE_API, newInvoice);
    }

    getInvoiceById(id){
        return http.get(`/invoices/${id}`);
    }
}

export default new InvoiceService()