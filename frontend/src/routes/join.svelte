<svelte:head>
    <title>Join</title>
</svelte:head>

<script>
    export var joined = false;





</script>




<h1>Join</h1>



{#if joined}
    <p>You have joined the class!</p>
    <p>Connect your Virtual Box via usb to the computer and then click connect below</p>
    <button>Connect</button>
{:else}
    <form>
        <label for="code">Code:  </label><input id="code" type="text"> <br>
        <label for="name">Name:  </label><input id="name" type="text">  <br>
        <button type="submit">Join</button> 
    </form>
{/if}
