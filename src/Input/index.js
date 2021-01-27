import React from 'react'
import {dataMap} from './data'
import Table from './Table';


function Input() {
  const [author, setAuthor] = React.useState('');
  const [articles, setArticles] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);
  const [norepsone, setNoresponse] = React.useState(false);

  const onFetch = () => {
    setFetching(true);
    const authors = Object.keys(dataMap);
    const authorKey = authors.find(authorI => authorI.toLowerCase().includes(author.toLowerCase()));
    if(authorKey){
      setArticles(dataMap[authorKey]);
      setNoresponse(false);
    } else {
      setArticles([]);
      setNoresponse(true)
    }
    setFetching(false);
  }

  return (
    <div>
      <input onChange={(e) => setAuthor(e.target.value)}/>
      <button onClick={onFetch} disabled={!author.length || fetching}>Fetch</button>
      {articles.length>0 && <Table rows={articles}/>}
      {norepsone && <div>No result found</div>}
    </div>
  )
}

export default Input
