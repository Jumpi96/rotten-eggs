
export async function fetchMovies(setMovies, setErrors) {
    const res = await fetch("http://localhost:8000/api/movies/");
    res
        .json()
        .then(res => setMovies(res))
        .catch(err => setErrors(err));
}