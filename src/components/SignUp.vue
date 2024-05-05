<template>
  <form v-on:submit="submitHundler">
    <div id="signup">
      <h1>Sign Up</h1>
      <div id="register">
        <input type="text" placeholder="Enter Your Name" v-model="name" />
        <input type="email" placeholder="Enter Your Email" v-model="email" />
        <input type="password" placeholder="Enter Your Password" v-model="password" />
        <button>Sign Up</button>
        <p>
          Already have an account?
          <router-link to="/sign-in">Sign In</router-link>
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async submitHundler(e) {
      e.preventDefault()
      console.log(this.name, this.email, this.password)
      let result = await axios.post('http://localhost:3000/sign-up', {
        name: this.name,
        email: this.email,
        password: this.password
      })
      console.log(result)
      if (result.status == 201) {
        alert('User Created Successfully')
      }
      localStorage.setItem('user-info', JSON.stringify(result.data))
      this.$router.push({ name: 'HomePage' })
    }
  },
  mounted() {
    if (localStorage.getItem('user-info')) {
      this.$router.push({ name: 'HomePage' })
    }
  }
}
</script>

<style>
#signup {
  max-width: 300px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0rem 2rem 2rem 2rem;
  margin: 10% auto;
  background-color: gray;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
#signup h1 {
  text-align: center;
}
#register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}
#register input {
  width: 100%;
  height: auto;
  border: 1px solid rgb(202, 200, 200);
  border-radius: 10px;
  padding: 10px;
}
#register button {
  width: 100%;
  height: auto;
  border: 1px solid rgb(202, 200, 200);
  border-radius: 10px;
  padding: 10px;
  background-color: rgb(202, 200, 200);
  color: black;
  cursor: pointer;
}
</style>
