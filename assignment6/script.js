
// let emojis=[
//     {
//         "slug": "grinning-face",
//         "character": "\ud83d\ude00",
//         "unicodeName": "grinning face",
//         "codePoint": "1F600",
//         "group": "smileys-emotion",
//         "subGroup": "face-smiling"
//     },
//     {
//         "slug": "grinning-face-with-big-eyes",
//         "character": "\ud83d\ude03",
//         "unicodeName": "grinning face with big eyes",
//         "codePoint": "1F603",
//         "group": "smileys-emotion",
//         "subGroup": "face-smiling"
//     },
//     {
//         "slug": "grinning-face-with-smiling-eyes",
//         "character": "\ud83d\ude04",
//         "unicodeName": "grinning face with smiling eyes",
//         "codePoint": "1F604",
//         "group": "smileys-emotion",
//         "subGroup": "face-smiling"
//     },
//     {
//         "slug": "beaming-face-with-smiling-eyes",
//         "character": "\ud83d\ude01",
//         "unicodeName": "beaming face with smiling eyes",
//         "codePoint": "1F601",
//         "group": "smileys-emotion",
//         "subGroup": "face-smiling"
//     },
//     {
//         "slug": "grinning-squinting-face",
//         "character": "\ud83d\ude06",
//         "unicodeName": "grinning squinting face",
//         "codePoint": "1F606",
//         "group": "smileys-emotion",
//         "subGroup": "face-smiling"
//     }
// ]

//https://emoji-api.com/emojis?access_key=9e4224abe319ab6dc4e53b0714e8fc5d588c2b92
let h2=document.querySelector("h2");
button=document.querySelector("button");
button.style.display="none";
dropDown=document.querySelector("select");
let emojis=[];

async function getData(){
    const response= await fetch("https://emoji-api.com/emojis?access_key=9e4224abe319ab6dc4e53b0714e8fc5d588c2b92")
    const data= await response.json()
    
    return data;
}

(async ()=>{
    emojis=await getData();
    console.log(emojis)
    button.style.display="block";
    emojis.map((emoji)=>{
        let option=document.createElement("option");
        option.value=emoji.unicodeName;
        option.innerHTML=`${emoji.unicodeName}`;
        dropDown.appendChild(option);
    })
})();


dropDown.addEventListener("change",function()
{
    let selectedEmoji=dropDown.value;
    emojis.map((emoji)=>{
        if(selectedEmoji==emoji.unicodeName){
            h2.innerHTML=`${emoji.character} `;
        }
    })
})


button.addEventListener("click",function()
{
   
    index=Math.floor(Math.random()*emojis.length);
    h2.innerHTML=`${emojis[index]?.character} `;
})
