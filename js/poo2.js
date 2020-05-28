var marcas = ['Audi', 'Peugeot', 'Jeep', 'Ford', 'Honda', 'Bmw', 'Volvo', 'Land Rover', 'Toyota', 'Nissan'];
var modelos = ['A3', '3008', 'Wrangler', 'Focus', 'Civic', 'Serie 1', 'Xc40', 'Defender', 'Hilux', 'Juke'];
var anyo = [2015, 2019, 2005, 2007, 2003, 2018, 2017, 2010, 2009, 2020];

function autoMarcas (marcas) {
      
    console.log (` Listado de las marcas de autos disponibles para venta, ${marcas} `);

}

for (var i = 0; i < marcas.length; i++) {
    autoMarcas (marcas[i]);
}

function autoMarcas (modelos) {
      
    console.log (` Listado de los modelos de autos disponibles para venta, ${modelos} `);

}

for (var i = 0; i < modelos.length; i++) {
    autoMarcas (modelos[i]);
}

function autoMarcas (anyo) {
      
    console.log (` Listado de los años de los autos disponibles para venta, ${anyo} `);

}

for (var i = 0; i < anyo.length; i++) {
    autoMarcas (anyo[i]);
}
