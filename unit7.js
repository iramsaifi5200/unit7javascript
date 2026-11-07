// ===================================
// TASK 1: Dynamic Property Access
// ===================================

const user = {
    username: "srija_dev",
    email: "srija@example.com",
    city: "Hyderabad"
};

let detail = prompt("Enter detail (username, email, city):");

if (detail in user) {
    console.log(user[detail]);
} else {
    console.log("Detail not available");
}


// ===================================
// TASK 2: Object Transformation
// ===================================

const marks = {
    math: 70,
    english: 65,
    science: 80
};

const updatedMarks = {};

for (let subject in marks) {
    updatedMarks[subject] = marks[subject] + 5;
}

console.log("The values of updatedMarks are:", updatedMarks);


// ===================================
// TASK 3: Object Property Manipulation
// ===================================

const book = {
    title: "The Mystery Box",
    author: "A. Writer",
    publishedYear: 2010,
    isAvailable: true
};

book.title = "The secret key";
book.genre = "Thriller";

delete book.isAvailable;
delete book["author"];

console.log("Updated Book Object:", book);


// ===================================
// TASK 4: Product Object with Methods
// ===================================

const product = {
    name: "Laptop",
    price: 1000,
    discount: 10,

    calculateFinalPrice() {
        return this.price - (this.price * (this.discount / 100));
    },

    updateDiscount(newDiscount) {
        this.discount = newDiscount;

        console.log(
            `Final price after new discount is: ${this.calculateFinalPrice()}`
        );
    }
};

console.log("Original Final Price:", product.calculateFinalPrice());

product.updateDiscount(20);