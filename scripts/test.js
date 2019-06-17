const fs = require('fs');

const md = fs.readFileSync('../node_modules/onsenui/css/material-design-iconic-font/css/material-design-iconic-font.css');

const classes = {};

[md].map(x => x.toString()).forEach(x => {
    Array.from(x.match(/\.[\w-]+/g) || []).forEach(c => {
        const name = c.slice(1).replace('zmdi', 'md');
        if (name in classes === false) classes[name] = true;
     });
});

fs.writeFileSync('./icons.js', `
export default ${JSON.stringify(Object.keys(classes))}
`);



