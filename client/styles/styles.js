import styled from "styled-components";
import img from "/home/msvyk/HR2201/MVP/img/risingSun.gif";


export const MainContainer = styled.div`
  background-image: url(${img});
  background-size: 100%;
  margin: 0;
  padding: 0;
  height: 200%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;

`

export const TopMenu = styled.div`
  margin: 50px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`
export const AppContainer = styled.div`
  margin: 100px;
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Canvas = styled.canvas`
  position: absolute;
`
export const CustomizeButton = styled.button`


  background: #2f1e38;
  font-size: 0.875rem;
  color: #bfbe86;
  font-weight: bold;
  width: 100px;
  border-radius: 5px;
`
// border: 2px;
// margin: 0 0.25rem;
// padding: 0.25rem;


export const MenuArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: darkslategrey;
  height: 60px;
  font-family:Poppins;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
`
{/* <div class="menu-area">
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Services</a>
    <ul class="dropdown-1">
      <li><a href="#">service one</a></li>
      <li><a href="#">service two</a></li>
      <li><a href="#">service three</a>
        <ul class="dropdown-2">
          <li><a href="#">service four</a></li>
          <li><a href="#">service five</a></li>
          <li><a href="#">service six</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#">Porfolio</a></li>
  <li><a href="#">Contact</a></li>
</ul>
</div>
<div class="banner-area">
<h1>Banner Text</h1>
</div> */}