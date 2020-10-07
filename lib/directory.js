
const fs   = require('fs');
const path = require('path');

module.exports.Dir = function (filesystem, path_) {
  let self = this;
  self.path = path_ || process.cwd();

  self.cd = function (relativePath) {
    const newPath = path.join(self.path, relativePath);
    return filesystem.dir(newPath);
  };

  self.setName = function(name) {
    filesystem.cache[name] = self;
  };

  self.writeFileSync = function(filename, ...rest) {
    const pathname = path.join(self.path, filename);
    return fs.writeFileSync(pathname, ...rest);
  };
};
