<template>
<div v-if="invoice">
  <br>
  <table class="invoice-table">
    <tr>
      <td>Id:</td>
      <td>{{ invoice.id }}</td>
    </tr>
    <tr>
      <td>Payment date:</td>
      <td>{{ invoice.paymentDate }}</td>
    </tr>
    <tr>
      <td>Method:</td>
      <td>{{ invoice.method }}</td>
    </tr>
    <tr>
      <td>Amount:</td>
      <td>{{ invoice.amount }}</td>
    </tr>
    <tr>
      <td>Status:</td>
      <td>{{ invoice.status }}</td>
    </tr>
    <tr>
      <td>Insurance Company:</td>
      <td>{{ invoice.insuranceCompany }}</td>
    </tr>
  </table>
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

.invoice-table {
  margin: 0 auto; 
  border-collapse: collapse; 
  font-size: 16px;
}

.invoice-table td {
  padding: 10px; 
  border: 1px solid #ccc;
}

.invoice-table td:first-child {
  font-weight: bold; 
  background-color: #f5f5f5; 
}

</style>