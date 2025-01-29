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

export const getAllBooks = (req, res, next) => {
    try {
        res.status(200).json({
            message: "Successfully get all books",
            paylaod: library,
            status: 200,
            time: new Date()
        });
    } catch (error) {
        next(error);
    }
};

export const getBookById = (req, res, next) => {
    const bookId = +req.params.id;
    try {
        const book = library.find(b => b.id === bookId);

        { !book && res.status(404).send('Book not found') }

        res.status(200).json({
            message: `Successfully get book with id : ${bookId}`,
            paylaod: book,
            status: 200,
            time: new Date()
        });
    } catch (error) {
        next(error);
    }
};

export const addBook = (req, res, next) => {
    const { title, author, year, genre } = req.body;

    try {
        const newBook = { id: library.length + 1, title, author, year, genre };
        library.push(newBook);
        res.status(201).json({
            message: "Successfully add new book",
            payload: newBook,
            status: 201,
            time: new Date()
        });
    } catch (error) {
        next(error);
    }
};

export const updateBookById = (req, res, next) => {
    const bookId = req.params.id;
    const { title, author, year, genre } = req.body;

    try {
        const bookIndex = library.findIndex(b => b.id === parseInt(bookId));

        if (bookIndex === -1) {
            return res.status(404).send('Book not found');
        }

        const updatedBook = { id: parseInt(bookId), title, author, year, genre };
        library[bookIndex] = updatedBook;

        res.status(200).json({
            message: `Successfully update book with id : ${+bookId}`,
            payload: updatedBook,
            status: 200,
            time: new Date()
        });
    } catch (error) {
        next(error);
    }
};

export const deleteBookById = (req, res, next) => {
    const bookId = +req.params.id;

    try {
        { !library.find(x => x.id === bookId) && res.status(404).json({ messgae: 'Book not found' }) }

        library = library.filter(x => x.id !== bookId)

        res.status(200).json({
            message: `Successfully deleted book with id : ${bookId}`,
            status: 204,
            time: new Date()
        });
    } catch (error) {
        next(error);
    }
};