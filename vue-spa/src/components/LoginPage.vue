<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Fitness Login Form</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-container">
          <label for="username">
            <span class="icon">👤</span>
            <input
              type="text"
              id="username"
              placeholder="Username"
              v-model="username"
            />
          </label>
        </div>

        <div class="input-container">
          <label for="password">
            <span class="icon">🔒</span>
            <input
              type="password"
              id="password"
              placeholder="Password"
              v-model="password"
            />
          </label>
        </div>

        <div class="options">
          <label>
            <input type="checkbox" v-model="staySignedIn" />
            Stay Signed In
          </label>
          <button
            type="button"
            @click="handleForgotPassword"
            class="forgot-password-button"
          >
            Forgot Password?
          </button>
        </div>
        <button type="submit" class="login-button">Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      staySignedIn: false,
    };
  },
  methods: {
    handleSubmit() {
      // Assuming any username and password combination is valid for now.
      if (this.username && this.password) {
        // Redirect to the main page after a successful login
        this.$router.push('/'); // Update this route as per your setup
      } else {
        // You can show an error message here if needed
        alert('Please enter both username and password');
      }
    },
    handleForgotPassword() {
      // Implement your logic for forgot password here, e.g., open a modal
      console.log("Forgot password clicked");
    },
  },
};
</script>

<style scoped>
/* Main container for the login page */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('background-image.jpg'); /* Update with actual path */
  background-size: cover;
  background-position: center;
}

/* Login form container */
.login-form {
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

/* Form heading */
.login-form h2 {
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
  font-size: 24px;
}

/* Input container */
.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
}

/* Input fields */
.input-container input {
  width: 100%;
  padding: 10px;
  padding-left: 35px;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
}

/* Input focus styles */
.input-container input:focus {
  border-color: #00b894;
}

/* Icons inside the input field */
.icon {
  position: absolute;
  left: 10px;
  font-size: 18px;
  color: #fff;
}

/* Options: checkbox and forgot password */
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-bottom: 20px;
}

/* Checkbox */
.options input[type="checkbox"] {
  margin-right: 5px;
}

/* Forgot password link */
.options a {
  color: #ff7675;
  text-decoration: none;
}

/* Login button */
.login-button {
  background-color: #d63031;
  color: white;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #e74c3c;
}

/* LoginPage.css */
.forgot-password-button {
  background: none;
  border: none;
  color: blue; /* Or whatever color you want */
  text-decoration: underline; /* To make it look like a link */
  cursor: pointer;
  padding: 0;
  font: inherit; /* To inherit font styling from the parent */
}
</style>
