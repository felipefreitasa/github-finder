import React, { useState } from 'react';
import './App.scss'
import Input from './Components/Input/Input';
import UserBoxHeader from './Components/UserBoxHeader/UserBoxHeader'
import UserBio from './Components/UserBio/UserBio'
import UserBoxData from './Components/UserBoxData/UserBoxData'
import axios from 'axios'
import RepositoryBox from './Components/RepositoryBox/RepositoryBox'

function App() {
  const [username, setUsername] = useState('')
  const [data, setData] = useState([])
  const [repos, setRepos] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    getApiData()
    getRepoData()
  }

  function getApiData() {
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        setData(res.data)
      })
  }

  function getRepoData() {
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        setRepos(res.data)
        console.log(res.data);
      })
  }

  return (
    <div className="app">
      <Input
        value={username}
        onChange={e => setUsername(e.target.value)}
        onClick={handleSubmit}
      />
      {
        data.login ?
          <div className="user-box">
            <UserBoxHeader
              avatar_url={data.avatar_url}
              name={data.name}
              login={data.login}
              location={data.location}
            />
            <UserBio bio={data.bio} />
            <UserBoxData
              public_repos={data.public_repos}
              followers={data.followers}
              following={data.following}
            />
            {
              repos.map((repo) => {
                return (<RepositoryBox name={repo.name} description={repo.description} html_url={repo.html_url} />)
              })
            }
          </div>
          :
          undefined
      }
    </div>
  );
}

export default App;
