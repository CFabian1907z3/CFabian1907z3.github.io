// Efecto de scroll suave cuando se hace clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) { // Verificar que la sección objetivo exista
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de fade-in en las secciones al hacer scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', function() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 150;
        if (sectionTop < triggerPoint) {
            section.classList.add('fade-in');
        }
    });
});

// Botón "scroll to top"
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'; // Asegúrate de que Font Awesome esté cargado si usas el ícono
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

// Estilo básico para el botón (puedes mover esto a tu archivo CSS)
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '20px';
scrollTopBtn.style.right = '20px';
scrollTopBtn.style.display = 'none'; // Ocultar por defecto
scrollTopBtn.style.zIndex = '1000'; // Asegúrate de que esté por encima de otros elementos
scrollTopBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
scrollTopBtn.style.color = '#fff';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.borderRadius = '50%';
scrollTopBtn.style.padding = '10px';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.transition = 'opacity 0.3s';

// Muestra el botón al hacer scroll
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block'; // Muestra el botón
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.style.display = 'none'; // Oculta el botón
        scrollTopBtn.classList.remove('visible');
    }
});

// Evento para el botón "scroll to top"
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    (function(){
        const titleQuestions = [...document.querySelectorAll('.questions__title')];
        console.log(titleQuestions)
    
        titleQuestions.forEach(question =>{
            question.addEventListener('click', ()=>{
                let height = 0;
                let answer = question.nextElementSibling;
                let addPadding = question.parentElement.parentElement;
    
                addPadding.classList.toggle('questions__padding--add');
                question.children[0].classList.toggle('questions__arrow--rotate');
    
                if(answer.clientHeight === 0){
                    height = answer.scrollHeight;
                }
    
                answer.style.height = `${height}px`;
            });
        });
    })();
});