import React from 'react';
import './Components.css';

const Pages = props =>
  <div className="d-inline mx-auto center">
    <ul className="list-inline center">
      <li className="h2 ml-4 pages">Pages</li>
      <li className="list-inline-item h2 mx-3" onClick={()=> props.page1()}><a href="#top"> 1 </a> </li>
      <li className="list-inline-item h2 mx-3" onClick={()=> props.page2()}><a href="#top"> 2 </a> </li>
      <li className="list-inline-item h2 mx-3" onClick={()=> props.page3()}><a href="#top"> 3 </a> </li>
    </ul>

  </div>

export default Pages;
