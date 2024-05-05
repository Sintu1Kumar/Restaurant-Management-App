<template>
  <div class="nav">
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/add-res">Add Restaurant</RouterLink>
    </div>
    <div>
      <a href="sign-in" v-on:click="logout">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name: 'LoginPage' })
    }
  }
}
</script>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #a19f9f;
  box-sizing: border-box;
}
.nav a {
  text-decoration: none;
  color: #000;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 15px;
  box-sizing: border-box;
}
.nav a:hover {
  color: #fff;
  background-color: #000;
  border-radius: 10px;
}
</style>
