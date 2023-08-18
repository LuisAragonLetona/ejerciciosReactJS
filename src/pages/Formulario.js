import React, { useRef, useState } from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [datosEnviados, setDatosEnviados] = useState(false);
    const [errores, setErrores] = useState({});
    const nombreInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const erroresValidacion = validarCampos();
        if (Object.keys(erroresValidacion).length === 0) {
            setDatosEnviados(true);
        } else {
            setErrores(erroresValidacion);
        }
    }

    const validarCampos = () => {
        const erroresValidacion = {};
        if (!nombre) {
            erroresValidacion.nombre = 'El campo nombre es obligatorio';
        }
        if (!email) {
            erroresValidacion.email = 'El campo email es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            erroresValidacion.email = 'El email ingresado no es válido';
        }
        if (!password) {
            erroresValidacion.password = 'El campo contraseña es obligatorio';
        } else if (password.length < 8) {
            erroresValidacion.password = 'La contraseña debe tener al menos 8 caracteres';
        }
        return erroresValidacion;
    }

    const handleRegresarFormulario = () => {
        setDatosEnviados(false);
        setNombre('');
        setEmail('');
        setPassword('');
        setErrores({});
        setTimeout(() => nombreInputRef.current.focus(), 0);
    }

    return (
        <div className="container">
            {!datosEnviados ? (
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            ref={nombreInputRef}
                        />
                        {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className={`form-control ${errores.email ? 'is-invalid' : ''}`}
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errores.email && <div className="invalid-feedback">{errores.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className={`form-control ${errores.password ? 'is-invalid' : ''}`}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errores.password && <div className="invalid-feedback">{errores.password}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            ) : (
                <div>
                    <h2>Datos ingresados:</h2>
                    <p>Nombre: {nombre}</p>
                    <p>Email: {email}</p>
                    <p>Contraseña: {password}</p>
                    <button className="btn btn-secondary mt-3" onClick={handleRegresarFormulario}>Regresar al formulario</button>
                </div>
            )}
        </div>
    );
}

export default Formulario;