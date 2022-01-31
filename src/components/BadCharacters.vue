<template>
    <div class="col-md-4 character">
        <p class="text-center">
            {{character.name}}
        </p>
        <p>Jobs: 
            <span class="pill" v-for="job in character.occupation.slice(0,2)" :key="job">
            {{job }}&nbsp;
            </span> 
        </p>     
        <p>Portrayed by: {{character.portrayed}} </p>
        <p>Status: {{character.status}}</p>
    </div>
</template>

<script>
export default {
    name: 'BadCharacters',
    props: ['character']
}
</script>

<style scoped>
.imgBio {
    height: 150 !important;
    width: 150 !important;
}

.character {
    border: 1px solid black;
    border-radius: 4px;
}
.pill {
    background-color: #10630286;
    color:white;
    margin-right: 4px;
}
</style>