import React from "react";

const numbCull = () => {
    const arr = [];

    for (let i=0; i < 10; i++){
        arr.push(i);
    }



    console.log(arr)
    return arr;
}
const Layout= () => {
const [el] = React.useState(numbCull());

    return <div>
        {el.map((item) => (
            <button>
                {item}
            </button>
        ))}
    </div>
};

export default Layout;