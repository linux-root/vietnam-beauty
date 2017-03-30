<template>
  <!-- Coming Soon Content -->
  <div class="content pulldown bg-black-op overflow-hidden animated fadeIn">
    <div class="row text-center push">
      <div class="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
        <!-- Title -->
        <h1 class="text-white push-5">VIETNAM TRAVEL</h1>
        <h2 class="h5 text-white-op push-30">Stay tuned! We are working on it and it is coming soon!</h2>
        <!-- END Title -->

        <!-- Countdown -->
        <div class="push-50">
          <!-- Countdown.js (class is initialized in js/pages/base_pages_coming_soon.js), for more examples you can check out https://github.com/hilios/jQuery.countdown -->
          <div class="js-countdown"><div class="row items-push text-center"><div class="col-xs-3"><div class="font-s36 font-w700 text-white">655</div><div class="font-s12 font-w700 text-white-op">DAYS</div></div><div class="col-xs-3"><div class="font-s36 font-w700 text-white">13</div><div class="font-s12 font-w700 text-white-op">HOURS</div></div><div class="col-xs-3"><div class="font-s36 font-w700 text-white">22</div><div class="font-s12 font-w700 text-white-op">MINUTES</div></div><div class="col-xs-3"><div class="font-s36 font-w700 text-white">27</div><div class="font-s12 font-w700 text-white-op">SECONDS</div></div></div></div>
        </div>
        <!-- END Countdown -->

        <!-- Subscribe Form -->
        <form class="form-inline push-10 animated bounceIn" >
          <div class="form-group">
            <label class="sr-only text-white" for="subscribe-email">Email address</label>
            <input class="form-control" type="email" id="subscribe-email" name="subscribe-email" placeholder="Your Email..">
          </div>
          <div class="form-group ">
            <button class="btn btn-default"><i class="fa fa-plus"></i> Subscribe</button>
          </div>
        </form>
        <small class="text-white-op">Don't worry, we hate spam.</small>
        <!-- END Subscribe Form -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
