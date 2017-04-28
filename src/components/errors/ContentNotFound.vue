<template>
  <div class="content bg-white text-center overflow-hidden">
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3">
        <h1 class="font-s128 font-w300 text-city animated flipInX">404</h1>
        <h2 class="h3 font-w300 push-50 animated fadeInUp">We are sorry but the page you are looking for was not found..</h2>
        <form class="form-horizontal push-50" action="base_pages_search.html" method="post">
          <div class="form-group">
            <div class="col-sm-6 col-sm-offset-3">
              <div class="input-group input-group-lg">
                <input class="form-control" type="text" placeholder="Search application..">
                <div class="input-group-btn">
                  <button class="btn btn-default"><i class="fa fa-search"/></button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContentNotFound'
  }
</script>
