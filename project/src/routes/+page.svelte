<script>
  import FormText from "./FormText.svelte";
  import Form from "./Form.svelte";
</script>

<div class="container">
  <div class="body">
    <div class="left-side">
      <div>
        <img src="illustration-sign-up-mobile.svg" alt="" class="mobile-bg" />
        <FormText />
        <Form />
      </div>
    </div>
    <img src="illustration-sign-up-desktop.svg" class="right-bg" alt="" />
  </div>
</div>

<style>
  .mobile-bg {
    width: 100vw;
  }

  .right-bg {
    display: none;
  }

  @media screen and (min-width: 1000px) {
    .mobile-bg {
      display: none;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: hsl(235, 18%, 26%);
    }

    .body {
      background-color: white;
      display: flex;
      border-radius: 30px;
    }

    .right-bg {
      display: block;
      margin: 30px;
    }

    .left-side {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 30px;
      width: 450px;
    }
  }
</style>
