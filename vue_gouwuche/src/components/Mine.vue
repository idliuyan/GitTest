<template>
  <div class="mine">
        <p>{{a}}</p>
      <p>
        <button @click="changeA">点击</button>
      </p>

  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
export default {
  name: 'Mine',
  computed:{
    ...mapState({
      a: state => state.mine.mine1.a,
    })
  },
  methods:{
    ...mapActions('mine/mine1',['changeA'])
  },
  mounted(){
    console.log(this.$store.state.mine.name);
  }
}
</script>

<style scoped>
 .mine{
   font-size: 36px;
   background-color: #ff0;
 }
</style>
