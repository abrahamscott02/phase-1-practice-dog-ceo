console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedDropdown = document.getElementById("breed-dropdown");
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById("dog-image-container");
  
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      });
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById("dog-breeds");
        const breeds = data.message;
  
        for (const breed in breeds) {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);
        }
  
        breedDropdown.addEventListener("change", function() {
          const selectedLetter = breedDropdown.value;
  
          // Clear the previous breed list
          breedList.innerHTML = "";
  
          for (const breed in breeds) {
            if (breed.startsWith(selectedLetter)) {
                const li = document.createElement('li')
                li.textContent = breed 
                breedList.appendChild(li)
            }
          }
        });
      });
  });