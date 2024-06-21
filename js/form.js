document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = this;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            window.location.href = 'end.html';
        } else {
            alert('提交失敗，請稍後再試。');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('提交失敗，請稍後再試。');
    });
});