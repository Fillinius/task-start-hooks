import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types"

const ComponentList = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        console.log(index);
        const config = { value: index }
        return React.cloneElement(child, config)
    })
}
ComponentList.propTypes = {
    children: PropTypes.array
}

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ComponentList>
                <Component value="1" />
                <Component value="2" />
                <Component value="3" />
            </ComponentList>

        </CollapseWrapper>
    );
};
const Component = ({ value }) => {
    return (<div>{value + 1} Компонент списка</div>);
};
Component.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ChildrenExercise;
