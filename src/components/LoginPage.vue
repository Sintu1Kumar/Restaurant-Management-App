<template>
  <form v-on:submit="loginHundler">
    <div id="login">
      <h1>Login</h1>
      <div id="login_1">
        <input type="email" placeholder="Enter Your Email" v-model="email" />
        <input type="password" placeholder="Enter Your Password" v-model="password" />
        <button>Login</button>
        <p>
          Don't have an account?
          <router-link to="/sign-up">Sign Up</router-link>
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async loginHundler(e) {
      e.preventDefault()
      console.log(this.email, this.password)
      let result = await axios.get(
        `http://localhost:3000/sign-up?email=${this.email}&password=${this.password}`
      )
      if (result.status == 200 && result.data.length > 0) {
        alert('Login Successful')
        localStorage.setItem('user-info', JSON.stringify(result.data[0]))
        this.$router.push({ name: 'HomePage' })
      } else {
        alert('Login Failed')
      }
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
#login {
  max-width: 300px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0rem 2rem 2rem 2rem;
  margin: 10% auto;
  background-color: gray;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
#login h1 {
  text-align: center;
}
#login_1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}
#login_1 input {
  width: 100%;
  height: auto;
  border: 1px solid rgb(202, 200, 200);
  border-radius: 10px;
  padding: 10px;
}
#login_1 button {
  width: 100%;
  height: auto;
  border: 1px solid rgb(202, 200, 200);
  border-radius: 10px;
  padding: 10px;
  background-color: rgb(202, 200, 200);
  color: black;
  cursor: pointer;
}
#login_1 button :hover {
  background-color: rgb(43, 226, 104);
}
</style>
