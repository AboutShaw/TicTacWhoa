const Reset = () => {
    function refreshPage() {
        return window.location.reload(false)
    }
    return (
            <div id="resetArea">
                <button id="reset" onClick={refreshPage}>Reset Y'All Tokens</button>
            </div>
    )
}   


export default Reset;


