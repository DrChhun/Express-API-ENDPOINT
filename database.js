let library = [
    {
        id: 1,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt, David Thomas",
        year: 1999,
        genre: "Programming",
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        year: 2008,
        genre: "Software Development",
    }
];

export let bookId = 3;

export const getAllBook = () => library;

export const getBookById = (id) => library.find(x => x.id === id) ? library.find(x => x.id === id) : null; 

export const addBook = (data) => {
    library.push(data)
    bookId++
}

export const deleteBookById = (id) => library = library.filter(x => x.id !== id)

export const updateBookById = (id, data) => {
    let pickBook = library.find(x => x.id === id)
    let pickBookUpdate = {
        id : pickBook?.id,
        title: data.title,
        author: data.author,
        year: data.year,
        genre: data.genre,
    }
    deleteBookById(pickBook.id)
    addBook(pickBookUpdate)
}