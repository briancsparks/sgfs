
const me = module.exports;

if (Object.keys(me).length === 0) {

  module.exports = new FileSystem();
}

const { Dir  } = require('./lib/directory');
const { File } = require('./lib/file');

function FileSystem() {
  let self = this;

  self.files = {};    // The file cache
  self.dirs  = {};    // The dir cache
  self.cache = {};

  self.dir = function (path) {
    if (self.dirs[path]) {
      return self.dirs[path];
    }

    const result = new Dir(self, path);
    self.dirs[result.path] = result;

    return result;
  };

  self.file = function (path) {
    if (self.files[path]) {
      return self.files[path];
    }

    const result = new File(self, path);
    self.files[result.path] = result;

    return result;
  }
}
