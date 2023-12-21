<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication Test</title>
</head>

<body>

    <!-- Đăng nhập Form -->
    <h2>Đăng nhập</h2>
    <form id="loginForm">
        <label for="loginEmail">Email:</label>
        <input type="email" id="loginEmail" name="email" required>

        <label for="loginPassword">Password:</label>
        <input type="password" id="loginPassword" name="password" required>

        <button type="submit">Đăng nhập</button>
    </form>

    

    <!-- Đăng xuất Button -->
    <button onclick="logout()">Đăng xuất</button>

    <script>
        // Phương thức để xử lý sự kiện đăng nhập
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let formData = new FormData(event.target);
            login(formData);
        });

        

        // Phương thức để xử lý sự kiện đăng xuất
        function logout() {
            fetch('/api/logout', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    localStorage.removeItem('access_token');
                })
                .catch(error => console.error('Error:', error));
        }

        // Phương thức để xử lý sự kiện đăng nhập
        function login(formData) {
            fetch('/api/login', {
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
