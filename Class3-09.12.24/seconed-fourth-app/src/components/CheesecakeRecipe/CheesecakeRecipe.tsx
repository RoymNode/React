import { useEffect, useState } from 'react';

const CheesecakeRecipe = () => {
    const [showInstructions, setShowInstructions] = useState(false);
          
    return (
      <div className="cheesecake-recipe">
        <h2>Cheesecake Recipe</h2>
        <img src="cheesecake.jpg" alt="Cheesecake" />
        <button onClick={() => setShowInstructions(!showInstructions)}>
          {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
        </button>
        {showInstructions && (
          <div className="instructions">
            <h3>Instructions:</h3>
            <ol>
              <li>Preheat the oven to 160°C (320°F).</li>
              <li>Mix the cream cheese, sugar, and eggs.</li>
              <li>Pour into a prepared crust and bake for 45 minutes.</li>
              <li>Let it cool and refrigerate for 4 hours.</li>
            </ol>
          </div>
        )}
      </div>
    );
  };
          
  export default CheesecakeRecipe;