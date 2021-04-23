<svelte:head>
    <title>Join</title>
</svelte:head>
<script>
    import { onMount } from 'svelte';
    import io from 'socket.io-client';
    class Serial{
    /**
     * Static Function to open port 
     * @returns {Serial}
     */
    static newDevice(){
        return new Serial();
    }
    constructor(){
        this.device;
        this.interfaceNumber = 2;
        this.endpointIn = 5;
        this.endpointOut = 4;

    }
    /**
     * Opens the device port (can only be called from a user function)
     */
    async openPort(){
        const filters = [{ 'vendorId': 0x2341, 'productId': 0x8036 }, // Arduino Leonardo
        { 'vendorId': 0x2341, 'productId': 0x8037 } //Arduin Micro
        ]
        try{
            let device = await navigator.usb.requestDevice({filters: filters});
            this.device = device;
            await device.open();
            await device.selectConfiguration(1);
            await device.claimInterface(this.interfaceNumber);
            await device.controlTransferOut({
                'requestType': 'class',
                'recipient': 'interface',
                'request': 0x22,
                'value': 0x01,
                'index': this.interfaceNumber
            });
        }
        catch(e){
            console.error(e);
        }
    }
    log(){
        console.log(this.device);
    }
    /**
     * Writes to the USB serial
     * @param {string} strings 
     */
    async send(strings){
        var encoder = new TextEncoder();
        const things = encoder.encode(strings);
        try{
            await this.device.transferOut(this.endpointOut, things);
        }
        catch(e){
            console.error(e);
        }
    }
}

    const socket = io();

    export var joined = false;
    var errMessage = '';

    let form = {
        code: '',
        name: ''
    }

    var arduino;

    onMount(()=>{
        arduino = Serial.newDevice();
    })

    function connect(){

    }

    

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
        arduino.send('h');
    })
    


</script>




<h1>Join</h1>



{#if joined}
    <p>You have joined the class!</p>
    <p>Connect your Virtual Box via usb to the computer and then click connect below</p>
    <button on:click={connect}>Connect</button>
{:else}
    <div >
        <label for="code">Code:  </label><input bind:value={form.code} id="code" type="text"> <br>
        <label for="name">Name:  </label><input  bind:value={form.name} id="name" type="text">  <br>
        <button on:click={handleJoin} >Join</button> 
        <p>{errMessage}</p>
    </div>
{/if}
