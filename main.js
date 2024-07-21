let cards = [];
let editIndex = -1;

document.getElementById("save-button").addEventListener("click", saveCard);
document.getElementById("cancel-button").addEventListener("click", clearForm);

function saveCard() {
  let title = document.getElementById("title").value;
  let autor = document.getElementById("autor").value;
  let description = document.getElementById("description").value;

  if (title === "" || autor === "" || description === "") {
    alert("Por favor, complete todos los campos");
    return;
  }

  let card = { title, autor, description };

  if (editIndex === -1) {
    // Add new card
    cards.push(card);
  } else {
    // Edit exist card
    cards[editIndex] = card;
    editIndex = -1;
  }

  renderCards();
  clearForm();
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("description").value = "";
  editIndex = -1;
}

function renderCards() {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  cards.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.autor}</p>
            <p>${card.description}</p>
            <button onclick="editCard(${index})">Editar</button>
            <button onclick="deleteCard(${index})">Eliminar</button>
        `;
    container.appendChild(cardDiv);
  });
}

function editCard(index) {
  const card = cards[index];
  document.getElementById("title").value = card.title;
  document.getElementById("autor").value = card.autor;
  document.getElementById("description").value = card.description;
  editIndex = index;
}

function deleteCard(index) {
  cards.splice(index, 1);
  //The first parameter (index) defines the position where new elements should be added (spliced in).
  //The second parameter (1) defines how many elements should be removed.
  renderCards();
}
