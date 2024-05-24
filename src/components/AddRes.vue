<template>
  <HeaderPage />
  <h1>Hello! User, Welcome to Add Restaurant Page</h1>
  <hr />
  <form v-on:submit="addRestaurant">
    <div class="add-menu">
      <h2>Add Restaurant Data</h2>
      <input type="text" placeholder="Enter Res Name" name="name" v-model="restaurant.name" />
      <input
        type="text"
        placeholder="Enter Res Address"
        name="address"
        v-model="restaurant.address"
      />
      <input
        type="text"
        placeholder="Enter Res Contact"
        name="contact"
        v-model="restaurant.contact"
      />
      <button>Add New Restaurant</button>
      <button type="button" v-on:click="clearHundler">Clear</button>
    </div>
  </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'
export default {
  name: 'AddRes',
  components: {
    HeaderPage
  },
  data() {
    return {
      restaurant: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods: {
    async addRestaurant(e) {
      e.preventDefault()
      this.name = JSON.parse(localStorage.getItem('user-info')).name
      const result = await axios.post('http://localhost:3000/restaurant', {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact
      })
      console.log(result)
      if (result.status == 201) {
        alert('New Restaurant Added!')
      }
    },
    clearHundler() {
      this.restaurant.name = ''
      this.restaurant.address = ''
      this.restaurant.contact = ''
    }
  }
}
</script>

<style>
h1 {
  text-align: center;
}
.add-menu h2 {
  margin: -5px 0px 5px 0px;
}
.add-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  background-color: rgb(255, 255, 255);
  padding: 30px;
  margin-top: 50px;
  gap: 10px;
}

.add-menu input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid;
  padding: 10px;
  font-size: 20px;
}
.add-menu button {
  width: 100%;
  border-radius: 5px;
  border: 1px solid;
  padding: 10px;
  font-size: 20px;
}
</style>
