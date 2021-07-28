import { LinkData } from './LinksData';
import './links.css'

function Links ()  {
return(
    <>
    {LinkData.map((item, index) => {
        return (
            <li key={index} className={item.cName}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
                <span>{item.title}</span>
                </a>
            </li>
        );
    })}
</>)
}

export default Links;