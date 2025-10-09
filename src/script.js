let lastScroll = 0;
const topbar = document.getElementById('topbar');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (topbar && header) {
        if (currentScroll <= 0) { 
            topbar.style.transform = 'translateY(0)';
            header.style.transform = 'translateY(0)';
        } else if (currentScroll > lastScroll) {
            topbar.style.transform = 'translateY(-100%)';
            header.style.transform = 'translateY(-100%)';
        } else {
            topbar.style.transform = 'translateY(0)';
            header.style.transform = 'translateY(0)';
        }
    }

    lastScroll = currentScroll;
});


const navbarList = document.getElementById('products-navbar-list');
if(navbarList){
  navbarList.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', function(e){
      e.preventDefault();
      navbarList.querySelectorAll('li').forEach(item => {
        item.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
}

document.querySelectorAll('.favorite-icon').forEach(function(icon){
  icon.addEventListener('click', function(){
    if(this.classList.contains('fa-regular')){
      this.classList.remove('fa-regular');
      this.classList.add('fa-solid');
      this.style.color = 'var(--fish-red)';
    } else {
      this.classList.remove('fa-solid');
      this.classList.add('fa-regular');
      this.style.color = '';
    }
  });
});

document.querySelectorAll('.opencart-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    const icon = btn.querySelector('i');
    if(icon.classList.contains('fa-opencart')){
      icon.classList.remove('fa-opencart','fa-brands');
      icon.classList.add('fa-check','fa-solid','animate-bounce');
      icon.style.color = 'var(--fish-green)';
      setTimeout(function(){
        icon.classList.remove('animate-bounce');
      }, 600);
    } else {
      icon.classList.remove('fa-check','fa-solid');
      icon.classList.add('fa-opencart','fa-brands');
      icon.style.color = '';
    }
  });
});

document.querySelectorAll('.specials-btn').forEach(function(btn){
  btn.addEventListener('mouseenter', function(){
    btn.querySelector('.specials-btn-bg').style.width = '100%';
  });
  btn.addEventListener('mouseleave', function(){
    btn.querySelector('.specials-btn-bg').style.width = '0';
  });
});

// Inject a favorite (star) button into each recipe-card and wire up toggle behavior
document.querySelectorAll('.recipe-card').forEach(function(card){
  // create button
  const btn = document.createElement('button');
  btn.className = 'recipe-fav-btn';
  btn.type = 'button';
  btn.setAttribute('aria-pressed','false');
  btn.setAttribute('aria-label','Favorilere ekle');
  // use FontAwesome empty star by default
  btn.innerHTML = '<i class="fa-regular fa-star"></i>';
  // prepend to card so it's on top-left
  card.appendChild(btn);

  function toggleFav(){
    const icon = btn.querySelector('i');
    const isActive = btn.classList.toggle('active');
    if(isActive){
      // filled star
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
      btn.setAttribute('aria-pressed','true');
      btn.setAttribute('aria-label','Favorilerden çıkar');
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
      btn.setAttribute('aria-pressed','false');
      btn.setAttribute('aria-label','Favorilere ekle');
      // remove focus so an empty star will hide immediately when mouse leaves
      try { btn.blur(); } catch(e) {}
    }
  }

  btn.addEventListener('click', function(e){
    e.stopPropagation();
    toggleFav();
  });

  // keyboard accessibility: toggle on Enter / Space
  btn.addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      toggleFav();
    }
  });
});