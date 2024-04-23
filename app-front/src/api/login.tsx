export const fetcLogin = async () => {
    const response = await fetch ('https://3570-38-56-113-35.ngrok-free.app/api/v1/users/user/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({ email: 'new@new.com', password: 'new'
    })
    })
    const data = await response.json()

    return data
}
