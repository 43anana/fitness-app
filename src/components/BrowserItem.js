/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Div = styled.div `
background-color: var(--color-beige);
`;

function BrowserItem(props) {
return (
    <Div>
        <h2>{props.title}</h2>
    </Div>
);

}

export default BrowserItem;