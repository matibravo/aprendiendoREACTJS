import { TwitterFollowCard } from "./TwitterFollowCard"
import "./index.css"

export function App () {

    const usuarios = [
            {
                id: 1,
                userName: 'kikobeats',
                name: 'kiko Beats',
                isFollowing: false
            },
            {
                id: 2,
                userName: 'midudev',
                name: 'Miguel Duran',
                isFollowing: false
            },
            {
                id: 3,
                userName: 'unknown',
                name: 'Nadie lo conoce',
                isFollowing: false
            }
        ]

    return (
        <section className="App">
            {
                //destructurando los usuarios, y retornando el elemento con las propiedades de los usuarios destructurados
                usuarios.map(({id, userName, name, isFollowing}) => (
                    
                    <TwitterFollowCard
                            key= {id} 
                            userName= {userName}
                            name= {name}
                            isFollowing= {isFollowing} />
                ))
            }
        </section>
    )    
}
