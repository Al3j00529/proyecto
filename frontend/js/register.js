document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const id_rol = document.getElementById('id_rol').value;

    const res = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ nombre, correo, contraseña, id_rol }),
    });
    const data = await res.json();
    alert(data.message);
    if(req.status === 201) window.location.href = './login.html';
});