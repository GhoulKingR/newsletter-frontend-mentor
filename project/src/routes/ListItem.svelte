<script>
  /**
   * @type {string}
   */
  export let text;
</script>

<div class="container">
  <div class="img">
    <img src="icon-list.svg" alt="icon" />
  </div>
  <div>
    {text}
  </div>
</div>

<style>
  .container {
    display: flex;
    margin-bottom: 15px;
  }

  .img {
    margin-right: 15px;
    display: flex;
    align-items: start;
  }
</style>
