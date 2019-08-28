'use strict';

import addCart from './modules/addCart';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCart from './modules/toggleCart';
import toggleCheckbox from './modules/toggleCheckbox';
import findItem from './modules/findItem';
import getData from './modules/getData';


(async function(){
 const db = await getData();
 renderCards(db);
 renderCatalog();
 toggleCheckbox();
 toggleCart();
 addCart();
 findItem(); 
}())

