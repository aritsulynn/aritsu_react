import Helmet from "react-helmet";

export default function Notfound(){
    return(
        <div style={{width: "100%", textAlign:"center", padding: "200px 200px"}}>
            <Helmet>
                <meta property='og:title' content='Aritsu | Page Not Found'></meta>
            </Helmet>
            <h1>Sorry, that page was not found!</h1>
            <button><a href="/" style={{color: "black" , margin: "20px 20px"}}>HOME</a></button>
        </div>        
    );
}
