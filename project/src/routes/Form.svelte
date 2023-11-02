<script>
  let email = "";
  $: validEmail = ValidateEmail(email);
  $: inputClass = validEmail ? "" : "invalid-input";

  /**
   * @param {string} input
   */
  function ValidateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.length === 0) return true;
    else if (email.match(validRegex)) return true;
    else return false;
  }
</script>

<form action="success" method="get">
  <label for="email-form">
    <div>Email address</div>

    {#if !validEmail}
      <div class="invalid">Valid email required</div>
    {/if}
  </label>
  <input
    type="email"
    id="email-form"
    class={inputClass}
    bind:value={email}
    placeholder="email@company.com"
    name="email"
    required
  />
  <button type="submit">Subscribe to monthly newsletter</button>
</form>

<style>
  form {
    padding-left: 30px;
    padding-right: 30px;
    font-family: Roboto;
    color: hsl(234, 29%, 20%);
  }

  label {
    font-size: x-small;
    display: block;
    font-weight: 700;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  input {
    width: 97%;
    height: 45px;
    display: block;
    margin-top: 12px;
    margin-bottom: 20px;
    padding-left: 10px;
    border: 1px solid hsl(231, 7%, 60%);
    font-size: small;
    border-radius: 7px;
    cursor: pointer;
  }

  .invalid {
    color: hsl(4, 100%, 67%);
  }

  .invalid-input {
    background-color: hsla(4, 100%, 67%, 0.3);
    border: 1px solid hsl(4, 100%, 67%) !important;
    color: hsl(4, 100%, 67%);
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
    margin-bottom: 30px;
  }

  button:hover {
    background: linear-gradient(90deg, rgb(236, 96, 123), hsl(4, 100%, 67%));
    box-shadow: 0px 15px 30px 10px hsla(4, 100%, 67%, 0.3);
  }

  input:focus,
  input:hover {
    outline: none;
    border: 1px solid black;
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
</style>
