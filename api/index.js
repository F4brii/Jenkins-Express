const app = require('./src/app');
const PORT = process.env.PORT || 3000;

function main() {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`)
    });
}

main();