


// function getFullscreen() {
//     return document.fullscreenElement
//     ||document.webkitFullscreenElement
//     ||document.mozFullscreenElement
//     ||document.nsFullscreenElement
// }


// setTimeout(() => {
//     document.documentElement.requestFullscreen().catch(console.log)
// console.log(100)
// }, 3000);
// document.addEventListener("dblclick",function (){ 
//     if (getFullscreen()) {
//         document.exitFullscreen()
//     }else{
//             document.documentElement.requestFullscreen().catch(console.log)
//             console.log(12)

//     }

// })






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


// /////////////////////////////////////////////

// nav--humburger

// let navHumburger=document.querySelector(".nav--humburger")
// let nav= document.querySelectorAll(".nav")

// navHumburger.addEventListener("click",function (){ 
//     navHumburger.classList.toggle("humburger--active");
//     nav.forEach(a=>a.classList.toggle("active"))
    
//     // headerMobile.classList.toggle("hidden");
//  }
//  )
//  nav.forEach(a=>a.addEventListener("click",function (){ 
//    setTimeout(()=>{
//     navHumburger.classList.toggle("humburger--active");
//     nav.forEach(a=>a.classList.toggle("active"))
// },200)
    
    
//     // headerMobile.classList.toggle("hidden");
//  }
//  ))
//  document.addEventListener('scroll', ()=>{
//     navHumburger.classList.remove("humburger--active");
//     nav.forEach(a=>a.classList.remove("active"))
//  })

// ///////////////////////////////////////////








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










