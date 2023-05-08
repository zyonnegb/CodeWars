function isMerge(str, p1, p2) {
    if (!str.length) return !p1.length && !p2.length;
    if (p1.length && str.charAt(0) == p1.charAt(0)) {
      if (p2.length && str.charAt(0) == p2.charAt(0)) {
        return isMerge(str.substr(1), p1.substr(1), p2) || isMerge(str.substr(1), p1, p2.substr(1));
      }
      else {
        return isMerge(str.substr(1), p1.substr(1), p2);
      }
    }
    else if (p2.length && str.charAt(0) == p2.charAt(0)) {
      return isMerge(str.substr(1), p1, p2.substr(1));
    }
    else {
      return false;
    }
  }