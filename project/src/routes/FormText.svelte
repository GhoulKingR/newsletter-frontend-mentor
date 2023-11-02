<script>
  import ListItem from "./ListItem.svelte";
</script>

<div>
  <h1>Stay updated!</h1>

  <p>Join 60,000+ product managers receiving monthly updates on:</p>

  <p>
    <ListItem text="Product discovery and building what matters" />
    <ListItem text="Measuring to ensure updates are a success" />
    <ListItem text="And much more!" />
  </p>
</div>

<style>
  div {
    color: hsl(234, 29%, 20%);
    font-family: Roboto !important;
  }

  h1 {
    padding: 30px;
    padding-bottom: 20px;
    font-weight: 700;
    font-size: 40px;
  }

  p {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
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
