<form>
  <label for="email-form">Email address</label>
  <input type="text" id="email-form" placeholder="email@company.com" required />
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
