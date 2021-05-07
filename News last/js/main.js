    //check ie there a local storage color option

           let maincolors = localStorage.getItem('color-option');
           if ( maincolors != null){
           document.documentElement.style.setProperty('--main--color', localStorage.getItem('color-option' ));

           
      // check for class  active Colors All  Colors List Item 
           
              document.querySelectorAll(".colors-list li").forEach(Element => {
              Element.classList.remove("active") ;

              
      //add active class on element with data color list item  ===local storage item
                  
              if ( Element.dataset.color === maincolors){
                  // add active class
                  Element.classList.add("active"); 
              }
            });
          }


      // random background option

             let BackgroundOption = true ;


     //  Variable to control the interval
            let BackgroundInterval ;

     // check if there a  local storage random background item

            let backgroundLocalItem = localStorage.getItem("background-option");

     // check if random background  local storage is not emmpty
           if (backgroundLocalItem !== null){
                              console.log(backgroundLocalItem);
                               console.log(typeof(backgroundLocalItem));
                      if (backgroundLocalItem === true){
                          BackgroundOption =true;
                      }else{
                         BackgroundOption = false ; 
                      }
      //remove active from all spans 
            document.querySelectorAll(".random-backgrounds span").forEach(element => {
             element.classList.remove("active");   
            });
            if( backgroundLocalItem =true){
              document.querySelector(".random-backgrounds .yes").classList.add("active");
               }else{
                  document.querySelector(".random-backgrounds .no").classList.add("active");   
               }
}
        // for setting box 
              document.querySelector(".toggle-setting .fa-gear").onclick = function () {
                  
        //class fa-spin for rotation on self
            this.classList.toggle("fa-spin");
                  
         //toggle class open on main setting box
              document.querySelector(".setting-box").classList.toggle("open"); 
             };

        //switch color
               const ColorsLi = document.querySelectorAll(".colors-list li");
                ColorsLi.forEach(li => {
                li.addEventListener("click" , (e) => {
          //set color on root
                  document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
          // set color on local storage 
                 localStorage.setItem('color-option',e.target.dataset.color );
                handelActive(e);
                               }) ; 
           });
            //chang backgroundة
            let landpage =document.querySelector(".landing-page");
        //مصفوفة الصور 
            let  imgsarr =['imgs/11.jpg' ,'imgs/22.jpg' , 'imgs/33.jpeg'  ,'imgs/44.jpg','imgs/55.jpg' ];
         //random number

            setInterval(()=> {
            let rand = Math.floor(Math.random() * imgsarr.length );
            landpage.style.backgroundImage='url('+imgsarr[rand]+')';
            } ,2000  );

        //switch random backgrounds  option
             const RandomBackEl = document.querySelectorAll(".random-backgrounds span");
        //loop for all span
              RandomBackEl.forEach(span => {
        //click on every span 
            span.addEventListener("click" , (e) => {
            
            handelActive(e); 
                
                  if(e.target.dataset.background === 'yes') {
                  BackgroundOption  = true;
                   randomizeImgs();
                   console.log(BackgroundOption);
                      localStorage.setItem("background-option", true) ;
                    } else  { 
                         BackgroundOption = false; 
                           clearInterval(  BackgroundInterval ); 
                            console.log(BackgroundOption);
                         localStorage.setItem("background-option", false) ;
                     }
                  }) ; 
        });

    // fuction to randomize imgs
         function randomizeImgs() {
           if( BackgroundOption === true) {
           BackgroundInterval =  setInterval(()=> {
               
     // random number
        let rand = Math.floor(Math.random() * imgsarr.length );
        landpage.style.backgroundImage='url('+imgsarr[rand]+')';
        } ,1000  );
           }
       }
    randomizeImgs();

     //select skills selectors
        let ourSkills =document.querySelector(".skills");
          window.onscroll = function () {
              
     //skills offset top 
            let skillsOffsetTop  = ourSkills.offsetTop;
              
     //outer hight
             let skillsOuterHeight  = ourSkills.offsetHeight;
              
     //window hight
             let windowHight =this.innerHeight;
              
              
     //window scroll top 
           let windowScrollTop = this.pageYOffset ;
          if( windowScrollTop > (  skillsOffsetTop + skillsOuterHeight - windowHight )){
             let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
              allSkills.forEach( skill => {
                  skill.style.width = skill.dataset.progress;
              });
               }
        };

    //Creat popup with the image
        let ourGallary = document.querySelectorAll(".gallary img");
        ourGallary.forEach(img => {
          img.addEventListener('click' , (e) => {
              
     // creat over lay element
      let overlay = document.createElement("div");
              
      //add class to over lay 
      overlay.className= 'popup-overlay';
              
      //append overlay to thr body 
      document.body.appendChild(overlay);
              
      //creat popup box
      let popupBox = document.createElement("div");
              
      //add class to popup box
      popupBox.className= "popup-box";
      if(img.alt !== null){
          
          //Creat head
          let imgHeading = document.createElement ("h3");
          
          //creat text for heading 
          let imgText  = document.createTextNode(img.alt);
          
           //append the text to heading
          imgHeading.appendChild(imgText);
          
          //append the heading to the popup box
          popupBox.appendChild(imgHeading);
      }
              
      //creat the image 
      let popupImage  = document.createElement("img");
              
      //set image src
      popupImage.src = img.src ;
              
      //ADD image to popup box
      popupBox.appendChild(popupImage);
              
      //add popup box to thr body 
      document.body.appendChild(popupBox);
              
      //Creat close span
      let closeButton = document.createElement("span");
              
      //Creat the close button text
     let  closeButtonText = document.createTextNode("X");
              
      //append text to close button 
      closeButton.appendChild(closeButtonText);
              
      //add class to close button 
      closeButton.className = 'close-button';
              
      //add close button to the popup box
              popupBox.appendChild(closeButton);
          });  
        });


        //close popup 
        document.addEventListener("click" , function(e){
            if(e.target.className== 'close-button'){
                
       //remove the current popup 
        e.target.parentNode.remove();
        
        
        //remove overlay
        document.querySelector(".popup-overlay").remove();
               }
        });



        //select All Bullets
         const allBullets = document.querySelectorAll(".nav-bullets .bullet");

        //select Alllinks
        const allLinks = document.querySelectorAll(".link a");



            function scrollToSomeWhere (elements){

               elements.forEach (ele => {

                  ele.addEventListener("click" , (e) => {
                         e.preventDefault();
                         document.querySelector(e.target.dataset.section).scrollIntoView({
                            behavior: 'smooth'
                      });
                  });
                });
            }
                scrollToSomeWhere(allBullets);
                scrollToSomeWhere(allLinks); 


            function handelActive (ev){
                 //Remove active fromm all children 
                            ev.target.parentElement.querySelectorAll(".active").forEach(Element => {
                            Element.classList.remove("active") ;
                            });
                
                     //add active on self
                     ev.target.classList.add("active");
            }


            let bulletSpan = document.querySelectorAll(".bullets-option span");
            let bulletsContainer = document.querySelector(".nav-bullets");
            let bulletLocalItem = localStorage.getItem("bullets-item");

            if ( bulletLocalItem !== null){
              bulletSpan.forEach(span => {
                 span.classList.remove("active");

              });
                if(bulletLocalItem === 'block'){
                     bulletsContainer.style.display='block'; 
                    document.querySelector(".bullets-option .yes").classList.add("active");

                   }else {
                     bulletsContainer.style.display='none'; 
                     document.querySelector(".bullets-option .no").classList.add("active");

                   }
            }

            bulletSpan.forEach(span => {
               span.addEventListener("click" , (e) =>{
                   if(span.dataset.display ==='show') {
                       bulletsContainer.style.display='block';
                       localStorage.setItem("bullets-option",'block');
                   }else {
                      bulletsContainer.style.display='none'; 
                       localStorage.setItem("bullets-option",'none');
                   }
                   handelActive(e);
               }) 
            });


       //reset button 

          document.querySelector(".reset-options").onclick = function () {
           
       // localStorage.clear();
            localStorage.removeItem("bullets-option");
            localStorage.removeItem("color-option");
            localStorage.removeItem("background-option");
            window.location.reload();
        }

        //toggle menu 

        let toggleBtn = document.querySelector(".toggle-menu");
        let tlinks = document.querySelector(".link");
        toggleBtn.onclick = function (e){
        //Stop Propagation 
        e.stopPropagation();

        //toggle class "menu-active" on button
        this.classList.toggle("menu-active");

        //toggle class "open" on links
       tlinks.classList.toggle("open");
        };

        //click any where outside menu  and toggle button 
        document.addEventListener( "click" , (e) =>{

      if (e.target !== toggleBtn && e.target !== tlinks )  {
          
          //check if menu is open 
          if ( tlinks.classList.contains("open")) {
              
         //toggle class "menu-active" on button
               toggleBtn.classList.toggle("menu-active");

         //toggle class "open" on links
               tlinks.classList.toggle("open");
              }

      } 
    });


        //Stop propagation on menu 

        tlinks.onclick = function (e) {
            e.stopPropagation();
        }

