import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import IssueInfo from "./IssueInfo";
import IssuePages from "./IssuePages";
import Pagination from "./Pagination";

const App = (props)=>{

    let [issues,changeIssues] = useState(null);
    let [error,changeError] = useState(null);
    useEffect(async ()=>{
        try{
            let issuesData = await axios.get("https://api.github.com/repos/facebook/create-react-app/issues");
            if(issuesData.status === 200){
                changeIssues(issuesData.data);
            }
        }catch(error){
            changeError(error);
        }
        
    },[]);

    return (
        <div className="container">
            <h3>React Issues</h3>
            <BrowserRouter>
                <div className="collection">
                    <Switch>
                        <Route path="/" exact> <IssuePages issues={issues}/> </Route>
                        <Route path="/pages/:id" exact><IssuePages issues={issues}/> </Route>
                        <Route path="/pageinfo/:id" exact><IssueInfo issues={issues}/></Route>
                    </Switch>
                </div>
                <Pagination postPerPage={10} totalPost={issues?.length || 0}></Pagination>
            </BrowserRouter>
        </div>
    )
}
export default App;

