module.exports = function(babel) {
  const t = babel.types;
  return {
    visitor: {
      ObjectExpression: function(path) {
        const isArrayLike = path.node.properties.some(
          property => property.key.name === "length"
        );
        // 防止嵌套解析
        if (isArrayLike && !path.node.done) {
          path.node.done = true;
          path.replaceWith(
            t.callExpression(
              t.memberExpression(t.identifier("Array"), t.identifier("form")),
              // 函数参数以数组形式传入
              [path.node]
            )
          );
        }
      }
      // ArrayExpression: function(path) {
      //   path.replaceWith(
      //     t.callExpression(
      //       t.memberExpression(t.identifier("Array"), t.identifier("form")),
      //       path.node.elements
      //     )
      //   );
      // }
    }
  };
};
