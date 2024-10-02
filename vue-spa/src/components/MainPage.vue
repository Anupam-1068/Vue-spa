<template>
  <div class="main-content">
    <div class="hero-section">
      <h1>Fitness Wonder</h1>
      <p>
        "The body achieves what the mind believes.”<br />
        – Napoleon Hill
      </p>
      <button class="hero-btn">Read More</button>
    </div>

    <div class="banner">
      <div class="banner-item">
        <h2>25% Discount</h2>
        <p>If You Sign Up Today</p>
      </div>
      <div class="banner-item">
        <h2>Fitness Class</h2>
        <p>Get Started Today</p>
        <button class="banner-btn">Send Message</button>
      </div>
    </div>

    <div class="content-section">
      <h2>Our Programs</h2>
      <p>
        Explore a wide range of programs to fit your fitness needs. Whether you're looking for weight loss, muscle building, or general fitness, we have a program for you.
      </p>
    </div>

    <div class="content-section">
      <h2>Why Choose Us</h2>
      <p>
        We offer state-of-the-art facilities, experienced trainers, and a community that supports you in achieving your fitness goals.
      </p>
    </div>

    <div class="content-section">
      <h2>Contact Us</h2>
      <p>
        Call us at +34 566 778 8892 or visit our gym to get started with your fitness journey today!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
};
</script>

<style scoped>
.main-content {
  padding: 20px;
}

.hero-section {
  height: 400px;
  background: url('fitness-main.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
}

.hero-section h1 {
  font-size: 50px;
}

.hero-section p {
  max-width: 600px;
  margin: 20px auto;
  font-size: 18px;
}

.hero-btn {
  background-color: #46c93a;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.hero-btn:hover {
  background-color: #34a32b;
}

.banner {
  display: flex;
  justify-content: space-around;
  background-color: #f8f8f8;
  padding: 40px;
  margin: 20px 0;
}

.banner-item {
  text-align: center;
}

.banner-item h2 {
  color: #46c93a;
  font-size: 28px;
}

.banner-item p {
  font-size: 16px;
  margin: 10px 0;
}

.banner-btn {
  background-color: #46c93a;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.banner-btn:hover {
  background-color: #34a32b;
}

.content-section {
  margin-top: 50px;
  padding: 20px;
}

.content-section h2 {
  font-size: 30px;
  color: #333;
}

.content-section p {
  font-size: 18px;
  line-height: 1.6;
}
</style>
