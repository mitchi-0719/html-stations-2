function displayList() {
  const pTags = document.querySelectorAll("p");
  const fruits = Array.from(pTags).map((pTag) => pTag.textContent.split(", "));

  const ul = document.createElement("ul");

  fruits.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    ul.appendChild(li);
  });
  const fruitsDiv = document.getElementById("fruits");

  fruitsDiv.innerHTML = "";
  fruitsDiv.appendChild(ul);
}
