import React, {useState} from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    width: 300px;
`;

function SearchBox(props) {
    return(
       <InputText 
            type="text" 
            placeholder={props.frasePadrao ?? "Digite no campo"}
        />
    );
}

export default SearchBox;