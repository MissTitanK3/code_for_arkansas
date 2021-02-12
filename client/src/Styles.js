import styled from 'styled-components'

const HeroWrapper = styled.div`
background-color: darkgray;
display: flex;
flex-wrap: wrap;
text-align: center;
max-width: 1200px;
justify-content: center;
p {
  font-size: 1.4em;
  font-weight: bolder;
}

img {
  width: 22em;
  margin: auto;
  border-radius: 2em;
  
}

@media screen and (min-width: 720px) {
display: flex;
justify-content: center;
margin: auto;
height: 40rem;
display: flex;
align-items: center;
flex-wrap: nowrap;
margin-bottom: 5em;


  img {
    width: 35rem;
    border-radius: 3em;
    background-color: antiquewhite;
    border: .4em solid antiquewhite;
  }
}

`

const HomeWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: auto;
`

const Card = styled.div`
width: 95%;
overflow: hidden;
margin: 1em;
@media screen and (min-width: 720px) {
  width: 13em;
  display: flex;
  flex-wrap: wrap;
  margin: 1em;
  h3 {
    margin: 1em;
    padding: 1em;
  }
}
`

const CardWrapper = styled.div`
margin: auto;
height: 100%;
text-align: center;
background-color: #060b46;
color: antiquewhite;
margin-bottom: 5em;
box-shadow: .4em .8em 2em black;
width: 100vw;
display: flex;
justify-content: center;
flex-wrap: wrap;

h1 {
  width: 100%;
}
ul {
  list-style: none;
  
  li {
    
  }
}

@media screen and (min-width: 720px) {
  ul {
    display: flex;
    justify-content: center;
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      margin: 1em;
      padding: 0 2em;
  
    }
  }

}

`

const FormWrapper = styled.div`
background-color: whitesmoke;
border-radius: 1em;
width: 90vw;
padding: 1em;
margin-bottom: 2em;
form {
  color: black;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  input, label, textarea, button {
    padding: 1em;
    margin: .4em;
  }
}
@media screen and (min-width: 720px) {
  width: 50vw;
  form {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
`
const PrimaryBtn = styled.button`
background-color: crimson;
border: none;
border-radius: .4em;
padding: .4em;
font-weight: bolder;
margin: 2em;
&:hover {
  background-color: #060b46;
  color: whitesmoke;
  border: 3px solid crimson;
}
`

export {
  HeroWrapper,
  Card,
  CardWrapper,
  FormWrapper,
  HomeWrapper,
  PrimaryBtn
}