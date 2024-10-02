<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-brand">Fitness Gym</router-link>
    <div class="navbar-links">
      <router-link to="/about">About Us</router-link>
      <router-link to="/contact">Contact Us</router-link>
      <router-link to="/login" class="navbar-contact">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background-color: #000;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
}

.navbar-contact {
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
}

.navbar-contact:hover {
  background-color: #34a32b;
}

.navbar-links a:hover {
  text-decoration: underline;
}
</style>

