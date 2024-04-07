import React from 'react'

const Box = (props) => {
    let result;
    if (props.title === "computer" && props.result !== "tie" && props.result !== "") {
        // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
        result = props.result === "win" ? "lose" : "win";
    } else {
        // 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
        result = props.result;
    }
    // if (props.title === "computer") {
    //     console.log("computer", result);
    // }
    return (
        <div className={`box ${result}`}>
            <p>{props.title}</p>
            <img src={props.item && props.item.img} alt="" />
            <p>{result}</p>
        </div>
    )
}

export default Box