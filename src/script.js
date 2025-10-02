let lastScroll = 0;
const topbar = document.getElementById('topbar');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) { 
        // En üstteyken hepsi gözükür
        topbar.style.transform = 'translateY(0)';
        header.style.transform = 'translateY(0)';
    } else if (currentScroll > lastScroll) {
        // Aşağı kaydır -> gizle topbar + header
        topbar.style.transform = 'translateY(-100%)';
        header.style.transform = 'translateY(-100%)';
    } else {
        // Yukarı kaydır -> göster topbar + header
        topbar.style.transform = 'translateY(0)';
        header.style.transform = 'translateY(0)';
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