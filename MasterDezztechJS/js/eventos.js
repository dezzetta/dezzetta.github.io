function botonTop(){
    const botonScroll = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function () {

        if(window.scrollY > 500){
          botonScroll.style.display = 'block';
        } else {
          botonScroll.style.display  = 'none';
        }
    });
    botonScroll.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }
  botonTop();