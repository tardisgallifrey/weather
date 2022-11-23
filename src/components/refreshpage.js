
export const RefreshPage = () => {

    const refreshPage = ()=>{
        window.location.reload();
     }

    return(
        <button className="button" onClick={refreshPage}>Reset</button>
    );
}