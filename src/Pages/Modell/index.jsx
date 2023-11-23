
import './card.css'
import logo from "../../assets/Cars.jpg"
import carro2 from "../../assets/descarga.jpg"
import carro3 from "../../assets/carrotres.avif"
import carro4 from "../../assets/carro4.avif"
import carro5 from "../../assets/carro5.avif"
import carro6 from "../../assets/carro6.avif"

function Album() {
    return (
        <>
            Aston Martin modelo 1999

            <br>
            </br>
            <br></br>
            <div>

                <img src={carro5} />
                Maserati MC20
                El MC20 es un superdeportivo muy especial por su equilibrio general y la satisfacción que produce a la hora de conducirlo en cualquier escenario. Esto es gracias a la rigidez y ligereza de su chasis de carbono,
            </div>
            <br>
            </br>
            <br></br>
            <div>

                <img src={carro3} />
                Maserati MC20
                El MC20 es un superdeportivo muy especial por su equilibrio general y la satisfacción que produce a la hora de conducirlo en cualquier escenario. Esto es gracias a la rigidez y ligereza de su chasis de carbono,
            </div>

            <div>

                <img src={carro4} />
                Porsche 718 Cayman/Boxster
                El 718 Cayman es un deportivo preciso, ágil, equilibrado y prácticamente de competición en su versión GT4 RS. Además de ser un coche concebido para poder usarlo en un día a día, está perfectamente
            </div>

            <div>

                <img src={carro6} />
                Alpine A110
                Desaparecidos ya el Alfa Romeo 4C y el Lotus Elise, este es el único deportivo que puede considerarse ultraligero que queda, además a un precio bastante razonable teniendo en cuenta sus prestaciones. 
            </div>
        </>



    )

}
export default Album