const titles = [
    "gorestars.lol",
    "private biolink",
    "brat",
    "gorestars",
    "Inclinarse ante la mano de Dios"
];

let index = 0;

function updateTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}

setInterval(updateTitle, 200);
