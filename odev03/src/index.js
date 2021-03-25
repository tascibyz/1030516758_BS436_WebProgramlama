import React from "react";
import ReactDOM from "react-dom";
import {getRandomGames} from "./games";


class App extends React.Component{

    render(){


        return(<div>Selam</div>)
    }

}
ReactDOM.render(<App/>Z,document.getElementById())


const questions = [
    {
        image_0: "https://img-s1.onedio.com/id-53c192b2aa1cf6461479f600/rev-0/w-900/h-1429/f-jpg/s-6c9f7b7dd740c85065a52e08589011fe691616d6.jpg",
        image_1: "https://img-s1.onedio.com/id-53c192b2aa1cf6461479f600/rev-0/w-900/h-1429/f-jpg/s-6c9f7b7dd740c85065a52e08589011fe691616d6.jpg",
        image_2: "https://i.pinimg.com/280x280_RS/9e/34/d5/9e34d57b5824d1e23f439b89d8a10242.jpg",
        indexOfRightAnswer: 2

    },
    {
        image_0: "https://i.pinimg.com/280x280_RS/9e/34/d5/9e34d57b5824d1e23f439b89d8a10242.jpg",
        image_1: "https://img-s1.onedio.com/id-53c192b2aa1cf6461479f600/rev-0/w-900/h-1429/f-jpg/s-6c9f7b7dd740c85065a52e08589011fe691616d6.jpg",
        image_2: "https://img-s1.onedio.com/id-53c192b2aa1cf6461479f600/rev-0/w-900/h-1429/f-jpg/s-6c9f7b7dd740c85065a52e08589011fe691616d6.jpg",
        indexOfRightAnswer: 0


    },
    {
        image_0: "https://img-s1.onedio.com/id-53c192b2aa1cf6461479f600/rev-0/w-900/h-1429/f-jpg/s-6c9f7b7dd740c85065a52e08589011fe691616d6.jpg",
        image_1: "https://i.pinimg.com/280x280_RS/9e/34/d5/9e34d57b5824d1e23f439b89d8a10242.jpg",
        image_2: "https://img-s1.onedio.com/id-53c192b2aa1cf6461479f600/rev-0/w-900/h-1429/f-jpg/s-6c9f7b7dd740c85065a52e08589011fe691616d6.jpg",
        indexOfRightAnswer: 1


    }
];

let catImg="https://i.pinimg.com/280x280_RS/9e/34/d5/9e34d57b5824d1e23f439b89d8a10242.jpg";
let dogImg="https://img-s1.onedio.com/id-53c192b2aa1cf6461479f600/rev-0/w-900/h-1429/f-jpg/s-6c9f7b7dd740c85065a52e08589011fe691616d6.jpg"
let latestIndex;
let retry=-1;
export const newQuestion = () => {

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

const displayQuestion = (question) => {
    const {  image_0,image_1,image_2,indexOfRightAnswer } = question;

//<img id="img1" class="kart" src="" onclick="">
    let html = "<h2 class='header'>Kedi Bulmaca</h2>\n";
    html += getAnswerTag( image_0,indexOfRightAnswer===0);
    html += getAnswerTag( image_1,indexOfRightAnswer===1);
    html += getAnswerTag( image_2,indexOfRightAnswer===2);

    const questionDiv = document.getElementById("questionDivId");
    questionDiv.innerHTML = html;

}

const getAnswerTag = (image, IsTrue) => {
    let onclick;

        onclick = "imgClick(this,"+IsTrue+")";
    const html = "<img class=\"kart\" src='https://www.tripodfoto.com/ProductImages/102222/big/yf-nice-272-x-11m-kagit-fon-purple-002-tripodfoto.jpg' onclick=\""+onclick+"\">"
    return html;
}
function imgClick(e,a){

    if(retry!==1){


    if(a){
        e.src=catImg;
        document.getElementById("alanId").innerHTML ="Kazandın. <span class=”link” onclick='newQuestion()'> Tekrar Oyna.</span>";
        retry=1;



    }else{
        if(retry===0){
              e.src=dogImg;
            retry+= 1;

            document.getElementById("alanId").innerHTML ="Kaybettin <span class=”link” onclick='newQuestion()'> Tekrar Oyna.</span>";
        }
        else {
            e.src=dogImg;

            document.getElementById("alanId").innerHTML = "Tekrar dene";
            retry+= 1;

        }
    } }

}
