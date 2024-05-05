<template>
  <HeaderPage />
  <h1>Hello! Welcome to Update Restaurant Page</h1>
  <hr />
  <form v-on:submit="updateRestaurant">
    <div class="add-menu">
      <h2>Update Restaurant Data</h2>
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
      <button>Update Restaurant</button>
    </div>
  </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'
export default {
  name: 'UpdateRes',
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
    async updateRestaurant(e) {
      e.preventDefault()
      console.log(this.restaurant)
      const result = await axios.put('http://localhost:3000/restaurant/' + this.$route.params.id, {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact
      })
      console.log(result)
      if (result.status == 200) {
        alert('Restaurant Data Updated!')
        this.$router.push({ name: 'HomePage' })
      }
    }
  },
  async mounted() {
    if (!localStorage.getItem('user-info')) {
      this.$router.push({ name: 'SignUpPage' })
    }
    const result = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id)
    // console.log(this.$route.params.id)
    console.log(result.data)
    this.restaurant = result.data
  }
}
</script>

<style>
h1 {
  text-align: center;
}
.add-menu h2 {
  margin: -5px 0px;
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
