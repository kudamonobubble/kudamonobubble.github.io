document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單默認提交

    const form = event.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/xrgnnory', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset();
            document.getElementById('response-message').style.display = 'block';
            // 在這裡進行重定向
            window.location.href = "end.html";
        } else {
            return response.json().then(data => {
                if (Object.hasOwnProperty.call(data, 'errors')) {
                    alert(data.errors.map(error => error.message).join(", "));
                } else {
                    alert('Oops! There was a problem submitting your form');
                }
            });
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form');
    });
});
