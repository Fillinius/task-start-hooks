import React, { useEffect, useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const someText = useRef("Блок")
    const changeRef = useRef()
    const [state, setState] = useState("Change block")

    const handleChange = () => {
        changeRef.current.style = "width=80px, height = 150px"
        setState((prev) =>
            prev === "Change block"
                ? "Блок"
                : "Change block")
    }
    useEffect(() => {
        someText.current = state
    }, [state])
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>изменится сожержимое блока на текст</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>

            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={changeRef}
            >
                <small onClick={handleChange}>{someText.current}</small>

            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
