const dummy = (blogs) => 1;

const totalLikes = (blogs) => blogs.reduce((sum, blog) => sum + blog.likes, 0);

const highestLikes = (blogs) => {
	if (!blogs) return 0;

	let likedBlog = blogs[0];
	blogs.forEach((blog) => {
		if (blog.likes > likedBlog.likes) {
			likedBlog = blog;
		}
	});

	return {
		title: likedBlog.title,
		author: likedBlog.author,
		likes: likedBlog.likes
	};
};

module.exports = {
	dummy,
	totalLikes,
	highestLikes
};
