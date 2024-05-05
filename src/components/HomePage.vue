<template>
  <HeaderPage />
  <h1>
    Hello {{ name.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase()) }}, Welcome on Home Page
  </h1>
  <hr />
  <table>
    <td>Id</td>
    <td>Name</td>
    <td>Address</td>
    <td>Contact</td>
    <td>Actions</td>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td>
        <tr>
          <td><RouterLink :to="'/update-res/' + item.id">Update</RouterLink></td>
          <td><button v-on:click="deleteRestaurant(item.id)">Delete</button></td>
        </tr>
      </td>
    </tr>
  </table>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  data() {
    return {
      name: '',
      restaurants: []
    }
  },
  components: {
    HeaderPage
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete('http://localhost:3000/restaurant/' + id)
      // console.log(result.data)
      if (result.status == 200) {
        // console.log(result.data)
        alert('Data has been deleted successfully')
        this.loadData()
      }
    },
    async loadData() {
      this.name = JSON.parse(localStorage.getItem('user-info')).name
      if (!localStorage.getItem('user-info')) {
        this.$router.push({ name: 'SignUpPage' })
      }
      let result = await axios.get('http://localhost:3000/restaurant')
      // console.log(result.data)
      this.restaurants = result.data
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style>
h1 {
  text-align: center;
}
table {
  border: 1px solid;
  border-collapse: collapse;
  width: 65%;
  margin: auto;
  margin-top: 2rem;
}
td {
  padding: 5px;
  font-size: 30px;
  border: 1px solid;
  text-align: center;
}
td tr {
  display: flex;
  justify-content: space-around;
}
td tr td {
  border: none;
}
td tr td button {
  padding: 7px;
  background-color: red;
  border-radius: 5px;
  color: white;
  border: none;
}
</style>
