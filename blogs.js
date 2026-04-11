async function loadData() {
  try {
    const response = await fetch('./site-content/blogs.json'); // Path to your file
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json(); // Parses JSON into a JS object
    console.log(data.length);

    function createBlogCard(id) {
      console.log("Reading at id: " + id);
      const cardData = data[id];

      const header = document.createElement('header');
      const headerH = document.createElement('h2');
      headerH.innerHTML = cardData['title'];
      const headerTime = document.createElement('time');
      headerTime.innerHTML = cardData['date'];
      headerTime.setAttribute('datetime', cardData['date']);
      header.appendChild(headerH);
      header.appendChild(headerTime);

      const img = document.createElement('img');
      img.src = cardData['represent'];
      img.alt = cardData['title'];

      const para = document.createElement('p');
      para.innerHTML = cardData['excerpt'];

      const card = document.createElement('article');
      card.classList.add('blog-card');
      card.dataset.id = id;
      card.appendChild(img);
      card.appendChild(header);
      card.appendChild(para);

      card.addEventListener("click", function () {
        blogPage = document.getElementsByClassName("blog-page")[0];
        blogPage.children[1].innerHTML = cardData['title'];
        blogPage.children[2].innerHTML = cardData['body'];
        blogPage.style.display = "block";

      });

      return card;
    }

    const section = document.getElementsByTagName("main")[0];
    for (var i=0; i<data.length; i++) {
      const card = createBlogCard(i);
      section.appendChild(card);
    }
    return data;

  } catch (error) {
    console.error('Error reading JSON:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const data = loadData();
  console.log("Content loaded");

  blogPage = document.getElementsByClassName("blog-page")[0];
  const vanishBtn = document.getElementById("close-button");

  vanishBtn.addEventListener("mouseover", function () {
    vanishBtn.style.opacity = 0.95;
  });
  vanishBtn.addEventListener("mouseout", function () {
    vanishBtn.style.opacity = 0.5;
  });
  vanishBtn.addEventListener("click", function () {
    blogPage.style.display = "none";
    vanishBtn.style.opacity = 0.95;
  });

  const cards = document.getElementsByClassName("blog-card");
  console.log("Executing loop");

  for (let i=0; i<cards.length; i++) {
    cards[i].addEventListener("click", function () {
      cards[i].children[1].innerHTML = data[i]['title'];
      cards[i].children[2].innerHTML = data[i]['body'];
      cards[i].style.display = "block";

    });

  }

});
