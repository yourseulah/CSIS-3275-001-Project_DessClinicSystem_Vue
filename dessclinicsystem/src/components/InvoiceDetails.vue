<template>
    <div v-if="invoice">
        <br>
        <div class="itemList">id: {{ invoice.id }}</div>
        <br>
        <div class="itemList">Payment date: {{ invoice.paymentDate }}</div>
        <br>
        <div class="itemList">Method: {{ invoice.method }}</div>
        <br>
        <div class="itemList">Amount: {{ invoice.amount }}</div>
        <br>
        <div class="itemList">Status: {{ invoice.status }}</div>
        <br>
        <div class="itemList">Insurance Company: {{ invoice.insuranceCompany }}</div>
    </div>
</template>

<script>
import InvoiceService from '../services/InvoiceService';

export default{
    data() {
        return{
            invoice: null
        }
    },

    methods: {
        retreiveInvoice(id){
            InvoiceService.getInvoiceById(id)
                .then(response => {
                    this.invoice = response.data;
                    console.log(this.invoice);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },

    created(){
        const id = this.$route.params.id;
        this.retreiveInvoice(id);
    }
}

</script>

<style>

    .itemList{
        size: 30px;
        margin-left: 100px;
        font-size: 20px;
    }

</style>