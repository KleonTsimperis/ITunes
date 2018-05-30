import React from 'react';
import './Components.css';

const Pages = props =>
  <div className="d-inline mx-auto center">
    <ul className="list-inline center">
      <li className="h2 ml-4 pages">Pages</li>
      { 20 / props.numberOfAlbums < 1 || 20 / props.numberOfAlbums === 1 ?
        <li className="list-inline-item h2 mx-3" onClick={()=> props.page1()}><a href="#top"> 1 </a> </li>
        :
        null
      }
      { 40 / props.numberOfAlbums < 2  || 40 / props.numberOfAlbums === 1 ?
        <li className="list-inline-item h2 mx-3" onClick={()=> props.page2()}><a href="#top"> 2 </a> </li>
        :
        null
      }
      {  60 / props.numberOfAlbums < 2 && 60 / props.numberOfAlbums < 1.5  || 60 / props.numberOfAlbums === 1 ?
        <li className="list-inline-item h2 mx-3" onClick={()=> props.page3()}><a href="#top"> 3 </a> </li>
        :
        null
      }



    </ul>

  </div>

export default Pages;
