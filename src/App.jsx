import { useState } from "react";

export default function ChuckNorris() {
  const [joke, setJoke] = useState("");

  const fetchJokeWithAsyncAwait = async () => {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await res.json()
        setJoke(data.value)
        
    } catch (error) {
        console.error('There was an error!', error)
    }
  }
  

  return (
    <>
      <h1> Chuck Norris Joke Generator </h1>
      <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-150327735-copy.jpg"/>
      <h2> {joke} </h2>
      <button onClick={fetchJokeWithAsyncAwait}> Click to Generate Joke! </button>
    </>
  );
}
