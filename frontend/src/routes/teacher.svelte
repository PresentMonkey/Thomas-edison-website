<svelte:head>
    <title>Teacher Interface</title>
</svelte:head>
<script>
    import Student from '../components/Student.svelte';
    import io from 'socket.io-client';
    import { onMount } from 'svelte';
    const socket = io();

    socket.on('studentData', (data)=>{
        console.log(data);
        students = data.users;
        

    });


    var students = []

</script>

<style>
    ul{
        list-style-type: none;
    }
    
</style>


<h1>Teacher Interface</h1>


<ul>
    {#each students as student}
        <Student name={student.name} id={student.id} socket={socket} />
    {/each}
</ul>

