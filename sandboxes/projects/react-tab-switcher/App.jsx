import React, { useState } from 'react';

function Select({ className, onChange, value }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <select className={`selector ${className}`} onChange={handleChange} value={value}>
            <option className="selector__item" value="value1">
                Sort by price
            </option>
            <option className="selector__item" value="value2">
                Sort by name
            </option>
            <option className="selector__item" value="value3">
                Sort by relevance
            </option>
        </select>
    );
}

function Buttons({ className, onClick, value }) {
    const handleClick = (e) => {
        onClick(e.target.value);
    };

    return (
        <div className={`button-group ${className}`}>
            <button
                type="button"
                value="value1"
                className={`button-group__button button ${value === 'value1' ? 'button--is-active' : ''}`}
                onClick={handleClick}
            >
                Sort by price
            </button>

            <button
                type="button"
                value="value2"
                className={`button-group__button button ${value === 'value2' ? 'button--is-active' : ''}`}
                onClick={handleClick}
            >
                Sort by name
            </button>

            <button
                type="button"
                value="value3"
                className={`button-group__button button ${value === 'value3' ? 'button--is-active' : ''}`}
                onClick={handleClick}
            >
                Sort by relevance
            </button>
        </div>
    );
}

export function App() {
    const [value, setValue] = useState('value1');

    const handleSelectChange = (v) => {
        setValue(v);
    };

    const handleButtonChange = (v) => {
        setValue(v);
    };

    return (
        <div className="app">
            <div className="toggling-tabs">
                <Select className="toggling-tabs__selector" onChange={handleSelectChange} value={value} />
                <Buttons className="toggling-tabs__button-group" onClick={handleButtonChange} value={value} />
            </div>
        </div>
    );
}
