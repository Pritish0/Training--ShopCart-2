import './Tooltip.css';

export default function Tooltip({item,text}){
    return(
        <div className="tooltip">
            <div>{item}</div>
            <div className="tooltiptext">{text}</div>
        </div>
    );
}