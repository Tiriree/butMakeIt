// let socket = io();
// Original Excersise:
// https://2023.software-for-people.net/random.html
// Takes input form websocket and triggers but make it
// Input is coming from hardwared boards here: http://hardwaremovement.com:1880/

let subject=["Performance","Improvisation","Wallmart","Dirt","Love","Patience","Tokyo","Paris","Gucci","Wikipedia","New York Times","USPS","Craigslist","ESPN","Twitter","LinkedIn","CNN","Etsy","Britannica","Github","Crypto.com"]
// let subject=["Taylor Swift","Barrett Wilbert Weed","Anyma","Gorillaz","Philadelphia sports teams","game of thrones","Inside Job","Breaking Bad","Brooklyn nine-nine","Severance","fast and furious","Home Alone","Made in Abyss","Puss In Boots","The Harry Potter","The Harry Potter","Blade Runner 2049","weekend","Ad for Blank Street croissant","Ad for 7th street burger","Saxophone","sanrio characters","Drake","Kendrick Lamar","Adele","Mikey Madison","Before sunrise","Shrinking","going on walks","fast and furious"]
let description =["for grandma","funny","The Kardashians","luxury","edible","real","to go","yesterday","ok","interesting","forever","naive","savage","average",'soft', 'fashion', 'organic', 'old-timey', 'patriotic', 'punk', 'less commercial', 'emo', 'swiss modern', 'grunge', '90s', 'maximalist', 'sci-fi', 'for children', 'goth', 'hippie', 'psychedelic', '80s', '70s', 'steampunk', 'old-fashioned', 'victorian', 'elegant', 'crunchy', 'futuristic', 'for grandma', 'nostalgic', 'wackadoodle', 'crafty', 'minimal', 'wikipedia'] 
// let description =["for grandma","funny","The Kardashians","luxury","edible","real","yesterday","forever","naive","savage",'The Kardashians', 'old-timey', 'emo', 'punk', 'less commercial', 'emo', 'modern', 'grunge', '90s', 'maximalist', 'sci-fi', 'for children', 'goth', 'hippie', 'psychedelic', '80s', '70s', 'old-fashioned', 'emo', 'elegant', 'crunchy', 'futuristic', 'for grandma', 'nostalgic', 'crafty', 'minimal', 'wikipedia','apple'] 


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER,CENTER)
  fill(0);
  textSize(height/12)
  butMakeIt();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// socket.on("relay", (msg) => {
//   if(msg.type=="butmakeit"){
//     butMakeIt();
//   }
// });

function butMakeIt(){
  clear();
  let sentence=random(subject)+" but make it "+random(description)+".";
  text(sentence,width/2,height/2)
}

function mousePressed(){
  butMakeIt();
}