function parse(topics){
    const responseArray = [];

    if (topics && Array.isArray(topics)) {
      topics.forEach(topic => {
        responseArray.push({
          url: topic['FirstURL'],
          title: topic['Text'],
        });
      });
    }

    return responseArray;
}

module.exports = {
  parse
}