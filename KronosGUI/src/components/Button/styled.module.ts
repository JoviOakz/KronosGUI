.button {
    --color: #40497F;
    padding: 0.2em 1.4em;
    background-color: transparent;
    border-radius: .3em;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;
    font-weight: 400;
    font-size: 17px;
    border: 1px solid;
    font-family: inherit;
    color: var(--color);
    z-index: 1;
}

.button::before,
.button::after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    background-color: var(--color);
    transition: 1s ease;
}

.button::before {
    top: -1em;
    left: -1em;
}

.button::after {
    left: calc(100% + 1em);
    top: calc(100% + 1em);
}

.button:hover::before,
.button:hover::after {
    height: 410px;
    width: 410px;
}

.button:hover {
    color: #fefefe;
}

.button:active {
    filter: brightness(.8);
}