<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="the-main">
  <div class="container">
    <div class="top">
      <div>
        <img src="icon-success.svg" alt="" />

        <h1>Thanks for subscribing!</h1>

        <p>
          A confirmation email has been sent to
          <b>{data.email}</b>. Please open it and click the button inside to
          confirm your subscription
        </p>
      </div>
    </div>
    <div class="bottom">
      <button>Dismiss message</button>
    </div>
  </div>
</div>

<style>
  img {
    margin-bottom: 35px;
  }

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 100px;
  }

  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    color: hsl(234, 29%, 20%);
  }

  .top {
    display: flex;
    flex: 1;
    padding: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .bottom {
    padding: 30px;
  }

  button {
    cursor: pointer;
    width: 100%;
    padding: 18px;
    background-color: hsl(234, 29%, 20%);
    border: none;
    color: white;
    font-weight: 700;
    font-size: small;
    border-radius: 7px;
    margin-bottom: 20px;
  }

  button:hover {
    background: linear-gradient(90deg, rgb(236, 96, 123), hsl(4, 100%, 67%));
    box-shadow: 0px 15px 30px 10px hsla(4, 100%, 67%, 0.3);
  }

  @font-face {
    font-family: Roboto;
    src: url(/Roboto-Regular.ttf);
    font-weight: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url(Roboto-Bold.ttf);
    font-weight: bold;
  }

  @media screen and (min-width: 1000px) {
    .the-main {
      justify-content: center;
      align-items: center;
      display: flex;
      width: 100vw;
      height: 100vh;
      background-color: hsl(235, 18%, 26%);
    }

    .container {
      width: 400px;
      height: unset;
      background-color: white;
      border-radius: 30px;
      padding: 30px;
      padding-top: 20px;
      box-shadow: 0px 20px 50px 30px hsl(234, 29%, 20%);
    }

    h1 {
      font-size: 50px;
    }

    p {
      margin-bottom: 0;
      font-size: 14px;
    }

    .bottom {
      padding-top: 0;
    }
  }
</style>
