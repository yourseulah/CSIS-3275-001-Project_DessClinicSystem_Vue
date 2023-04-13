<template>
    <div class="container">
        <h1 class="text-center">Invoices</h1>
        <table class="table table-striped">
            <thead>
                <th>Invoice ID</th>
                <th>Payment Date</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Insurance Company</th>
            </thead>
            <tbody>
                <tr v-for="invoice in invoices" v-bind:key="invoice.id">
                    <td> {{ invoice.id }}</td>
                    <td> {{ invoice.paymentDate }}</td>
                    <td> {{ invoice.method }}</td>
                    <td> {{ invoice.amount }}</td>
                    <td> {{ invoice.status }} <button class="btn btn-info btn-sm" v-if="invoice.status!='Paid'" 
                        @click="handleUpdateInvoiceClick(invoice)">Paid</button></td>
                    <td> {{ invoice.insuranceCompany }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import InvoiceService from '../../services/InvoiceService'

export default {
    name: 'AllInvoices',
    data() {
        return {
            invoices: [],
            invoice : {
                id: '',
                status: ''
            }
        }
    },
    methods: {
        getInvoices() {
            InvoiceService.getInvoices().then((response) => {
                this.invoices = response.data;
            }).catch(error => {
                this.message = error.response.data.message;
                console.log(error.response.data);
            })
        },
        handleUpdateInvoiceClick(invoiceUp) {
            event.preventDefault();
            invoiceUp.status = "Paid";
            InvoiceService.updateInvoice(invoiceUp.id, invoiceUp)
                .then(response => {
                    const updatedInv = response.data;
                    console.log("Updated Invoice:");
                    console.log(updatedInv);

                    this.getInvoices();
                })
                .catch(error => {
                    console.log(error);
                })
        },
    },
    created() {
        this.getInvoices()
    }
}
</script>

<style scoped>
table {
    border-collapse: collapse;
    width: 80%;
    margin: auto;
    border: 1px solid #ddd;
    font-size: 18px;
}

th,
td {
    text-align: center;
    padding: 12px;
}

th {
    background-color: #333333;
    color: white;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

td:first-child {
    border-left: 1px solid #ddd;
}

td:last-child {
    border-right: 1px solid #ddd;
}

tr:last-child td {
    border-bottom: 1px solid #ddd;
}

tbody td {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}

.container {
    margin: 30px auto;
    border: 1px solid #ddd;
    padding: 30px;
}

.btn {
    border-radius: 5px;
    /* padding: 10px 20px; */
    margin-right: 10px;
}

.btn-info {
    background-color: #17a2b8;
    border-color: #17a2b8;
    color: #fff;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.btn-info:hover {
    background-color: green;
    border-color: #117a8b;
    color: #fff;
    transform: translateY(-2px);
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
</style>