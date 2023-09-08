
export default function ListItem({item}){
    return <div className="ListItem">
        <li>{item}</li>
        <button> 🗑️ </button>
    </div>
}