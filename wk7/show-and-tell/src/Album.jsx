
function Album (albumData){
    return (
        <tr className={albumData.isOddRow ? "odd-row" : "even-row"}>
            <td>{
                albumData.albumDetails.havePhysical ?
                <i class="fa-solid fa-compact-disc"></i> :
                <i class="fa-solid fa-download"></i>
                }
                <span style={{marginLeft:"5px"}}>{albumData.albumDetails.name}</span></td>
            <td>{albumData.albumDetails.artist}</td>
            <td>{albumData.albumDetails.release}</td>
            <td>{albumData.albumDetails.genre}</td>
        </tr>
    )
}

export default Album