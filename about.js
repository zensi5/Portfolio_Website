window.addEventListener("scroll",progressAll);

function progressAll(){
    const triggerProgress = window.innerHeight/2;
   //  console.log(triggerProgress)
    const progressTop = document.getElementById("techskills");
    const progressStart = progressTop.getBoundingClientRect().top;
   // console.log(progressTop)

    if(progressStart<triggerProgress){
            // html
            const progress = document.getElementById("progressdonehtml");
            progress.style.width = progress.getAttribute("data-done");
            progress.style.opacity = 1;    

         // css
         const progresscss = document.getElementById("progressdonecss");
         progresscss.style.width = progresscss.getAttribute("data-done");
         progresscss.style.opacity = 1;    

         // BOOTSTRAP

            const progressBootstrap = document.getElementById("progressdonebootstrap");
            progressBootstrap.style.width = progressBootstrap.getAttribute("data-done");
            progressBootstrap.style.opacity = 1;

            // JAVASCRIPT

            const progressJavscript = document.getElementById("progressdonejs");
            progressJavscript.style.width = progressJavscript.getAttribute("data-done");
            progressJavscript.style.opacity = 1;

            // REACT

            const progressReact = document.getElementById("progressdonereactjs");
            progressReact.style.width = progressReact.getAttribute("data-done");
            progressReact.style.opacity = 1;

            // REACT

            const progressAngular = document.getElementById("progressdoneangularjs");
            progressAngular.style.width = progressAngular.getAttribute("data-done");
            progressAngular.style.opacity = 1;
         }
}

// increment counter
const counters = document.querySelectorAll(".counter1");
counters.forEach(function (counter) {
  counter.innerText = "20";
  updatecounter();

  function updatecounter() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 1000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 100);
    } else {
      counter.innerText = target;
    }
  }
});