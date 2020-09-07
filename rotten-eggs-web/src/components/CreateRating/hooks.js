
export async function fetchMovie(movieId, setMovie, setErrors) {
    const res = await fetch(`http://localhost:8000/api/movies/${movieId}`);
    res
        .json()
        .then(res => setMovie(res))
        .catch(err => setErrors(err));
}

export async function submitRating(rating, setErrors, setSubmitted) {
    const res = await fetch("http://localhost:8000/api/ratings/", {
      method: "POST",
      body: JSON.stringify(rating),
      headers: {'Content-Type': 'application/json', 'Authorization': 'Basic ZGV2ZWxvcGVyOkNIQU5HRU1F'}
    });
    if (res.status === 201) { 
        setSubmitted(true);
    } else {
        setErrors("The rating couldn't been saved.");
    }
}