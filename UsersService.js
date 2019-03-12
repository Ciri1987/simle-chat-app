class UsersService {
    constructor() {
        this.users = [];
    }

    getAllUsers() { //zwrócenie tablicy użytkowników,
        return this.users;
    }

    getUserById(userId) { // odszukanie użytkownika po wskazanym przez nas id. 
        return this.users.find(user => user.id === userId);
    }

    addUser(user) { //dodamoe kolejnej osoby do listy
        this.users = [user, ...this.users];
    }

    removeUser(userId) {
        this.users = this.users.filter(user => user.id !== userId); //odfiltrowujemy tych użytkowników, których ID różni się od wskazanego w argumencie metody.
    }
}
module.exports = UsersService;