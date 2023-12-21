<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication Test</title>
</head>

<body>

    <!-- Đăng ký Form -->
    <h2>Đăng ký</h2>
    <form id="registerForm">
        <label for="registerName">Tên:</label>
        <input type="text" id="registerName" name="name" required>

        <label for="registerEmail">Email:</label>
        <input type="email" id="registerEmail" name="email" required>

        <label for="registerPassword">Password:</label>
        <input type="password" id="registerPassword" name="password" required>

        <button type="submit">Đăng ký</button>
    </form>

    <script>
        // Phương thức để xử lý sự kiện đăng ký
        document.getElementById("registerForm").addEventListener("submit", function (event) {
            event.preventDefault();
            let formData = new FormData(event.target);
            register(formData);
        });

        // Phương thức để xử lý sự kiện đăng ký
        function register(formData) {
            fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    localStorage.setItem('access_token', data.access_token);
                })
                .catch(error => console.error('Error:', error));
        }
    </script>

</body>

</html>
