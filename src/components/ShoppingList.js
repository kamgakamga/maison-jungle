import { plantList } from "../datas/plantList.js";
import '../styles/ShoppingList.css';

let category ='extérieur'; 
function getListByCategory(category) {
        return plantList.filter(p => p.category == category);
}

const liste = getListByCategory(category);

    function ShoppingList() {
        const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}  className='lmj-plant-item'>
						
					 {plant.name} 
					 {plant.isSpecialOffer && <div className="lmj-sale">Soldes</div>}
					</li>
				))}
			</ul>
		</div>
	)
    }
    
    export default ShoppingList