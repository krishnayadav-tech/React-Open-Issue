import { Link } from "react-router-dom";

const Pagination = (props)=>{
    let postPerPage = props.postPerPage;
    let totalPost = props.totalPost;
    
    let getListofNavigation = ()=>{
        let list = [];
        for(let i=1;i<=totalPost/postPerPage;i++){
            list.push(<li key={i} className="waves-effect"><Link to={`/pages/${i}`}>{i}</Link> </li>)
        }
        return list;
    }

    return (
        <ul className="pagination">
            {getListofNavigation()}
        </ul>
    )
}

export default Pagination;