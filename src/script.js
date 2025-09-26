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