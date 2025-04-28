// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
const createCard = (name, link, deleteCard) => {
  const cardElement  = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement .querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => deleteCard(cardElement));
  cardElement.querySelector(".card__title").textContent = name;
  cardElement .querySelector(".card__image").src = link;
  return cardElement;
}

// @todo: Функция удаления карточки
const deleteCard = (cardElement) => cardElement.remove();

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => placesList.append(createCard(card.name, card.link, deleteCard)));