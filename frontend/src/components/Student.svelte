<script>
    export var name;
    export var id;
    export var socket;


    function handleStar(){
        socket.emit('give_star', (id));
    }


</script>

<li>{name} | <button on:click={handleStar}>Give Star</button></li>