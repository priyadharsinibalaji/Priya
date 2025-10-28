//   preloader
 
window.addEventListener("load", ()=>{
  const preloader=document.getElementById("preloader");
  const hero=document.getElementById("hero-wrapper");
  const navbar=document.getElementById("navbar-main");
  const menuBtn=document.getElementById("menu-btn");
  const navLinks=document.querySelectorAll("#navbar a");
  const typingEl=document.getElementById("typing");
  const h2=document.querySelectorAll("#name h2");
  const btn=document.getElementById("aboutbtn");
  const social=document.getElementById("menubar");
  const text="HI, I'M PRIYADHARSINI!";

  // Preloader animation
  setTimeout(()=>{
    preloader.classList.add("fade-out");
    hero.classList.add("visible");
    navbar.classList.add("visible");

    // Typing animation
    let i=0;
    const typingInterval=setInterval(()=>{
      typingEl.textContent+=text[i];
      i++;
      if(i>=text.length){
        clearInterval(typingInterval);
        setTimeout(()=>{h2.forEach(el=>{el.style.opacity=1;el.style.transform="translateY(0)";});},200);
        setTimeout(()=>{btn.style.opacity=1;btn.style.transform="translateY(0)";},500);
        setTimeout(()=>{social.style.opacity=1;social.style.transform="translateY(0)";},800);
      }
    },100);
  },1500);

  // Hamburger toggle
  menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("active");
    document.getElementById("navbar").classList.toggle("active");
  });

  // Close on link click + smooth scroll
  navLinks.forEach(link=>{
    link.addEventListener("click", e=>{
      e.preventDefault();
      const target=document.querySelector(link.getAttribute("href"));
      menuBtn.classList.remove("active");
      document.getElementById("navbar").classList.remove("active");
      if(target) target.scrollIntoView({behavior:"smooth"});
    });
  });
});


// Skill Script 

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Sequential animation for skill boxes
document.addEventListener("DOMContentLoaded", function() {
  const skillBoxes = document.querySelectorAll(".skill-box");
  
  // Function to check if element is in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  
  // Function to animate a single progress bar
  function animateBar(bar) {
    const target = parseInt(bar.getAttribute("data-percent"));
    const text = bar.nextElementSibling;
    let current = 0;
    
    function step() {
      if(current <= target){
        bar.style.width = current + "%";
        text.style.left = `calc(${current}% - 15px)`;
        text.textContent = current + "%";
        current++;
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }
  
  // Function to animate skill boxes one by one
  function animateSkillBoxes() {
    skillBoxes.forEach((box, index) => {
      if(!box.classList.contains("animated") && isInViewport(box)){
        box.classList.add("animated");
        
        // Get the delay from data attribute or calculate based on index
        const delay = parseInt(box.getAttribute("data-delay")) || index * 300;
        
        setTimeout(() => {
          // Animate the box appearance
          box.classList.add("animate-in");
          
          // Animate the progress bar after a short delay
          setTimeout(() => {
            const progress = box.querySelector(".progress");
            animateBar(progress);
          }, 300);
        }, delay);
      }
    });
  }
  
  // Event listeners
  window.addEventListener("scroll", animateSkillBoxes);
  window.addEventListener("resize", animateSkillBoxes);
  
  // Initial check
  animateSkillBoxes();
});

//    CURSOR SCRIPT 

    const ring = document.getElementById("ring");
    const dot = document.getElementById("dot");

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animate() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animate);
    }
    animate();

    const hoverables = document.querySelectorAll("a, button");
    hoverables.forEach(el => {
      el.addEventListener("mouseenter", () => ring.classList.add("hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
    });
 
// Footer Script
// SCROLL BUTTON SCRIPT 
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
