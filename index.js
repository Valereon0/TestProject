const form = document.querySelector('form')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirm-password').value

    if (password !== confirmPassword) {
        alert('Пароли не совпадают')
        return
    }

    const data = { name, email, password }

    try {
        const response = await fetch('http://localhost:6600/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            const responseData = await response.json()
            alert('Регистрация успешна: ' + JSON.stringify(responseData))
        } else {
            const errorData = await response.json()
            alert('Ошибка регистрации: ' + errorData.message)
        }
    } catch (error) {
        console.error('Ошибка:', error)
    }
})



