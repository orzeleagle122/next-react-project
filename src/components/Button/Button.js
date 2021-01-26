import React from 'react';
import {StyledButton} from './Button.elements';

const Button = ({children,to}) => {
    return ( 
        <StyledButton to={to}>
            {children}
        </StyledButton>
     );
}
 
export default Button;