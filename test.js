import bcrypt from 'bcrypt';

async function hashPassword() {
    const password = 'azrazrezrzeaazrzedmezrSin';
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Mot de passe hashé:', hashedPassword);
}

hashPassword();
