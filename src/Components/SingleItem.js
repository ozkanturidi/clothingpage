import { useDispatch } from "react-redux";
import { addtoFavourite, removeFromFavourite } from "../store/favourite-item";
import { useSelector } from "react-redux";
import { addToBascet } from "../store/bascet-item";
import { useState } from "react";
import { NotificationManager } from "react-notifications";
import { Link } from "react-router-dom";

const SingleItem = (props) => {
const [favourite,setFavourite]=useState(false);

const saved=useSelector(state=>state.favourite.saved);

  
const {name,price,image,description}=props;
const itemId=props.id;

const dispatch=useDispatch();

const addYourFavourite=()=>{

  dispatch(addtoFavourite({id:itemId,name:name,price:price,image:image,description:description}))
  setFavourite(true);
  NotificationManager.info(`${props.name} added to favourite `);
    
}

const addYourBascet=()=>{
  dispatch(addToBascet({id:itemId,name,price,image}));
  NotificationManager.info(`${props.name} added to bascet `);

}

const removeFromFavouriteHandler=()=>{
    dispatch(removeFromFavourite(itemId));
    NotificationManager.info(`${props.name} removed from favourites `);
    setFavourite(false);
}


    return (
    <div>
    <li>
<section className="content-center flex justify-center">
    <div className="group max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="relative">
    <Link to={`/ItemDetail/${props.name}`}>
        <img className="rounded-t-lg w-full object-cover" src={props.image} alt=""  />
    </Link>
    <div className="absolute text-center text-white bottom-0 left-0 right-0 py-2 px-3 bg-black opacity-0 group-hover:opacity-100 group-hover:bg-opacity-40 duration-200 ">More details</div>
    </div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl text-left font-medium tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        </a>
        
            <p className="text-2xl text-left text-gray-900 font-light dark:text-white">${props.price}</p>
        
        {/* <div className="flex space-x-4 justify-between">
            <div >
       {/* {!favourite&&<button onClick={addYourFavourite} href="#" className="inline-flex items-center px-10 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            add to favourite
        </button>}
        {favourite&&<button onClick={removeFromFavouriteHandler} href="#" className="inline-flex items-center px-10 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            remove from favourite
        </button>} 
        </div>
        <div>
        <button onClick={addYourBascet} href="#" className="inline-flex items-center px-10 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            add to bascet
           
        </button> }
        </div>
        </div> */}
    </div>
</div>
</section>
</li>
</div>
    );
  };
  
  export default SingleItem;