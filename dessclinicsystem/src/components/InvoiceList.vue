<template>
    <div class = "container">
        <h1 class="text-center">Invoice List</h1>
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
                <tr v-for = "invoice in invoices" v-bind:key = "invoice.id">
                    <td> {{ invoice.id }}</td>
                    <td> {{ invoice.paymentDate }}</td>
                    <td> {{ invoice.method }}</td>
                    <td> {{ invoice.amount }}</td>
                    <td> {{ invoice.status }}</td>
                    <td> {{ invoice.insuranceCompany }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    import InvoiceService from '../services/InvoiceService'

    export default {
        name: 'AllInvoices',
        data(){
            return {
                invoices : []
            }
        },
        methods: {
            getInvoices(){
                InvoiceService.getInvoices().then((response) =>{
                    this.invoices = response.data;
                }).catch(error => {
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                })
            }
        },
        created(){
            this.getInvoices()
        }
    }
</script>