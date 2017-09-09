
fetch(
    new Request(
        '../json/output.txt',
        {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        }
    )
)
.then(res => res.text())
.then(fileText =>
    console.log(fileText
        .split(/\n/)
        .filter(v => v.length > 0 )
        .map(line => line.split('-'))
        .map(register => ({
                mac: register[0],
                timestamp: new Date(register[1])
        }))
    )
);
