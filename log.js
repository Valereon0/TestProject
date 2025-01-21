const form = document.querySelector('form')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value


    const data = { email, password }

    try {
        const response = await fetch('http://localhost:6600/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            const responseData = await response.json()
            alert('Авторизация успешна: ' + JSON.stringify(responseData))
        } else {
            const errorData = await response.json()
            alert('Ошибка авторизации: ' + errorData.message)
        }
    } catch (error) {
        console.error('Ошибка:', error)
    }
})