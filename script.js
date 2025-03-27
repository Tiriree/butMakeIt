// Original Excersise:
// https://2023.software-for-people.net/random.html

let subject=["SSense","Wallmart","Dirt","Love","Tokyo","Paris","Gucci","Wikipedia","New York Times","USPS","Craigslist","ESPN","Twitter","LinkedIn","CNN","Etsy","Britannica","Github","Crypto.com","SSense"]
let description =["for grandma","funny","The Kardashians","luxury","edible","real","to go","yesterday","ok","interesting","forever","naive","savage","average",'soft', 'fashion', 'organic', 'old-timey', 'patriotic', 'punk', 'less commercial', 'emo', 'swiss modern', 'grunge', '90s', 'maximalist', 'sci-fi', 'for children', 'goth', 'hippie', 'psychedelic', '80s', '70s', 'steampunk', 'old-fashioned', 'victorian', 'elegant', 'crunchy', 'futuristic', 'for grandma', 'nostalgic', 'wackadoodle', 'crafty', 'minimal', 'wikipedia'] 



function butMakeIt(){
    let random_subject= subject[Math.floor(Math.random()*subject.length)];
    let random_description= description[Math.floor(Math.random()*description.length)];
    // let sentence=random_subject+" but make it "+random_description+".";
    // console.log(sentence);
    // document.getElementById('message').textContent = sentence;
    document.getElementById('message').innerHTML = '<span class="subject">'+random_subject+'</span> but make it <span class="description">'+random_description+'</span>.';

}

