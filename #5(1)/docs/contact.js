document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert('感谢您的留言！我们会尽快回复您。');
        form.reset();
    });
});