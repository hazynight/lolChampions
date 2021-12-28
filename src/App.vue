<template>
  <div id='nav'>
    <img src="./assets/icon.png" /> 
    <router-link :to='{ name: "Champions"}'> Champions </router-link> |
    <router-link :to='{ name: "Search"}'> Search </router-link>  
  </div>
  <div id='main'>
    <router-view />
  </div>
</template>

<style>

body {
  padding: 0;
  margin: 0;
  background-color: black;
}

body::-webkit-scrollbar {
  display: none;
}

#nav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100vw;
  min-height: 90px;
  height: 13vh;
  font-size: 30px;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-end;
  background: linear-gradient(90deg, black, rgb(46, 46, 77));
  box-shadow: 0px 0px 10px grey;
  color: white;
}

#nav img {
  height: 70px;
  margin-left: 20px;
  margin-right: auto;
}

#nav a {
  display: flex;
  align-items: center;
  margin: 30px;
  color: #e6e6e6;
  text-decoration: none;
  height: 60%;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
}

#nav a:hover{
  font-size: 27px;
}

#nav a.router-link-exact-active {
  font-size: 27px;
}

#main {
  min-height: 80vh;
  width: 80%;
  margin-top: 20px;
  margin-left: 10%;
  box-shadow: 0px 0px 5px white;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
}

</style>
