import { useState } from "react"

export default function Usuario() {

    const [name, setName] = useState('@driven-aluno')
    const [foto, setFoto] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DCAdN8tADNbaWWmJ-Uu2imt-27pXoI_0544hFsCc9g&s')

    function changeFoto() {
        const newFoto = prompt('coloque o endereço URL da imagem')
        if (!newFoto) {
            setFoto(foto)
        } else {
            setFoto(newFoto)
        }
    }

    function changeName() {
        const newName = prompt('digite seu nome')
        if (!newName) {
            setName(name)
        } else {
            setName(newName)
        }
    }

    return (
        <div className="usuario">
            <img src={foto} alt="imagem de perfil" onClick={changeFoto} />
            <div className="texto">
                <span>
                    <strong>{name}</strong>
                    <ion-icon name="pencil-outline" onClick={changeName} ></ion-icon>
                </span>
            </div>
        </div>
    )
}