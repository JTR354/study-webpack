module.exports = function loader(source, sourceMap, data) {
	console.log(source, sourceMap, data);
	console.log(1);
	console.log(2);
	console.log(3);
	return source;
};
