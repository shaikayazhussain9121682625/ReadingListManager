import { useState } from "react";
import './index.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [books, setBooks] = useState([]);
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            setIsAuthenticated(true);
        }
    };

    const handleAddBook = () => {
        if (bookTitle && bookAuthor) {
            setBooks([...books, { title: bookTitle, author: bookAuthor }]);
            setBookTitle("");
            setBookAuthor("");
        }
    };

    return (
        <div className="container">
            <h1>Reading List Manager</h1>
            {!isAuthenticated ? (
                <div>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Your Reading List</h2>
                    <input
                        type="text"
                        placeholder="Book Title"
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={bookAuthor}
                        onChange={(e) => setBookAuthor(e.target.value)}
                    />
                    <button onClick={handleAddBook}>Add Book</button>
                    <ul>
                        {books.map((book, index) => (
                            <li key={index}>
                                <strong>{book.title}</strong> by {book.author}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;