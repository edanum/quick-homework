import "./card.css"

export function Card({ person }) {
    
    return (
      <div className="card">
            <div>{person.name}</div>
            <img src={person.image}/>
      </div>
    );
}