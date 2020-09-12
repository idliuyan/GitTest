<template>
  <div class="classify">
    {{ age1 }}  --- {{ age2 }}  ---- {{name}}
    <br/>
     <button @click="changeAgeAction">点击</button>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
export default {
  name: 'Classify',
  mounted(){
    console.log(this.$store.state.classify.age);
  },
  computed:{
    ...mapState({
       age1: state => state.classify.age,
       age2: state => state.age,
       name: state => state.mine.name,
    })
  },
  methods:{
    ...mapActions('classify',['changeAgeAction']),
  }
}
</script>

<style scoped>
  .classify{
    font-size: 30px;
  }
</style>

