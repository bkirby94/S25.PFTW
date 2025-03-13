export default function CatBreedComponent({ breedName, deleteFn, focusFn }) {
    return (
      <div>
        <strong>{breedName}</strong>
        <div>
          <button
            onClick={() => {
              focusFn(breedName);
            }}
          >
            Focus
          </button>
  
          <button
            onClick={() => {
              deleteFn(breedName);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  