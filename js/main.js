// Carrega o JSON do nível CL12 & CL13 e renderiza o card

document.addEventListener("DOMContentLoaded", () => {
  fetch("data/CL12_CL13.json")
    .then((response) => response.json())
    .then((data) => renderLevel(data))
    .catch((error) => console.error("Erro ao carregar o JSON:", error));
});

function renderLevel(level) {
  const main = document.querySelector("main");

  const card = document.createElement("section");
  card.style.backgroundColor = "var(--light-purple)";
  card.style.margin = "20px";
  card.style.padding = "20px";
  card.style.borderRadius = "12px";
  card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
  card.style.maxWidth = "800px";

  const title = document.createElement("h2");
  title.textContent = `${level.level} – ${level.title}`;
  title.style.color = "var(--core-purple)";
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = level.description;
  card.appendChild(desc);

  const topicsTitle = document.createElement("h3");
  topicsTitle.textContent = "Tópicos:";
  card.appendChild(topicsTitle);

  const topicsList = document.createElement("ul");
  level.topics.forEach((topic) => {
    const li = document.createElement("li");
    li.textContent = topic;
    topicsList.appendChild(li);
  });
  card.appendChild(topicsList);

  const platforms = document.createElement("p");
  platforms.innerHTML = `<strong>Plataformas:</strong> ${level.platforms
    .map((url) => `<a href="${url}" target="_blank">${url}</a>`)
    .join(" | ")}`;
  card.appendChild(platforms);

  main.appendChild(card);
}
