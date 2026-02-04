

function Button(){

    const click = () => console.log("hatdog");

    return(
        <div className="flex justify-center items-center h-screen">
            <button onClick={click} className="border-2 bg-red-600 text-center p-1 m-1 rounded-[12px] hover:bg-blue-600 active:bg-green-200">Click ME</button>
            <button onClick={click} className="border-2 bg-blue-600 text-center p-1 m-1 rounded-[12px] hover:bg-red-600 active:bg-green-200">Click ME</button>
        </div>
    );
}

export default Button