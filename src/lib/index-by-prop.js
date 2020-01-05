const indexByProp = data => prop =>
  data.reduce((acc, curr) => {
    acc[curr[prop]] = curr
    return acc
  }, {})

export default indexByProp
