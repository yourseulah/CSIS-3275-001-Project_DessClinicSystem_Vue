import axios from "axios"

const INVOICE_API = 'http://localhost:8080/api/invoices'

class InvoiceService{
    getInvoices(){
        return axios.get(INVOICE_API);
    }

    createInvoice(newInvoice){
        return axios.post(INVOICE_API, newInvoice);
    }

}

export default new InvoiceService()