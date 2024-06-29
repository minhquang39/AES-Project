const topics = [
  {
    topic: "ReactJS",
    posts: [
      { postID: "id1", title: "title1" },
      { postID: "id2", title: "title2" },
    ],
  },
  {
    topic: "Vue.js",
    posts: [
      { postID: "id3", title: "title3" },
      { postID: "id4", title: "title4" },
    ],
  },
];

// output[
//   ({ postID: "id1", title: "title1" },
//   { postID: "id2", title: "title2" },
//   { postID: "id3", title: "title3" },
//   { postID: "id4", title: "title4" })
// ];

var output = topics.reduce((result, topic) => {
  return [result, topic.posts];
}, []);

console.log(output);
