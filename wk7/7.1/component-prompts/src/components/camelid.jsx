function Camelid({ camelid }) {

    return(
        <div>
         <h2>{camelid.name}</h2>
         <img src={camelid.imageUrl} alt={camelid.name} style={{width: '200px', height: 'auto'}} />
         <p>{camelid.fact}</p>
        </div>
    );
}

export default Camelid;