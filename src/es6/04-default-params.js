function newUser(name, edad, country) {
    var name = name || 'Oscar';
    var edad = edad || '33';
    var country = country || 'Colombia';
    console.log(name, edad, country);
}

newUser();
newUser('David', 15, 'mx');

// nueva forma de hacer el ejemplo anterior

function newAdmin(name = 'Oscar', edad = 32, country = 'Chile' ) {
    console.log(name, edad, country);
}

newAdmin();
newAdmin('Ana', 28, 'Canada');

