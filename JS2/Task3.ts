

export interface User {
    username: string;
    age: number;
    email: string;
}

export function createUser(username: string, age: number, email: string): User {
    return { username, age, email };
}


const userObj = createUser("JohnDoe", 30, "john@example.com");

console.log(`User: ${userObj.username}, Age: ${userObj.age}, Email: ${userObj.email}`);
