/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;

  result.insert = function(k, v) {
    var idx = getIndexBelowMaxForKey(k, result.storageLimit);
    if (result.storage[idx] === undefined) {
      result.storage[idx] = [[k, v]];
      result.size++;
    } else {
      result.storage[idx].push([k, v]);
      result.size++;
    }
  };

  result.retrieve = function(k) {
    var idx = getIndexBelowMaxForKey(k, result.storageLimit);
    if (result.storage[idx] === undefined) {
      return undefined;
    } else if (result.storage[idx][0][0] === k) {
      return result.storage[idx][0][1];
    } else {
      for (let i = 0; i < result.storage[idx]; i++) {
        if (result.storage[idx][i][0] === k) {
          return result.storage[idx][i][1];
        }
      }
    }
  };

  result.remove = function(k) {
    var idx = getIndexBelowMaxForKey(k, result.storageLimit)
    if (result.storage[idx] === undefined) {
      return null;
    }
    for (let i = 0; i < result.storage[idx]; i++) {
      if (result.storage[idx][i][0] === k) {
        result.storage[idx].splice(i, 1);
        result.size--;
        return result.storage[idx][i][1];
      }
    }
    return null;
  };

  result.resize = function(newLimit) {

  }

  return result;
};
