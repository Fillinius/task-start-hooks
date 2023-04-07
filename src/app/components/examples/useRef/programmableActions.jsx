import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef()
    const handleClick = () => {
        console.log(inputRef.current.clientWidth);
        inputRef.current.focus()
    }
    const handeClickWidth = () => {
        inputRef.current.style.width = "150px"
    }
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">Email</label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email" />
            <button className="btn btn-primary" onClick={handleClick}>Button</button>
            <button className="btn btn-secondary" onClick={handeClickWidth}>изменит ширину</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
