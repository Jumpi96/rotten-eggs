
export async function fetchMovies(setMovies, setErrors) {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/movies/`);
    res
        .json()
        .then(res => setMovies(res))
        .catch(err => setErrors(err));
}