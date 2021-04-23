<svelte:head>
    <title>Join</title>
</svelte:head>
<script>
    import { onMount } from 'svelte';
    import io from 'socket.io-client';

    const socket = io();

    export var joined = false;
    var errMessage = '';

    let form = {
        code: '',
        name: ''
    }

    onMount(()=>{
        socket.emit('Hello!');
    })



    

    function handleJoin(){
        socket.emit('join', {
            code: form.code,
            name: form.name
        })
    }

    socket.on('join_response', (data)=>{
        if(data.success == true){
            joined = true;
        }
        else{
            errMessage = data.err; 
        }
    })
    socket.on('gived_star', ()=>{
        console.log("star given");
    })
    


</script>




<h1>Join</h1>



{#if joined}
    <p>You have joined the class!</p>
    <p>Connect your Virtual Box via usb to the computer and then click connect below</p>
    <button>Connect</button>
{:else}
    <div >
        <label for="code">Code:  </label><input bind:value={form.code} id="code" type="text"> <br>
        <label for="name">Name:  </label><input  bind:value={form.name} id="name" type="text">  <br>
        <button on:click={handleJoin} >Join</button> 
        <p>{errMessage}</p>
    </div>
{/if}
