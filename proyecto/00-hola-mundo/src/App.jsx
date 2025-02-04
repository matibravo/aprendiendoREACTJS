import { TwitterFollowCard } from "./TwitterFollowCard"
import "./index.css"

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard userName= 'kikobeats' name= 'Kiko Beats' />
            <TwitterFollowCard userName= 'midudev' name= 'Miguel Duran' />
            <TwitterFollowCard userName= 'kikobeats' name= 'Kiko Beats' />
            <TwitterFollowCard userName= 'midudev' name= 'Miguel Duran' />
            <TwitterFollowCard />
        </section>
        
    )    
}
