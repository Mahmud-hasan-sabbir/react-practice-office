


function Clipboard() {
    const textCopy = () => {
        alert("Text has been copy");
    };
    const textCut = () => {
        alert("Text has been cut");
    };
    const textpast = () => {
        alert("Text has been past successfully");
    };
    const textfocus = () => {
       console.log("Text has been past successfully");
    };
    const onBlur = () => {
        console.log("Text has been past successfully");
     };
    return (
        <div className="header">
            <p onCopy={textCopy}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <h1 onCut={textCut}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </h1>

            <input type="text" placeholder="text past" onPaste={textpast}></input>
            <input type="text" placeholder="text on focus" onFocus ={textfocus} ></input>
            <input type="text" placeholder="text on focus" onBlur ={onBlur} ></input>



            
           
        </div>
    );
}

export default Clipboard;