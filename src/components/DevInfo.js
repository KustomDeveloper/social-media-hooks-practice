import React, {useState, useEffect} from 'react';

function DevInfo() {
  const [developer, setDeveloper] = useState({
    name: 'Tom',
    language: 'Javascript',
    yearsExperience: 0,
    isEmployed: false
  });

  useEffect(() => {
    console.log('runs')
    document.title = developer.name
  }, [developer.name])

  const changeName = (e) => {
    setDeveloper({
      ...developer,
      name: e.target.value
    })
  }
  const changeEmploymentStatus = () => {
    setDeveloper(prevState => ({
      ...prevState,
      isEmployed: !prevState.isEmployed
    }))
  }
  const handleChangeExperience = (e) => {
    setDeveloper({
      ...developer,
      yearsExperience: e.target.value
    })
  }
  const handleChangeLanguage = (e) => {
    const val = e.target.value
    setDeveloper(prevState => ({
      ...prevState,
      language: val
    }))
  }

  return (
    <div className="DevInfo">

      <h2>Name: {developer.name}</h2>
      <h2>Language: {developer.language}</h2>
      <h2>Years of Experience: {developer.yearsExperience}</h2>
      <h2>Employment Status: {developer.isEmployed ? "Employed" : "Unemployed"}</h2>

      <button onClick={changeEmploymentStatus}>Change Employment Status</button>
      <input label="Name" onChange={e => changeName(e)} defaultValue={ developer.name } />
      <input onChange={e => handleChangeExperience(e)} defaultValue={ developer.yearsExperience } />
      <select onChange={e => handleChangeLanguage(e)} defaultValue={ developer.language } >
        <option value="Javascript">Javascript</option>
        <option value="Python">Python</option>
        <option value="Ruby">Ruby</option>
        <option value="Php">Php</option>
      </select>

    </div>
  );
}

export default DevInfo;
