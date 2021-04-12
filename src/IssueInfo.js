import { useParams } from "react-router";

const IssueInfo = (props)=>{
    let params = useParams();
    let issueNumber = parseInt(params.id);
    if(!issueNumber || !props.issues){
        return null;
    }
    if(issueNumber > props.issues.length){
        return null;
    }

    return (
        
        <table className="centered">
            <thead>
            <tr>
                <th>Title</th>
                <th>Body</th>
                <th>Url</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>{props.issues[issueNumber-1].title}</td>
                <td>{props.issues[issueNumber-1].body}</td>
                <td><a href={props.issues[issueNumber-1].url}>{props.issues[issueNumber].url} </a></td>
            </tr>
            </tbody>
      </table>
    )
}

export default IssueInfo;