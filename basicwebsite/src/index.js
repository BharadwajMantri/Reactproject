import React from 'react';
import ReactDOM from 'react-dom/client';
// import NavBarClass from './components/classcomponents/NavbarClass'
// import NavBarFunction from './components/functionalcomponents/NavbarFunctional';
import ClassEventHandlers from './components/classcomponents/EventHandlerclass';


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
<div>
  <ClassEventHandlers/>
  {/* <NavBarFunction/> */}
  {/* <NavBarClass title="NavBar Class Component1" />  */}
  {/* <NavBarFunction 
  title="bharadwaj" 
  age={23} DOB={1999} 
  place="kakinada" /> */}
  {/* <NavBarClass title="NavBar Class Component2" />  */}
  {/* <NavBarFunction 
  title="Krishna" 
  age={25} DOB={1997}
   place="Vizag"/> */}
  {/* <NavBarClass title="NavBar Class Component3"  />  */}
</div>
);