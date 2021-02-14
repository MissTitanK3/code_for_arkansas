import styled from 'styled-components'

const HeroWrapper = styled.div`
/* background-color: darkgray; */
color: whitesmoke;
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
  width: 100%;
  height: 100%;
  margin: auto;
  border-radius: 2em;
}

@media screen and (min-width: 791px) {
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
margin-top: 14em;
p {
  padding-right: 1em;
}
h1 {
  padding: 1em;
}
`

const Card = styled.div`
width: 95%;
overflow: hidden;
margin: 1em;
@media screen and (min-width: 791px) {
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
height: 150%;
text-align: center;
background-color: #060b46;
color: antiquewhite;
margin: 2em 0;
box-shadow: .4em .8em 2em black;
width: 100vw;
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 5em;

h2{
  width: 100%;
  padding: 1em;
}
ul {
  list-style: none;
  li {
  }
}

@media screen and (min-width: 791px) {
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
margin: 2em 0;
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
@media screen and (min-width: 791px) {
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
padding: .5em;
font-weight: bold;
margin: 2em;
width: 20em;
&:hover {
  background-color: #060b46;
  color: whitesmoke;
  border: 3px solid crimson;
}
`

const SiteMapWrapper = styled.div`
font-size: large;
ul {
  list-style: none;
  li {
    padding: .3em;
    a {
      color: unset;
      text-decoration: none;
    }
  }
}
`
const PostWrapper = styled.div`
height: 100%;
width: 100%;
margin: auto;
color: whitesmoke;
display: flex;
flex-direction: column;
justify-content: center;

.whitespace {
  height: 150px;
}

h1 {
  display: flex;
  justify-content: center;
  margin: auto;
}

div {
  flex-wrap: wrap;
  display: flex;

}
@media screen and (min-width: 791px) {
  width: 75%;
}
`

const NewsWrapper = styled.div`
display: flex;
font-size: 1.3em;
flex-direction: column;
align-items: center;
background-color: #060b46;
border-radius: 1em;
width: 100%;
height: 100%;
margin: 15px;
padding: 10px;

div {
  width: 100%;
  h3 {
    font-size: 2em;
  }
  h5 {
    width: 100%;
  }
  span {
    margin: 5px;
    padding: 30px;
    width: 100%;
  }
}
.postHead {
  margin: 5px;
  img {
    width: 75px;
    height: 75px;
  }
  div {
    display: flex;
    justify-content: center;
    span {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0;
    }
  }
}
@media screen and (min-width: 791px) {
width: 45%;

.postHead {
  img {
    width: 100px;
    height: 100px;
  }
}
}
`

export {
  HeroWrapper,
  Card,
  CardWrapper,
  FormWrapper,
  HomeWrapper,
  PrimaryBtn,
  SiteMapWrapper,
  PostWrapper,
  NewsWrapper
}