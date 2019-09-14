let fs = require('fs');
var exports = module.exports = {};


exports.mkNewBlog = function(blogName) {
    try {
        fs.mkdir(`../../content/blog/${blogName}`, () => console.log("Worked"));
        fs.writeFile(`../../content/blog/${blogName}/index.md`,'title:New Blog',() =>  console.log("Worked"));
    } catch (exception) {
        console.log(exception)
    }

    return `${blogName} was created`;
}