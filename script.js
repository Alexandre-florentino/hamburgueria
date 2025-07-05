document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.classList.contains('order-btn')) return;
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    const orderForm = document.getElementById('order-form');
    const orderModal = document.getElementById('order-modal');
    const closeModal = document.querySelector('.close-modal');
    const closeBtn = document.getElementById('close-btn');
    const orderDetails = document.getElementById('order-details');
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const item = document.getElementById('item').value;
            const quantity = document.getElementById('quantity').value;
            const notes = document.getElementById('notes').value;
            
            let summary = `Obrigado, ${name}!<br><br>`;
            summary += `Você pediu ${quantity}x ${item}.<br>`;
            if (notes) {
                summary += `Observações: ${notes}<br>`;
            }
            summary += `Entraremos em contato no telefone ${phone} para confirmar.`;
            
            orderDetails.innerHTML = summary;
            orderModal.style.display = 'flex';
            
            
            this.reset();
        });
    }
    function closeOrderModal() {
        orderModal.style.display = 'none';
    }
    
    if (closeModal) closeModal.addEventListener('click', closeOrderModal);
    if (closeBtn) closeBtn.addEventListener('click', closeOrderModal);
    
    orderModal.addEventListener('click', function(e) {
        if (e.target === orderModal) {
            closeOrderModal();
        }
    });

    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', function() {
            const item = this.getAttribute('data-item');
            document.getElementById('item').value = item;
            
            window.scrollTo({
                top: document.getElementById('contact').offsetTop - 80,
                behavior: 'smooth'
            });
        
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    function checkScroll() {
        const elements = document.querySelectorAll('.animate-slide, .animate-fade');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.animationPlayState = 'running';
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
});