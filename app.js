const title = React.createElement(
       'p',
        {id: 'main-title', title: 'This is a title.'},
        'My First React Element!'
    );

const desc = Reac.createElement(
    'p',
    null,
    'I ust learned how to create a React node and render it into the DOM.'
);

const header = React.createElement(
    'header',
    null,
    title,
    desc
);
    
ReactDOM.render(
    header,
    document.getElementById('root')
);

console.log(header);

