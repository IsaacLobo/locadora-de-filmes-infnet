<template>
  <div>
      <p>{{segundos}} segundos rolando</p>
  </div>
   
</template>

<script>
export default{
    name: 'Contador'
}
    new Vue({
        el:"#app",
        data:{
            segundos:0
        },
        created(){
            setInterval(
                ()=>{
                    this.segundos++;
                }, 1000);
        }

    });

</script>