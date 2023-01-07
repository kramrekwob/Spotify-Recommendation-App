import { createApp, reactive } from "https://unpkg.com/petite-vue?module";
const app = reactive({
    movieType: "popular",
    results: "",
    async search(){
        const movieSearch = await fetch(`https://api.themoviedb.org/3/movie/${this.movieType}?api_key=02069e4a0f38ebacc2bc4d24d1d645e6`, {headers: {Authentication: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjA2OWU0YTBmMzhlYmFjYzJiYzRkMjRkMWQ2NDVlNiIsInN1YiI6IjYzYjlhNmRiZjg1OTU4MDBhZTMxZTY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2f3OMqS-xMk1io_N4vjqVOoCJWw1mo6eeNjP4X_EIgk'}})
        this.results = await movieSearch.json()

        console.log(results);
    }
})
createApp({app}).mount("#movieapp");