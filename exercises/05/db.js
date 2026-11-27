let books = [
  { id: '1', title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes' },
  { id: '2', title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
  { id: '3', title: 'La sombra del viento', author: 'Carlos Ruiz Zafón' },
];

const getBooks = async () => books;

const getBookById = async (id) => books.find((book) => book.id === id);

const addBook = async (book) => {
  books = books.concat(book);
  return book;
};

const deleteBook = async (id) => {
  books = books.filter((book) => book.id !== id);
};

const generateId = () => {
  if (books.length === 0) {
    return '1';
  }
  const maxId = Math.max(...books.map((b) => Number(b.id)));
  return String(maxId + 1);
};

export default { getBooks, getBookById, addBook, deleteBook, generateId };
