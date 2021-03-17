

export const getRandomGames : () => {
    retry=-1;
    document.getElementById("alanId").innerHTML="Kediyi Bul:)"
    let index = Math.floor(Math.random()*questions.length);
    if(latestIndex === index) {
        index = (index+1)%questions.length;
    }
    const question = questions[index];
    latestIndex = index;
    displayQuestion(question)
}