import { Link, useLocation, useParams } from "react-router-dom";
import ReactLoading from 'react-loading';
const IssuePages = (props)=>{

    if(!props.issues){
        return <ReactLoading type={"bars"} color={"grey"} />
    }
    let params = useParams();
    let pageNumber = parseInt(params.id);
    let getIssuesfromState = ()=>{
        if(!props.issues)
            return;

        let indexEnd;
        let indexStart;
        if(!pageNumber){
            indexStart = 0;
            indexEnd = 10;
        }else{
            indexStart = (pageNumber-1) * 10;
            indexEnd = pageNumber * 10
        }
        return props.issues.slice(indexStart,indexEnd).map((x,i)=>{
            return <Link to={`/pageinfo/${indexStart+i+1}`} key={x.url} className="collection-item">{x.title}</Link>
        })
    }

    return (
        <>
            {getIssuesfromState()}
        </>
    )

}
export default IssuePages;