let searchbar = document.getElementById('search')
console.log(searchbar)
var products = [
    {
        name: 'Nike Air Force1',
        tag: 'nikeairforce1',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force2',
        tag: 'nikeairforce2',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force3',
        tag: 'nikeairforce3',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force4',
        tag: 'nikeairforce4',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force5',
        tag: 'nikeairforce5',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force6',
        tag: 'nikeairforce6',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force7',
        tag: 'nikeairforce7',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force8',
        tag: 'nikeairforce8',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force9',
        tag: 'nikeairforce9',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force10',
        tag: 'nikeairforce10',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force11',
        tag: 'nikeairforce11',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force12',
        tag: 'nikeairforce12',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force13',
        tag: 'nikeairforce13',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force14',
        tag: 'nikeairforce14',
        price: 50,
        inCart: 0,
    },
    {
        name: 'Nike Air Force15',
        tag: 'nikeairforce15',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force16',
        tag: 'nikeairforce16',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force17',
        tag: 'nikeairforce17',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force18',
        tag: 'nikeairforce18',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force19',
        tag: 'nikeairforce19',
        price: 50,
        inCart: 0
    },
    {
        name: 'Nike Air Force20',
        tag: 'nikeairforce20',
        price: 50,
        inCart: 0
    }

];

// if searchstring is H -> h
// if searchstring is h -> h
// convert name to lowercase and then convert
// convert tag to lowercase and then convert


searchbar.addEventListener('keyup', (e)=>{
    console.log(e.target.value)
    let searchstring = e.target.value.toLowerCase()
    let filteredchar = products.filter((character) => {
        return (character.name.toLowerCase().includes(searchstring) || character.tag.toLowerCase().includes(searchstring))
    });
    console.log(filteredchar)
    displayCharacter(filteredchar);
})