import React from 'react';
import * as Styles from './RadioStyles';

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface RadioProps {
    label: string;
    checked: boolean;
    onCheck: (label: string) => void;
}

function Radio(props: RadioProps) {

    const handleCheck = () => {
        props.onCheck(props.label);
    };

    return (
        <Styles.RadioLabel onClick={handleCheck}>
            <Styles.CustomRadio className={props.checked ? 'checked' : ''}/>
            <span>{capitalize(props.label)}</span>
        </Styles.RadioLabel>
    );
}

export default Radio;
