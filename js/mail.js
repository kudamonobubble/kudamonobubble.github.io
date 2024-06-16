document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    var formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('success-message').style.display = 'block';
            // 可以在这里执行其他成功后的操作，例如重置表单
            // this.reset();
        } else {
            throw new Error('提交失败，请重试。');
        }
    })
    .catch(error => {
        console.error('Fetch错误:', error);
        alert(error.message);
    });
});