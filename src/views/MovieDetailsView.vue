<script setup>
import { onMounted } from 'vue';
import { useMovieStore } from '@/stores/movie';
const movieStore = useMovieStore();

const props = defineProps({
    movieId: {
        type: Number,
        required: true,
    },
});

onMounted(async () => {
    await movieStore.getMovieDetail(props.movieId);
});
</script>

<template>

    <div class="main">
        <div class="content">
            <img :src="`https://image.tmdb.org/t/p/w185${movieStore.currentMovie.poster_path}`"
                :alt="movieStore.currentMovie.title" />

            <div class="details">
                <h1>Filme: {{ movieStore.currentMovie.title }}</h1>
                <p>{{ movieStore.currentMovie.tagline }}</p>
                <p>{{ movieStore.currentMovie.overview }}</p>
                <p>Orçamento: ${{ movieStore.currentMovie.budget }}</p>
                <p>Avaliação: {{ movieStore.currentMovie.vote_average }}</p>
            </div>
        </div>

        <div class="companies">
            <p class="companies-title">Produtoras</p>
            <template v-for="company in movieStore.currentMovie.production_companies" :key="company.id">
                <img v-if="company.logo_path" :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
                    :alt="company.name" />
                <p v-else>{{ company.name }}</p>
            </template>
        </div>
    </div>

</template>

<style scoped>
.companies {
    display: flex;
    flex-direction: column;
    column-gap: 3rem;
    align-items: self-end;
    margin-bottom: 2rem;

}

.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 11vw;
    padding: 10vh 15vh;
    background-color: rgb(159, 255, 223);
    border: 2px solid black;
    border-radius: 20px;
}

.content,
.companies {
    margin-left: 10vw;
    margin-right: 10vw;
}
</style>