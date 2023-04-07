import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({})
    const withOutCallback = useRef(0)
    const withCallback = useRef(0)
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }
    const validateWithOutCallback = (data) => {
        console.log(data);
    }
    const validateWithCallback = useCallback((data) => {
        console.log(data)
    }, [])

    useEffect(() => {
        validateWithOutCallback(data)
        validateWithCallback(data)
    }, [data])
    useEffect(() => {
        withOutCallback.current++
    }, [validateWithOutCallback])
    useEffect(() => {
        withCallback.current++
    }, [validateWithCallback])
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withCallback:{withOutCallback.current}</p>
            <p>Render withCallback:{withCallback.current}</p>
            <label htmlFor="email" className="form-label">Email</label>
            <input
                onChange={handleChange}
                type="email"
                value={data.email || ""}
                name="email"
                className="form-control"
                id="email" />

        </CardWrapper>
    );
};

export default UseCallBackExample;