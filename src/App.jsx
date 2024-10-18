import OmeletteImg from './assets/images/image-omelette.jpeg'


const App =() => {
  return (
    <main className="flex flex-col justify-center mx-auto sm:my-10 min-h-screen w-full sm:w-1/2 bg-white sm:rounded-xl">
      <div className='mx-0 sm:mt-8 sm:mx-8'>
        <img src={OmeletteImg} alt="Omelette" className='w-full sm:rounded-lg' />
      </div>
      <div className='mx-10 sm:mx-8 mt-10 mb-10 sm:mt-10 sm:mb-10'>
        <h1 className='font-youngSerif text-[38px] sm:text-[41px] mb-5 font-normal leading-none'>Simple Omelette Recipe</h1>
        <p className='font-outfit text-[16px] text-stone-600'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      </div>
      <div className='mx-10 sm:mx-8 mb-10 sm:mb-10 bg-rose-50 p-8 rounded-xl'>
        <h3 className='font-outfit text-[20px] font-bold text-rose-800 leading-none mb-5'>Preparation time</h3>
        <ul className='font-outfit text-[16px] list-disc list-outside px-6 text-stone-600 space-y-4'>
          <li className='pl-2'><span><strong>Total</strong>: Approximately 10 minutes</span></li>
          <li className='pl-2'><span><strong>Preparation</strong>: 5 minutes</span></li>
          <li className='pl-2'><span><strong>Cooking</strong>: 5 minutes</span></li>
        </ul>
      </div>
      <div className='mx-10 sm:mx-8 mb-10 sm:mb-10'>
        <h2 className='font-youngSerif text-[30px] sm:text-[28px] font-normal leading-none text-brown-800 mb-5'>Ingredients</h2>
        <ul className='font-outfit text-[16px] list-disc list-outside px-6 text-stone-600 font-medium space-y-4'>
          <li className='pl-2'>2-3 large eggs</li>
          <li className='pl-2'>Salt, to taste</li>
          <li className='pl-2'>Pepper, to taste</li>
          <li className='pl-2'>1 tablespoon of butter or oil</li>
          <li className='pl-2'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
        <hr className='mt-10 border-t-1 border-stone-150' />
      </div>
      <div className='mx-10 sm:mx-8 mb-10 sm:mb-10'>
        <h2 className='font-youngSerif text-[30px] sm:text-[28px] font-normal leading-none text-brown-800 mb-5'>Instructions</h2>
        <ol className='font-outfit text-[16px] list-decimal list-outside px-6 text-stone-600 [&>li::marker]:text-brown-800 [&>li::marker]:font-bold space-y-4'>
          <li className="pl-5"><span><strong>Beat the eggs</strong>: In a bowl, beat the eggs with a pinch of salt and pepper until they are mixed well. You can add a tablespoon of water or milk for a fluffier texture.</span></li>
          <li className="pl-5"><span><strong>Heat the pan</strong>: Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
          <li className="pl-5"><span><strong>Cook the omelette</strong>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></li>
          <li className="pl-5"><span><strong>Add fillings (optional)</strong>: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
          <li className="pl-5"><span><strong>Fold and serve</strong>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
          <li className="pl-5"><span><strong>Enjoy</strong>: Serve hot, with additional salt and pepper if needed.</span></li>
        </ol>
        <hr className='mt-10 border-t-1 border-stone-150' />
      </div>
      <div className='mx-10 sm:mx-8 mb-10 sm:mb-10'>
        <h2 className='font-youngSerif text-[30px] sm:text-[28px] font-normal leading-none text-brown-800 mb-5'>Nutrition</h2>
        <p className='font-outfit text-[16px] text-stone-600 mb-5'>The table below shows nutrition values per serving without the additional fillings.</p>
        <div className='font-outfit text-[16px]'>
          <div className='grid grid-cols-4 gap-4'>
            <span className='col-start-1 col-end-2 text-stone-600 ml-10'>Calories</span>
            <span className='col-start-3 col-end-4 font-bold text-brown-800'>277kcal</span>
          </div>
          <hr className='mt-3 border-t-1 border-stone-150' />
          <div className='mt-3 grid grid-cols-4 gap-4'>
            <span className='col-start-1 col-end-2 text-stone-600 ml-10'>Carbs</span>
            <span className='col-start-3 col-end-4 font-bold text-brown-800'>0g</span>
          </div>
          <hr className='mt-3 border-t-1 border-stone-150' />
          <div className='mt-3 grid grid-cols-4 gap-4'>
            <span className='col-start-1 col-end-2 text-stone-600 ml-10'>Protein</span>
            <span className='col-start-3 col-end-4 font-bold text-brown-800'>20g</span>
          </div>
          <hr className='mt-3 border-t-1 border-stone-150' />
          <div className='mt-3 grid grid-cols-4 gap-4'>
            <span className='col-start-1 col-end-2 text-stone-600 ml-10'>Fat</span>
            <span className='col-start-3 col-end-4 font-bold text-brown-800'>22g</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;
