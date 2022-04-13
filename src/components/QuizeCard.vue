<template>
      <div>
          <div class="card m-4 shadow" style="width: 18rem; text-align:center;">
              <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Quize Name</h5>
            <p class="card-text"> Quize description time , marks and other details.</p>
            <router-link :to="/quize/+id" class="btn btn-primary">Start Quize</router-link>
          </div>
          </div>
      </div>

</template>

<script>
export default {
 props:['id']
}
</script>

<style>

</style>>