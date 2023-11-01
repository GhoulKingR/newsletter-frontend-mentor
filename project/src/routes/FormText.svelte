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
    color: hsl(235, 18%, 26%);
    font-family: Roboto !important;
  }

  h1 {
    padding: 30px;
    font-weight: 700;
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
