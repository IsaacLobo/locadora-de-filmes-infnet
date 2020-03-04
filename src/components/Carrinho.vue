<template>
  <div class ="col-12">
    <form>
      <div class="form-group">
        <label for="pedido.primeiroNome">Primeiro Nome</label>
        <input type="text" class="form-control" id="primeiroNome" 
        placeholder="Digite o Primeiro Nome" v-model.trim="pedido.primeiroNome">
      </div>
      <div class="form-group">
        <label for="ultimoNome">Último Nome</label>
        <input type="text" class="form-control" id="ultimoNome" 
        placeholder="Digite o Último Nome" v-model.trim="pedido.ultimoNome">
      </div>
      <div class="form-group">
        <label for="endereco">Endereço</label>
        <input type="text" class="form-control" id="endereco" 
        placeholder="Digite o Endereço" v-model.trim="pedido.endereco">
      </div>
      <div class="form-group">
        <label for="cidade">Cidade</label>
        <input type="text" class="form-control" id="cidade" 
        placeholder="Digite a Cidade" v-model.trim="pedido.cidade">
      </div>
      <div class="form-group">
        <label for="Estado">Estado</label>
        <input type="text" class="form-control" id="estado" 
        placeholder="Digite a Estado" v-model="pedido.estado">
      </div>
      <div class="form-group">
        <label for="cep">CEP</label>
        <input type="number" class="form-control" id="cep" 
        placeholder="Digite a CEP" v-model.number="pedido.cep">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="pagoNaEntrada" 
        value="true" 
        v-bind:true-value="pedido.simNaEntrega"
        v-bind:false-value="pedido.simNaEntrega"
        v-model="pedido.pagoNaEntrega"        
        >
        <label class="form-check-label" for="pagoNaEntrega">Pago na Entrega?</label>
      </div>
      <div class="form-group form-check-inline">
        <input type="radio" class="form-check-input" id="manha" 
        value="true" v-model="pedido.entrega">
        <label class="form-check-label" for="manha">Manhã</label>
      </div>
      <div class="form-group form-check-inline">
        <input type="radio" class="form-check-input" id="tarde" 
        value="true" v-model="pedido.entrega">
        <label class="form-check-label" for="tarde">Tarde</label>
      </div>
      <div class="form-group form-check-inline">
        <input type="radio" class="form-check-input" id="noite" 
        value="true" v-model="pedido.entrega">
        <label class="form-check-label" for="noite">Noite</label>
      </div>
      <select class="form control" id="estado" v-model="pedido.estado">
        <option disabled value>Escolha um estado</option>
        <option
        v-for="(estado, key) in estados"
        v-bind:value="estado"
        v-bind:key="key">
        {{key}}        
        </option>
      </select>
    </form>
  <div class="col-12">
    <pre>
      Primeiro Nome:{{pedido.primeiroNome}}
      Último Nome:{{pedido.ultimoNome}}
    </pre>    
  </div>
</div>
  
</template>


<script>

  export default {
    name: 'Home',
    props: {},
    data: function () {
      return {
      mostrarFilmes: true,
      title: "Locadora de Filmes",
      horas: new Date().getHours(),
      pedido: {
       primeiroNome: "",
       ultimoNome: "",
       endereco: "",
       cidade: "",
       estado: "",
       cep: "",
       pagoNaEntrega: false,
       simNaEntrega: "Sim",
       naoNaEntrega: "Não",
       entrega: "Manhã"
     },
     estados: {
       RJ: 'Rio de Janeiro',
       MG: 'Minas Gerais',
       SP: 'São Paulo',
       ES: 'Espírito Santo'
     }
      }

    },
    methods:{
      submitFormulario() {
      alert('Pedido finalizado');
    }
    }
  }
</script>


<style>

</style>