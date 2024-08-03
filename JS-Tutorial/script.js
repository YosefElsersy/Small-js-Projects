// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Could not fetch resource")
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error(error));


async function fetchData(){
  try {
    const githubName = document.getElementById("githubName").value.toLowerCase();

    const response = await fetch(`https://api.github.com/users/${githubName}`);
    if (!response.ok) {
      throw new Error("Could not fetch resource")
    }
    const data = await response.json();
    const githubAvatar = data.avatar_url;
    const imageElement = document.getElementById("githubAvatar");
    imageElement.src = githubAvatar;
    imageElement.style.display = "block";


  } catch (error) {
    console.error(error);
  }
}


fetchData();