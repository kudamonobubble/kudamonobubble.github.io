document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    var email = document.getElementById('email').value;
    var data = { email: email };

    fetch('YOUR_ZAPIER_WEBHOOK_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('success-message').style.display = 'block';
        } else {
            response.text().then(text => {
                console.error('Response not OK:', text);
                alert('提交失败，请重试。');
            });
        }
    })
    .catch(error => {
        console.error('Fetch错误:', error);
        alert('提交失败，请重试。');
    });
});
