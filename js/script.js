const icons = document.querySelectorAll('#icon');
const categorys = document.querySelectorAll('#category');
const scores = document.querySelectorAll('#score');

let listaJson = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/img/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/img/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/img/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/img/icon-visual.svg"
    }
]
  
listaJson.forEach((item, index) => {
    icons[index].src = item.icon;
    categorys[index].innerText = item.category;
    scores[index].innerText = item.score;
});