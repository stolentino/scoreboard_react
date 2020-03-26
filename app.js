const title = 'My First React Element';
const desc = 'I just learned to create a React node and render it into the dom.';
const myTitleID = 'main-title';
const name = 'Sam`s';

const header = (
    <header>
    {/*this is a comment*/}
        <h1 id={myTitleID}>{name} {title}</h1>
        <p className="main-desc">{desc}</p>
    </header>
);
    
ReactDOM.render(
    header,
    document.getElementById('root')
);

console.log(header);

