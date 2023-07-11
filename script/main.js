
let heroDesciption=document.querySelectorAll(".hero__content")


heroDesciption.forEach(a=>{
    let arryc=[]
    let desArry=[...a.innerHTML]
let myi=setInterval(() => {
    arryc.push(desArry.shift())
    a.innerHTML=arryc.join('')

    desArry.length==0? clearInterval(myi):''
}, 75);

}
    )


// Hi__me
let hiMe=document.querySelector('.Hi__me')
let aboutContent=document.querySelector('.about__content')
   
textToLetter(hiMe)
textToLetter(aboutContent)
textToLetter(document.querySelector('.get__me h1'))





// hero p 






// //////////////////////////////////////////////


// social icons sectoin 

let socialIcons=document.querySelectorAll(".social__ico")
let area=document.querySelector('.area')
let contactMe=document.querySelector('.contact__me')
let myLogo=document.querySelector('.mylogo')


let areatext=area.innerHTML
// console.log(socialIcons)

socialIcons.forEach(a=>a.addEventListener('mouseover',function () {
    area.innerHTML=`<span>${a.alt}</span>`
    // console.log()
        }
    )
)
socialIcons.forEach(a=>a.addEventListener('mouseout',function () {
    area.innerHTML=areatext
    
        }
    )
)
contactMe.addEventListener('mouseover',function () { 
    area.innerHTML=`<span>@habbasMOunir</span>`
})
contactMe.addEventListener('mouseout',function () {
    area.innerHTML=areatext
})
// //////////////////////////////////////////////



let headerdesktop= document.querySelector(".header--desktop")
let hero= document.querySelector(".hero")


// ?scroll
document.addEventListener('scroll', ()=>{
 

    if (skillLeng.getBoundingClientRect().y<=window.pageYOffset) {

        skillsActive()
    }else{
        skillsDesActive()
    }








}) 







// /////////// change p to r

let myPhoto=document.querySelector('.my__photo')
let resume=`<div class="resume__about resume--desktop">
<div class="about__general">
  <span>full name:mounir habbas</span>
  <span>Language: arab, English</span>
  <span>birth day:07/01/2003</span>
  <span>Address: setif, algeria</span>
</div>
<div class="about__job">
  <span>Work: Web react Developer</span>
  <span>Freelance: Available</span>
  <span>Email: <a href="mailto:Mounirawt@gmail.com">Mounirawt@gmail.com</a> </span>
  <span>phone: <a href="tel:+213542417526">+213542417526</a></span>

</div>
      
  </div>`
let about=`  <p class="about__content about--destop">
a creative and driven web devloper  with a passion for solving complex problems and building intuitive user experiences.  I work on a lot of complex websites, where I have honed my skills in JavaScript, React, and Node.js.
I am always on the lookout for new challenges and opportunities to grow, and I would love to be a part of a team that shares my passion for excellence and innovation. Let's connect and see how we can make amazing things happen! 
</p>  `
let i=0
myPhoto.addEventListener('mouseover',()=>{

    if (i%2==0) {
       let aboutContent2=document.querySelector('.about__content')
    aboutContent2.outerHTML=resume 
        
    }else{
let resumeAbout=document.querySelector('.resume__about')
    resumeAbout.outerHTML=about
    textToLetter(document.querySelector('.about__content'))
    
    }
    i++
})
// myPhoto.addEventListener('mouseout',()=>{
    

// })

// //////////////////////



function textToLetter(ele) {
    let Arry=[...ele.innerHTML]
    let ded=[]
    Arry.forEach(a=>ded.push(`<span>${a}</span>`))
    ele.innerHTML=ded.join('')
        }







      



let skillsMain={
    leng:{
    skills:[
        "html5",
        "css3",
        "JavaScript",
        "React",
        "typescript",
        "node_js"
    ],
        per:[
            "95",
            "90",
            "80",
            "65",
            "70",
            "50"
        ]
    },
    web:{
        skills:[
            "SEO",
            "Wordpress",
            "wix",
            "Figma",
            "Adobe_XD",
            "ILLUSTRATOR"
        ],
            per:[
                "80",
                "70",
                "50",
                "65",
                "70",
                "40"
            ]
        }
}

// let skills=
// [["html5","95%"],[ "css3","90%"]


// ]


  let skillLeng=document.querySelector(".skill--leng")
let skillWeb=document.querySelector(".skill--web")

skillsSet(skillLeng,skillWeb)


function skillsSet(leng,web) {
  
for (let i = 0; i < skillsMain.leng.skills.length; i++) {

    let skillL=skillsMain.leng.skills[i]
    let perL=skillsMain.leng.per[i]

    let skillW=skillsMain.web.skills[i]
    let perW=skillsMain.web.per[i]

    leng.innerHTML+= `<div class="progress__bar"> <div class="progress ${skillL}" per="${perL}"><span class="skill"> ${skillL}</span>   </div> <span class="pers">${perL} %</span> </div>`
    web.innerHTML+= `<div class="progress__bar"> <div class="progress  ${skillW}" per="${perW}"><span class="skill"> ${skillW} </span>  </div><span class="pers">${perW} %</span>  </div>`



    
 }
}

function skillsActive() {
    for (let i = 0; i <= skillsMain.leng.skills.length; i++) {
        let progress=document.querySelector(`.${skillsMain.leng.skills[i]}`);
        let per=progress.getAttribute('per');
            if(per>50)per-=5
    
        progress.style.width=`${per}%`
        progress.style.transition=`all 2s 0.1s`


        let progress1=document.querySelector(`.${skillsMain.web.skills[i]}`)
        let per1=progress1.getAttribute('per')
        per1>60?per1-=5:""
        progress1.style.width=`${per1}%`
        progress1.style.transition=`all 2s 0.1s`
    }


}
function skillsDesActive() {
        let allProgress=document.querySelectorAll(`.progress`)
        allProgress.forEach(
            a=>{
                a.style.width=`20%`
                a.style.transition=`all 0.01s 0.2s`
            }
        )
}





















let gallerycontent=[
    {
      id:1,
      title: "portfolio" ,
      state:"light",
      src: ["/portfolio/webp.jpeg"] ,
      tools:["html5","css3","js"],
      colors:["#B0D1D9","#4f6f73","#77A1A6","#2E3E40","#1F2526"]
    },
    {
      id:2,
      title: "loopsudios" ,
     
      state:"light",
      src: ["/loopstudios/loopstudios.jpeg" ],
      tools:["html5","css3","js"],
      colors:["#B0D1D9","#4f6f73","#77A1A6","#2E3E40","#1F2526"]
    },
    {
      id:3,
      title: "invoic" ,
      state:"light",

      src:["/invoic/invoic01.jpeg" ,"/invoic/invoic02.jpeg" ,"/invoic/invoic03.jpeg" ,"/invoic/invoic04.jpeg" ] ,
      tools:["html5","css3","js"],
      colors:["#B0D1D9","#4f6f73","#77A1A6","#2E3E40","#1F2526"]
    },
    {
      id:4,
      title: "wrapped green" ,

      state:"light",
      src: ["/wrappedGreen/wrappedGreen.jpeg"] ,
      tools:["html5","css3","js"],
      colors:["#B0D1D9","#4f6f73","#77A1A6","#2E3E40","#1F2526"]
    },
    {
      id:5,
      title: "bloger" ,
      state:"light",
      src: ["/bloger/bloger.jpeg"] ,
      tools:["html5","css3","js"],
      colors:["#B0D1D9","#4f6f73","#77A1A6","#2E3E40","#1F2526"]
    },
    {
      id:6,
      title: "QR code" ,
      number:1,
      state:"light",
      src: ["/qrcode/qrcode.jpeg"] ,
      tools:["html5","css3","js"],
      colors:["#B0D1D9","#4f6f73","#77A1A6","#2E3E40","#1F2526"]
    },
    {
      id:7,
      title: "quiz" ,
      number:1,      state:"light",
      src: ["/quiz/quiz.jpeg" ],
      tools:["html5","css3","js"],
      colors:["#B0D1D9","#4f6f73","#77A1A6","#2E3E40","#1F2526"]
    },
    {
        id:8,
      title: "Aloomic update" ,
      state:"dark",
      src: ["/aloomic/aloomic4.jpeg",
            "/aloomic/aloomic2.jpeg",
            "/aloomic/aloomic3.jpeg",
            "/aloomic/aloomic1.jpeg",
            ] ,
      tools:["html5","css3","js"],
      colors:["#B0D1D9","#4f6f73","#77A1A6","#2E3E40","#1F2526"]
     
    }

  ]



  let gallery=document.querySelector('.gallery')

  for (let i = 0; i < gallerycontent.length; i++) {


   
            gallery.innerHTML+= ` 
    <div class="work__card card--${gallerycontent[i].state}">
    <img src="./assets/images/work${gallerycontent[i].src[0]}" alt="" srcset="">
    <div class="card__desc"></div>
    <div class="card__detail">

        <div class="card__title">${gallerycontent[i].title}</div>
</div>
</div>`
    


 }

 let cardPopup=document.querySelector(".card__popup")
 let popupShadow=document.querySelector(".popup__shadow")
 let workCard=document.querySelectorAll(".work__card")
 let exit=document.querySelector(".exit")

 
 workCard.forEach((a,i)=>
     a.addEventListener("click",()=>{

        cardPopup.innerHTML=`
        <div class="show__room">
       
    </div>
    <div class="show__details">
        <div class="details__left">
           <div class="project__title">
             prject title : ${gallerycontent[i].title}
        </div>
        <div class="project__tools">
           tools:  js 
            css 
            react
        </div>
        </div>
        
        <div class="details__right">
       <a class="exit">
        exit
    </a>
    
    <a class="deemo">
        visit demo
    </a>    
    
     
      
    </div>
    </div>
        
        
        `
        let showRoom=document.querySelector(".show__room")
        for (let k = 0; k<gallerycontent[i].src.length;k++) {
            showRoom.innerHTML+=`    <img src="./assets/images/work${gallerycontent[i].src[k]}" alt="" srcset="">
        `

        }


         cardPopup.style.display="unset"
         popupShadow.style.display="unset"
         cardPopup.classList.remove('disactive')
     popupShadow.classList.remove('disactive')
     let exit=document.querySelector(".exit")
     exit.addEventListener('click',remove)
     })
     
     )
   
 
 
 
     function remove() {
          cardPopup.classList.add('disactive')
     popupShadow.classList.add('disactive')
     setTimeout(()=>{
        cardPopup.style.display="none"
        popupShadow.style.display="none"
    
     
     },400)
     }

     exit.addEventListener('click',remove)
     popupShadow.addEventListener('click',remove)
 document.addEventListener('scroll',remove) 