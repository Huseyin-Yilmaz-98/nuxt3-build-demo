const dynamicChunks = {
 ['186.mjs']: () => import('../build/186.mjs'),
 ['276.mjs']: () => import('../build/276.mjs'),
 ['366.mjs']: () => import('../build/366.mjs'),
 ['674.mjs']: () => import('../build/674.mjs'),
 ['898.mjs']: () => import('../build/898.mjs')
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
