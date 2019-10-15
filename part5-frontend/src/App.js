import React, { useState, useEffect } from 'react';
import blogService from './services/blogs';
import loginService from './services/login';
import Blog from './components/Blog';
import AddBlog from './components/AddBlog';
import Notification from './components/Notification';
import Togglable from './components/Togglable';

const App = () => {
	const [ blogs, setBlogs ] = useState([]);
	const [ user, setUser ] = useState(null);
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ notification, setNotification ] = useState({});

	useEffect(() => {
		blogService.getAll().then((blogs) => setBlogs([ ...blogs ].sort((a, b) => (a.likes < b.likes ? 1 : -1))));
	}, []);

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedBlogUser');
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			setUser(user);

			blogService.setToken(user.token);
		}
	}, []);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const user = await loginService.login({
				username,
				password
			});

			window.localStorage.setItem('loggedBlogUser', JSON.stringify(user));
			blogService.setToken(user.token);
			setUser(user);
			setUsername('');
			setPassword('');
		} catch (error) {
			setNotification({ message: `Check login information`, type: 'error' });
			setTimeout(() => {
				setNotification({});
			}, 5000);
		}
	};

	const handleLogout = () => {
		window.localStorage.removeItem('loggedBlogUser');
		setUser(null);
	};

	const handleAddBlog = async (title, author, url) => {
		const newBlog = await blogService.create(title, author, url);
		if (newBlog) {
			setBlogs([ ...blogs, newBlog ]);
			blogService.getAll().then((blogs) => setBlogs(blogs));
			setNotification({ message: `${newBlog.title} has been added`, type: 'notification' });
			setTimeout(() => {
				setNotification({});
			}, 5000);
		}
	};

	if (user === null) {
		return (
			<div className="App">
				<Notification message={notification.message} type={notification.type} />

				<h1>Blogs</h1>

				<h2>Login</h2>

				<form onSubmit={handleLogin}>
					<div>
						username
						<input
							type="text"
							value={username}
							name="Username"
							onChange={({ target }) => setUsername(target.value)}
						/>
					</div>
					<div>
						password
						<input
							type="password"
							value={password}
							name="Password"
							onChange={({ target }) => setPassword(target.value)}
						/>
					</div>
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}

	return (
		<div>
			<h2>blogs</h2>
			{user.name} has logged in <button onClick={handleLogout}>Logout</button>
			<Togglable buttonLabel={'new blog'}>
				<AddBlog handleSubmit={handleAddBlog} />
			</Togglable>
			{blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
		</div>
	);
};

export default App;
