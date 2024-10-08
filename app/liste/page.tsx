const cats = [
{breed: 'Abyssinian', country: 'Ethiopia', origin: 'Natural/Standard', coat: 'Short', pattern: 'Ticked'},
{breed: 'Aegean', country: 'Greece', origin: 'Natural/Standard', coat: 'Semi-long', pattern: 'Bi- or tri-colored'},
{breed: 'American Curl', country: 'United States', origin: 'Mutation', coat: 'Short/Long', pattern: 'All'},
{breed: 'American Bobtail', country: 'United States', origin: 'Mutation', coat: 'Short/Long', pattern: 'All'},
{breed: 'American Shorthair', country: 'United States', origin: 'Natural', coat: 'Short', pattern: 'All but colorpoint'},
{breed: 'American Wirehair', country: 'United States', origin: 'Mutation', coat: 'Rex', pattern: 'All but colorpoint'},
{breed: 'Arabian Mau', country: 'Arabian Peninsula', origin: 'Natural', coat: 'Short', pattern: ''},
{breed: 'Australian Mist', country: 'Australia', origin: 'Crossbreed', coat: 'Short', pattern: 'Spotted and Classic tabby'},
{breed: 'Asian', country: 'developed in the United Kingdom (founding stock from Asia)', origin: '', coat: 'Short', pattern: 'Evenly solid'},
{breed: 'Asian Semi-longhair', country: 'United Kingdom', origin: 'Crossbreed', coat: 'Semi-long', pattern: 'Solid'},
{breed: 'Balinese', country: 'developed in the United States (founding stock from Thailand)', origin: 'Crossbreed', coat: 'Long', pattern: 'Colorpoint'},
{breed: 'Bambino', country: 'United States', origin: 'Crossbreed', coat: 'Hairless/Furry down', pattern: ''},
{breed: 'Bengal', country: 'developed in the United States (founding stock from Asia)', origin: 'Hybrid', coat: 'Short', pattern: 'Spotted/Marbled'},
{breed: 'Birman', country: 'developed in France (founding stock from Burma)', origin: 'Natural', coat: 'Semi Long', pattern: 'Colorpoint'},
{breed: 'Bombay', country: 'developed in the United States (founding stock from Asia)', origin: 'Crossbred', coat: 'Short', pattern: 'Solid'},
{breed: 'Brazilian Shorthair', country: 'Brazil', origin: 'Natural', coat: 'Short', pattern: 'All'},
{breed: 'British Semi-longhair', country: 'United Kingdom', origin: '', coat: 'Medium', pattern: 'All'},
{breed: 'British Shorthair', country: 'United Kingdom', origin: 'Natural', coat: 'Short', pattern: 'All'},
{breed: 'British Longhair', country: 'United Kingdom', origin: '', coat: 'Long', pattern: ''},
{breed: 'Burmese', country: 'Burma and Thailand', origin: 'Natural', coat: 'Short', pattern: 'Solid'},
{breed: 'Burmilla', country: 'United Kingdom', origin: 'Crossbreed', coat: 'Short/Long', pattern: ''},
{breed: 'California Spangled', country: 'United States', origin: 'Crossbreed', coat: 'Short', pattern: 'Spotted'},
{breed: 'Chantilly-Tiffany', country: 'United States', origin: '', coat: '', pattern: ''},
{breed: 'Chartreux', country: 'France', origin: 'Natural', coat: 'Short', pattern: 'Solid'},
{breed: 'Chausie', country: 'France', origin: 'Hybrid', coat: 'Short', pattern: 'Ticked'}
];

export default function Home() {
    return (
        <ul>
            {cats
                .filter(cat => cat.country === 'United States')
                .map((cat) => (<li key={cat.breed}> {cat.breed} </li>)
                )}
        </ul>
    );
}